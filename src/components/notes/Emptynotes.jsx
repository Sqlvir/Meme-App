import { StyleOutlined as Videostable } from '@mui/icons-material';
import { Box, Typography } from "@mui/material";
import {styled} from "@mui/material/styles";

const Video = styled(Videostable)`
     font-size: 100px;
     color: #bbbbbb;
`

const Text = styled(Typography)`
     color: #bbbbbb;
     font-size: 25px;
     font-weight:500;
     background: linear-gradient(to right, #626262, #706b68, #9b999b, #b9b8b3);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    padding-top:30px;
`

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20vh;

`


const Emptynotes = () => {
    return(
        <Container>
            <Video className='zoom-in-out-box' />
            <Text>Meme's will appear here</Text>
        </Container>
    )
}

export default Emptynotes;