import React, { useState } from "react";
import { useSelector } from "react-redux";

//MATERIAL UI
import { fade, makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

import Media from "react-media";

const NavBar = ({filterMissions}) => {
  const [open, setOpen] = useState();
  const [search, setSearch] = useState("")
  const missions = useSelector(state => state.missions);
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1,
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block"
      }
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25)
      },
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto"
      }
    },
    searchIcon: {
      width: theme.spacing(7),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    inputRoot: {
      color: "inherit"
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: 120,
        "&:focus": {
          width: 200
        }
      }
    },
    colorPrimary: {
        background: "#1A2059"
    }
  }));
  const classes = useStyles();

  const toggleDrawer = () => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(!open);
  };

  const sideList = side => (
    <div
      role="presentation"
      onClick={toggleDrawer()}
      onKeyDown={toggleDrawer()}
    >
      <List>
        <ListItem component="a" href="http://SPACEX.com">
          <ListItemText primary="SPACE X HOME" />
        </ListItem>
      </List>
      <Divider />
      <List>
        {missions.map(({ mission_name }) => {
          return (
            <ListItem
              component="a"
              href="http://immichaelharris.com"
              key={mission_name}
            >
              <ListItemText primary={mission_name} />
            </ListItem>
          );
        })}
      </List>
    </div>
  );

  const handleChange = e => {
    setSearch(e.target.value)
    filterMissions(search)
  }
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.colorPrimary}>
        <Toolbar>
          <Media query="(max-width:1000px)">
            {matches =>
              matches ? (
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={toggleDrawer()}
                >
                  <MenuIcon />
                </IconButton>
              ) : null
            }
          </Media>
          <Typography className={classes.title} variant="h6" noWrap />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              onChange={handleChange}
              value={search}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer open={open} onClose={toggleDrawer()}>
        {sideList("left")}
      </Drawer>
    </div>
  );
};

export default NavBar;
