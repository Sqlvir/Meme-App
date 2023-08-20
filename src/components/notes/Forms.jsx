
import { useState, useRef, useEffect } from "react";

import { Box, TextField, ClickAwayListener } from "@mui/material";
import { styled } from "@mui/material/styles";

import {useDropzone} from "react-dropzone";

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

const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
  };
  
  const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
  };
  
  const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
  };
  
  const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
  };

const Forms = () => {

    const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: {
      'imgs/*': []
    },
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });
  
  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          // Revoke data uri after image is loaded
          onLoad={() => { URL.revokeObjectURL(file.preview) }}
         alt="previewImg"/>
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, []);

    const [showTextField, setShowTextField] = useState(false);

    const containerRef = useRef();

    const onTextAreaClcik = () => {
          setShowTextField(true);
          containerRef.current.style.minHeight = '140px'
    }

    const handleClickAway = () => {
        setShowTextField(false);
        containerRef.current.style.minHeight = '15px'
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
                            />
                        
                    }
                
                    <TextField 
                        placeholder="Create new Meme...."
                        multiline
                        maxRows={Infinity}
                        variant="standard"
                        InputProps={{ disableUnderline: true}}
                        onClick={onTextAreaClcik}
                    />
                    { showTextField &&
                            <section className="container">
                            <div {...getRootProps({className: 'dropzone'})}>
                              <input {...getInputProps()} />
                              <p>Drag & drop meme image here or click to select files</p>
                            </div>
                            <aside style={thumbsContainer}>
                              {thumbs}
                            </aside>
                          </section>
                    }
            </Container>
          </ClickAwayListener>
          
     )
}

export default Forms;