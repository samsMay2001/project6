import { useTheme } from "@mui/material";
import { useState } from "react";

function NewContact() {
    const theme = useTheme()
    const [openDialogue, setOpenDialogue] = useState(false); 
    return ( 
        <div>
            Freinds and Friend requests
        </div>
     );
}

export default NewContact;