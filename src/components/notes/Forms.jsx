
import { useState, useRef, useContext } from "react";

import { Box, TextField, ClickAwayListener, InputAdornment } from "@mui/material";
import { styled } from "@mui/material/styles";

//import {useDropzone} from "react-dropzone";

import { DataContext } from "../../context/DataProvider";

import {v4 as uuid} from "uuid";

import { InputOutlined as Inputtype, NotesOutlined as Textnotes } from '@mui/icons-material';


const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    margin: auto;
    box-shadow: 0 2px 3px rgba(0,0,0,.20);
    width: 450px;
    background-clip: padding-box;
    border-color: #e0e0e000;
    border: 1px solid #00000042;
    border-radius: 5px;
    min-height: 28px;
    padding: 5px 15px;
`

const note = {
    id: '',
    heading: '',
    text: ''
}

const Forms = () => {
  
    const [showTextField, setShowTextField] = useState(false);
    const [addNote, setAddNote] = useState({...note, id: uuid()});

    const { setNotes } = useContext(DataContext);
    const containerRef = useRef();

    const onTextAreaClcik = () => {
          setShowTextField(true);
          containerRef.current.style.minHeight = '80px'
    }

    const handleClickAway = () => {
        setShowTextField(false);
        containerRef.current.style.minHeight = '30px'
        setAddNote({...note, id: uuid()})

        if(addNote.heading || addNote.text )
        {
           setNotes(prevArr => [addNote, ...prevArr]);
        }
    }

    const onTextChange = (e) => {
      let changedNote = {...addNote, [e.target.name]: e.target.value}
      setAddNote(changedNote);
    }

     return (
          <ClickAwayListener onClickAway={handleClickAway}>
                <Container ref={containerRef}>
                    { showTextField &&
                       
                           <TextField
                            placeholder="Meme Heading"
                            variant="standard"
                            InputProps={{ disableUnderline: true, startAdornment: (
                                <InputAdornment position="start">
                                  <Inputtype />
                                </InputAdornment>
                              ), }}
                            style={{ marginBottom: 10}}
                            onChange={(e) => onTextChange(e)}
                            name="heading"
                            value={addNote.heading}
                            sx={{"& input::placeholder": { fontSize: ".975rem", fontWeight: "500", color: "#202124", opacity: 0.97, fontFamily: "Roboto,Arial,sans-serif!important"},}}
                            />
                    }
                  
                    <TextField 
                        placeholder="Create new Meme...."
                        multiline
                        maxRows={Infinity}
                        variant="standard"
                        InputProps={{ disableUnderline: true, startAdornment: (
                            <InputAdornment position="start">
                              <Textnotes />
                            </InputAdornment>
                          ),}}
                        onClick={onTextAreaClcik}
                        onChange={(e) => onTextChange(e)}
                        name="text"
                        value={addNote.text}
                        sx={{"& textarea::placeholder": { fontSize: ".975rem", fontWeight: "500", color: "#202124", opacity: 0.97, fontFamily: "Roboto,Arial,sans-serif!important"},}}
                    />
            </Container>
          </ClickAwayListener>
          
     )
}

export default Forms;