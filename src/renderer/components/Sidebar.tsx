/* eslint-disable @typescript-eslint/no-shadow */
import React, { FunctionComponent } from 'react';

import {
  createTheme,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import HomeIcon from '@material-ui/icons/Home';
import DvrIcon from '@material-ui/icons/Dvr';
// import SettingsIcon from '@material-ui/icons/Settings';
import ListIcon from '@material-ui/icons/List';
import { matchPath, useLocation, Link } from 'react-router-dom';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const useStyles = makeStyles((theme = createTheme().spacing(1, 3)) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  menuItem: {
    padding: `${theme} !important`,
  },
}));

interface SidebarProps {
  navigationEnabled: boolean;
}

// eslint-disable-next-line react/prop-types
const Sidebar: FunctionComponent<SidebarProps> = ({ navigationEnabled }) => {
  const styles = useStyles();

  const location = useLocation();
  const homeActive = matchPath(location.pathname, '/home') !== null;
  // const settingsActive = matchPath(location.pathname, '/settings') !== null;
  const contatoActive = matchPath(location.pathname, '/contato') !== null;
  const sobreActive = matchPath(location.pathname, '/sobre') !== null;

  return (
    <Drawer
      className={styles.drawer}
      variant="permanent"
      classes={{
        paper: styles.drawerPaper,
      }}
    >
      <Toolbar />
      <Divider />
      <div className={styles.drawerContainer}>
        <List>
          <ListItem
            component={Link}
            to="/home"
            selected={homeActive}
            className={styles.menuItem}
            button
            disabled={!navigationEnabled}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>

          <ListItem
            component={Link}
            to="/contato"
            selected={contatoActive}
            className={styles.menuItem}
            button
            disabled={!navigationEnabled}
          >
            <ListItemIcon>
              <ListIcon />
            </ListItemIcon>
            <ListItemText primary="Contato" />
          </ListItem>

          <ListItem
            component={Link}
            to="/sobre"
            selected={sobreActive}
            className={styles.menuItem}
            button
            disabled={!navigationEnabled}
          >
            <ListItemIcon>
              <DvrIcon />
            </ListItemIcon>
            <ListItemText primary="Sobre" />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};

export default Sidebar;
