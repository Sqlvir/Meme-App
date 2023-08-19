
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

//Forms
import Forms from "./Forms";

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
  }));



const Notes = () => {
    return(
        <Box sx={{ display: 'flex', width: '100%' }}>
                <Box sx={{ p: 3, width: '100%' }}>
                <DrawerHeader />
                <Forms/>
                </Box>
            </Box>
    )
}

export default Notes;