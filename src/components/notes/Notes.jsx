import { useContext } from "react";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

//Forms
import Forms from "./Forms";
import Note from "./Note";


import { DataContext } from "../../context/DataProvider";

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
  }));



const Notes = () => {

    const { notes } = useContext(DataContext);

    return(
        <Box sx={{ display: 'flex', width: '100%' }}>
                <Box sx={{ p: 3, width: '100%' }}>
                <DrawerHeader />
                <Forms />
                <Grid container style={{marginTop: '8px', width: '1040px', margin: 'auto'}}>
                    {
                        notes.map(note => (
                            <Grid item>
                               <Note note={note} />
                            </Grid>
                        ))
                    }
                </Grid> 
                </Box>
            </Box>
    )
}

export default Notes;