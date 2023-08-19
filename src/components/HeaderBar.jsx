import * as React from 'react';
import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';
import logo from '../imgs/meme-generator-logo.png';


const Header = styled(AppBar)`
    z-index: 1201;
    background: #fff;
    height: 60px;
    box-shadow: inset 0 -1px 0 0 #dadce0;
`


const HeaderBar = ({ open, handleDrawer}) => {

  <img src={logo} alt="logo" />
    return (
        <Header open={open}>
        <Toolbar>
          <IconButton
            onClick={handleDrawer}
            edge="start"
            sx={{
              marginRight: "20px",
            }}
          >
            <Menu />
          </IconButton>
          <img src={logo} alt="logo" style={{width: 60, paddingTop: '2px', paddingBottom: '5px'}} />
        </Toolbar>
      </Header>
    )
}

export default HeaderBar;