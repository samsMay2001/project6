import { useEffect, useState } from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { async } from "emoji-mart";
import FormProvider from "../../components/hook-form/FormProvider";
import {
  Alert,
  Button,
  IconButton,
  InputAdornment,
  Stack,
} from "@mui/material";
import { RHFTextField } from "../../components/hook-form";
import { Eye, EyeSlash } from "phosphor-react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  createUser,
  LoginUser,
  resetErrorMessage,
} from "../../redux/slices/auth";
import { useSelector } from "react-redux";

function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const RegisterSchema = Yup.object().shape({
    firstname: Yup.string().required("First name is required"),
    lastname: Yup.string().required("Last name is required"),
    email: Yup.string().required("Email is required").email("Email must valid"),
    password: Yup.string().required("Password is required"),
  });

  const defaultValues = {
    firstname: "",
    lastname: "",
    email: "demo@tawk.com",
    password: "demo@1234",
  };

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitted, isSubmitSuccessful },
  } = methods;

  const onSubmit = async (data) => {
    try {
      // submit data
      //   console.log(data);
      dispatch(createUser(data));
    } catch (err) {
      console.log(err);
      reset();
      setError("afterSubmit", {
        ...err,
        message: err.message,
      });
    }
  };

  useEffect(() => {
    // displays errors that may have occured while loging in on the server.
    if (errorMessage && errorMessage.length > 1) {
      reset();
      setError("afterSubmit", {
        message: errorMessage,
      });
      dispatch(resetErrorMessage());
    }
  }, [errorMessage]);
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message}</Alert>
        )}
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <RHFTextField name={"firstname"} label={"First name"} />
          <RHFTextField name={"lastname"} label={"Last name"} />
        </Stack>
        <RHFTextField name={"email"} label={"Email address"} />
        <RHFTextField
          name={"password"}
          label={"Password"}
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                >
                  {showPassword ? <Eye /> : <EyeSlash />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button
          fullWidth
          color="inherit"
          size="large"
          type="submit"
          variant="contained"
          sx={{
            bgcolor: "text.primary",
            color: (theme) =>
              theme.palette.mode === "light" ? "common.white" : "grey.800",
            "&:hover": {
              bgcolor: "text.primary",
              color: (theme) =>
                theme.palette.mode === "light" ? "common.white" : "grey.800",
            },
          }}
        >
          Register
        </Button>
      </Stack>
    </FormProvider>
  );
}

export default RegisterForm;
