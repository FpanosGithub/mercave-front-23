import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import adif from '../../Static/arte/logoMercave.jpg'

const pages = ['Vagones','Ejes','Cambiadores',];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = ({onClick}) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);  
  };
  const handleCloseNavMenu = ({page}) => {
    setAnchorElNav(null);
    if (page) {onClick ({type:'SELECCIONAR_MENU', payload: page})}
  //  else if(event.target.innerHTML){onClick ({type:'SELECCIONAR_MENU', payload:'Inicio'})}
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" style = {{backgroundColor:'#164b24'}}>
      <Container maxWidth="xxl" >
        <Toolbar disableGutters>
          {/*  LOGO */}
          <MenuItem id={'Inicio'} key={'Inicio'} sx = {{pr:7, pl:0}} onClick={()=>handleCloseNavMenu({page:'Inicio'})}>
              <img src={adif} alt = 'logo' height = {60} width = {90}/>
          </MenuItem>

          {/*  Hamburger (+ menú escamoteable): APARECE en xs  DESAPARECE en md */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            {/*   Hamburger icon   */}
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
                  <MenuIcon />   
            </IconButton>
            {/*   Menú escamoteable del Hamburger Icon  */}
            <Menu              
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{vertical: 'bottom', horizontal: 'left',}}
              keepMounted
              transformOrigin={{vertical: 'top', horizontal: 'left',}}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{display: { xs: 'block', md: 'none' },}}>    

              {pages.map((page) => (
                <MenuItem id={page} key={page} onClick={()=>handleCloseNavMenu({page})}>
                  <Typography textAlign="center" sx={{fontSize: 16}}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu> 
          </Box>
          
          {/* Menú de la appbar */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                id = {page}
                key={page}
                onClick={()=>handleCloseNavMenu({page})}
                sx={{ my: 2, color: 'white', display: 'block', fontSize: 16 }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/*  Icono Usuario + Menú escamoteable */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
