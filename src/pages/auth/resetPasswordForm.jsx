import { useState } from "react";
import * as Yup from 'yup'
import {useForm} from 'react-hook-form'
import {yupResolver} from "@hookform/resolvers/yup"
import { async } from "emoji-mart";
import FormProvider from "../../components/hook-form/FormProvider";
import { Alert, Button, IconButton, InputAdornment, Stack } from "@mui/material";
import { RHFTextField } from "../../components/hook-form";
import { Eye, EyeSlash } from "phosphor-react";
import { Link } from "react-router-dom";
 
function ResetPasswordForm() {

    const LoginSchema = Yup.object().shape({
        email: Yup.string().required('Email is required').email('Email must valid'), 
    })

    const defaultValues = {
        email: 'demo@tawk.com', 
    }

    const methods = useForm({
        resolver: yupResolver(LoginSchema), 
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
                <RHFTextField name={'email'} label={"Email address"} />
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

export default ResetPasswordForm;