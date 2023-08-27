import { Card, CardActions, CardContent, Typography } from "@mui/material";

import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)`
   width:238px;
   margin: 10px;
   box-shadow: none;
   border: 1px solid #e0e0e0;
   border-radius: 5px;
`


const Note = ({note}) => {
      return(
          <StyledCard>
              <CardContent>
                  <Typography>{note.heading}</Typography>
                  <Typography>{note.text}</Typography>
              </CardContent>
              <CardActions>
                
              </CardActions>
          </StyledCard>
      )
}

export default Note;