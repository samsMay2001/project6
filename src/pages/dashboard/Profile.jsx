import { Stack } from "@mui/material";
import { ProfileForm } from "../auth/ProfileForm";

function Profile(){
    return (
        <div>
            <Stack alignItems={'center'} justifyContent={'center'}>        
                <Stack p={4} spacing={5}>
                    <ProfileForm/>
                </Stack>
            </Stack>
        </div>
    )
}

export default Profile; 