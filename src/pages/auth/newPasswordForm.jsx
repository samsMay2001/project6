import { useState } from "react";
import * as Yup from 'yup'
import {useForm} from 'react-hook-form'
import {yupResolver} from "@hookform/resolvers/yup"
import { async } from "emoji-mart";
import FormProvider from "../../components/hook-form/FormProvider";
import { Alert, Button, IconButton, InputAdornment, Link, Stack, Typography } from "@mui/material";
import { RHFTextField } from "../../components/hook-form";
import { CaretLeft, Eye, EyeSlash } from "phosphor-react";
import { Link as RouterLink } from "react-router-dom";
function NewPasswordForm() {
    const [showPassword, setShowPassword] = useState(false); 

    const NewPasswordSchema = Yup.object().shape({
        password: Yup.string().required('Password is required'),
        newPasssword: Yup.string().required('Password is required')
    })

    const defaultValues = {
        password: '',
        newPasssword: ''
    }

    const methods = useForm({
        resolver: yupResolver(NewPasswordSchema), 
        defaultValues
    })

    const {
        reset, 
        setError, 
        handleSubmit, 
        formState : {errors, isSubmitted, isSubmitSuccessful}
    } = methods;

     const onSubmit = async (data) => {
        try{
            // submit data
        }catch(err){
            console.log(err); 
            reset(); 
            setError("afterSubmit", {
                ...err, 
                message: err.message
            })
        }
    }
    return ( 
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
                {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}
                <RHFTextField name={'password'} label={"New Password"} type={showPassword ? "text" : "password"} 
                    InputProps={{
                        endAdornment: (
                            <InputAdornment>
                                <IconButton onClick={()=> {
                                    setShowPassword(!showPassword)
                                }}>
                                    {showPassword ? <Eye/> : <EyeSlash/>}
                                </IconButton>
                            </InputAdornment>
                        )
                    }} 
                />
                <RHFTextField name={'newPassword'} label={"Confirm Password"} type={showPassword ? "text" : "password"} 
                    InputProps={{
                        endAdornment: (
                            <InputAdornment>
                                <IconButton onClick={()=> {
                                    setShowPassword(!showPassword)
                                }}>
                                    {showPassword ? <Eye/> : <EyeSlash/>}
                                </IconButton>
                            </InputAdornment>
                        )
                    }} 
                />
                <Button fullWidth color="inherit" size="large" type="submit" variant="contained" sx={{
                    bgcolor: 'text.primary', 
                    color: (theme) => theme.palette.mode === "light" ? "common.white" : "grey.800", 
                    "&:hover": {
                        bgcolor: "text.primary", 
                        color: (theme) => 
                        theme.palette.mode === "light" ? "common.white" : "grey.800"
                    }
                }}>
                    Send Request
                </Button>
            </Stack>
        </FormProvider>
     );
}

export default NewPasswordForm;

