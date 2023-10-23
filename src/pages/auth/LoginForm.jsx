import { useState } from "react";
import * as Yup from 'yup'
import {useForm} from 'react-hook-form'
import {yupResolver} from "@hookform/resolvers/yup"
import { async } from "emoji-mart";
import FormProvider from "../../components/hook-form/FormProvider";
import { Alert, Stack } from "@mui/material";
import { RHFTextField } from "../../components/hook-form";
 
function LoginForm() {
    const [showPassword, setShowPassword] = useState(false); 

    const loginSchema = Yup.object().shape({
        email: Yup.string().required('Email is required').email('Email must valid'), 
        password: Yup.string().required('Password is required')
    })

    const defaultValues = {
        email: 'demo@tawk.com', 
        password: 'demo@1234'
    }

    const methods = useForm({
        resolver: yupResolver(LoginForm), 
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
            </Stack>
            <RHFTextField name={'email'} label={"Email address"} />
        </FormProvider>
     );
}

export default LoginForm;