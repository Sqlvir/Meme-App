import { useContext } from "react";

import { Card, CardActions, CardContent, Typography } from "@mui/material";

import { styled } from "@mui/material/styles";

import { ArchiveOutlined as Archive, DeleteOutlineOutlined as Delete } from "@mui/icons-material";

import { DataContext } from "../../context/DataProvider";

import moment from "moment";

const StyledCard = styled(Card)`
   width:240px;
   margin: 10px;
   box-shadow: none;
   border: 1px solid #e0e0e0;
   border-radius: 5px;
`



const Note = ({note}) => {

    const {notes, setNotes, setArchiveNotes, setDeleteNotes} = useContext(DataContext);

     const archiveNote = (note) => {
          const updatedNotes = notes.filter(data => data.id !== note.id);
          setNotes(updatedNotes);
          setArchiveNotes(prevArr => [note, ...prevArr]);
     }

     const deleteNote = (note) => {
        const updatedNotes = notes.filter(data => data.id !== note.id);
        setNotes(updatedNotes);
        setDeleteNotes(prevArr => [note, ...prevArr]);
     }

     const date = moment().format('MM-DD-YY hh:mm');

      return(
          <StyledCard>
              <CardContent>
                  <Typography fontWeight={500} fontSize={'1.1rem'}>{note.heading}</Typography>
                  <Typography fontSize={'0.9rem'} paddingTop={'5px'}>{note.text}</Typography>
              </CardContent>
              <CardActions>
                <Archive fontSize="28px"
                   onClick={() => archiveNote(note)}
                />
                <Delete fontSize="28px"
                   onClick={() => deleteNote(note)}
                />
                <span align="right" style={{width:'150px',fontSize:'14px',fontWeight:'600'}}> {date}</span>
              </CardActions>
          </StyledCard>
      )
}

export default Note;