import "./header.css";

import React from "react";

import logo from "../../assets/logo_bewebcademy_whitetext.svg";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Drawer, Toolbar, Box } from "@mui/material";
import { Divider, List, ListItem, ListItemButton, ListItemText, IconButton, Typography, Button, ButtonBase } from "@mui/material";


let role = "user"
const userHeaderItems = ['home', 'exercice', 'profil'];
const adminHeaderItems = ['utilisateurs', 'badges', 'archives']
// const url = "http://localhost:3000/"

export default function Header() {

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const container = window !== undefined ? () => document.body : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // const testing = (e: any) => {
  //   console.log("")
  // }

  const drawerBurger = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img src={logo} alt="beweb-academy" />
      </Typography>
      <List component="nav">
        {userHeaderItems.map((item, i) => (
          <><Divider />
            <ListItem key={i}>
              <ListItemButton href={"/" + item} sx={{ textAlign: 'center', maxHeight: '100%' }} key={i}>
                <ListItemText primary={item} key={i} />
              </ListItemButton>
            </ListItem>
          </>
        ))}
        <Divider />

        <ListItem >
          <ListItemButton href="/logout" sx={{ textAlign: 'center', maxHeight: '100%' }}>
            <ListItemText primary="Deconnexion" sx={{ ml: 3 }} />
            <ListItemText primary={<LogoutIcon sx={{ mt: 0.6, ml: -5 }}></LogoutIcon>} />
          </ListItemButton>
        </ListItem>
        <Divider />
      </List>
    </Box>
  );

  if (role == "user") {
    return (
      <ThemeProvider theme={theme}>
        <AppBar className="appBar" position="sticky">
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

            {/* insert logo with condition window size */}
            <Box
              component="div"
              sx={{ mt: 0.5 }}
            >
              <img src={logo} alt="beweb-academy" />
            </Box>

            {/* insert icon menu burger with condition window size */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'block', md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <ThemeProvider theme={theme2}>
              {/* display buttons with conditions window size */}
              <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex' }, justifyContent: 'flex-end', width: '30vw' }}>
                <Box component='div' sx={{ width: '100%', display: 'flex', justifyContent: 'space-around'}}>
                  {userHeaderItems.map((item, i) => (
                    <Button className="buttonHeader" name={item} href={"/" + item} key={i}>
                      {item}
                    </Button>
                  ))}
                </Box>
                <ButtonBase href="/deconnexion">
                  <IconButton name="deconnexion">
                    <LogoutIcon color="secondary" sx={{ mb: 0.4 }}></LogoutIcon>
                  </IconButton>
                </ButtonBase>
              </Box>
            </ThemeProvider>
          </Toolbar>
        </AppBar>

        {/* contenu du menu burger deroulé */}
        <Drawer
          anchor="right"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}
          sx={{
            display: { xs: 'flex', sm: 'flex', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: 240,
              color: '#FFF',
            },
          }}
        >
          {drawerBurger}
        </Drawer>
      </ThemeProvider>
    );


  } else if (role == "admin") {
    return (
      <ThemeProvider theme={theme}>
        <AppBar className="appBar">
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

            {/* insert logo with condition window size */}
            <Box
              component="div"
              sx={{ mt: 0.5 }}
            >
              <img src={logo} alt="beweb-academy" />
            </Box>

            {/* insert icon menu burger with condition window size */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'block', md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <ThemeProvider theme={theme2}>
              {/* display buttons with conditions window size */}
              <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                {adminHeaderItems.map((item, i) => (
                  <Button className="buttonHeader" name={item} href={"/" + item} key={i}>
                    {item}
                  </Button>

                ))}
                <ButtonBase href="/deconnexion">
                  <IconButton name="deconnexion">
                    <LogoutIcon color="secondary" sx={{ mb: 0.4 }}></LogoutIcon>
                  </IconButton>
                </ButtonBase>
              </Box>
            </ThemeProvider>
          </Toolbar>
        </AppBar>

        {/* contenu du menu burger deroulé */}
        <Drawer
          anchor="right"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}
          sx={{
            display: { xs: 'flex', sm: 'flex', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: 240,
              color: '#FFF',
            },
          }}
        >
          {drawerBurger}
        </Drawer>
      </ThemeProvider>
    );

  } else return (
    <ThemeProvider theme={theme}>
      <AppBar className="appBar">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

          <Box
            component="div"
            sx={{ mt: 0.5 }}
          >
            <img src={logo} alt="beweb-academy" />
          </Box>

        </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}


const theme = createTheme({
  typography: {
    fontSize: 15,
  },

  palette: {
    primary: {
      main: '#1D1D1D',
    },
    secondary: {
      main: '#DB1144',
    },
    neutral: {
      main: '#FFFFFF'
    },
    background: {
      paper: '#1D1D1D',
    },
    text: {
      primary: '#1D1D1D',
      secondary: '#DB1144',
    },
    action: {
      active: '#001E3C',
    }
  }
})

const theme2 = createTheme({
  palette: {
    primary: {
      main: '#FFF',
    },
    secondary: {
      main: '#DB1144',
    }
  }
})

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
  }
}

