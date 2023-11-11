import { IconButton, Stack, Typography } from "@mui/material";
import { ProfileForm } from "../auth/ProfileForm";
import { CaretLeft } from "phosphor-react";

function Profile(){
    return (
        <div>
            <Stack alignItems={'center'} justifyContent={'center'}>        
                <Stack p={4} spacing={5}>
                    {/* Header */}
                    <Stack direction={'row'} alignItems={'center'} spacing={3}>
                        <Typography variant="h5">Profile</Typography>
                    </Stack>
                    <ProfileForm/>
                </Stack>
            </Stack>
        </div>
    )
}

export default Profile; 