
import { useState, useRef, useContext } from "react";

import { Box, TextField, ClickAwayListener } from "@mui/material";
import { styled } from "@mui/material/styles";

//import {useDropzone} from "react-dropzone";

import { DataContext } from "../../context/DataProvider";

import {v4 as uuid} from "uuid";


const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    margin: auto;
    box-shadow: 0 2px 3px rgba(0,0,0,.20);
    width: 500px;
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
        containerRef.current.style.minHeight = '15px'
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
                            placeholder="Title"
                            variant="standard"
                            InputProps={{ disableUnderline: true }}
                            style={{ marginBottom: 10}}
                            onChange={(e) => onTextChange(e)}
                            name="heading"
                            value={addNote.heading}
                            />
                    }
                  
                    <TextField 
                        placeholder="Create new Meme...."
                        multiline
                        maxRows={Infinity}
                        variant="standard"
                        InputProps={{ disableUnderline: true}}
                        onClick={onTextAreaClcik}
                        onChange={(e) => onTextChange(e)}
                        name="text"
                        value={addNote.text}
                    />
            </Container>
          </ClickAwayListener>
          
     )
}

export default Forms;