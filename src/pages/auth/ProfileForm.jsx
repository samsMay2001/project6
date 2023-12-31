import * as Yup from 'yup'
import {useForm} from 'react-hook-form'
import {yupResolver} from "@hookform/resolvers/yup"
import FormProvider from "../../components/hook-form/FormProvider";
import { Alert, Button, Stack } from "@mui/material";
import { RHFTextField } from "../../components/hook-form";
import { useCallback } from 'react';


export const ProfileForm = () => {
    const ProfileSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        about: Yup.string().required('About is required'),
        avatarUrl: Yup.string().required('Avatar is required').nullable(true)
    })

    const defaultValues = {
        name: 'demo@tawk.com',
        about: 'demo@1234', 
        // avatarUrl
    }

    const methods = useForm({
        resolver: yupResolver(ProfileSchema), 
        defaultValues
    })

    const {
        reset, 
        setError, 
        watch,
        control,
        setValue,
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

    const values = watch();
    const handleDrop = useCallback((acceptedFiles)=> {
        const file = acceptedFiles[0]; 
        const newFile = Object.assign(file, {
            preview: URL.createObjectURL(file)
        })
        if (file){
            setValue("avatarUrl", newFile, {shouldValidate : true})
        }
    }, [setValue]) 
    return (
        <div>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={3}>
                    <Stack spacing={3}>
                        {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}
                        <RHFTextField name={'name'} label={"Name"} helperText={'This name is visible to your contacts'} />
                        <RHFTextField multiline rows={4} maxRows = {5} name={'about'} label={'about'} />
                    </Stack>
                    <Stack direction={'row'} justifyContent={'end'}>
                        <Button  color='primary' size='large' type='submit' variant='outlined' >Save</Button>
                    </Stack>
                </Stack>
            </FormProvider>
        </div>
    )
}