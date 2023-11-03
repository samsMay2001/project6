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
import NewPasswordForm from "./newPasswordForm";
function NewPassword() {
    
    return ( 
        <>
            <Stack spacing={2} sx={{mb: 5, position: 'relative'}}>
                <Typography variant="h3" paragraph>
                    Reset Password
                </Typography>
                <Typography sx={{color: 'text.secondary', mb: 5}}>
                    Please set your new password
                </Typography>
                
                {/* NewPassword Form  */}
                <NewPasswordForm />
                <Link component={RouterLink} to={'/auth/login'} color={'inherit'} variant="subtitle2" sx={{
                    mt: 3, 
                    mx: 'auto', 
                    alignItems: 'center', 
                    display: 'inline-flex'
                }} >
                    <CaretLeft />
                    Return to sign in
                </Link>
            </Stack>
        </>
     );
}

export default NewPassword;