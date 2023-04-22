import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { routes } from "../config/routes";
import { List , ListItem , ListItemIcon , ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Container } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: "100%"
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    },
    routesList : {
        display : "flex",
    },
    link : {
        color : "white",
    }
}));

export default function Navigation() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Container>
                <Toolbar >
                    <List component="nav" className={classes.routesList}>
                        {routes
                            .filter((route) => route.name)
                            .filter((route) => !route.excludeFromNavigation)
                            .map((route, index) => (
                                <Link to={route.path} key={index} className={classes.link}>
                                    <ListItem button divider className={classes.root}>
                                        <ListItemIcon>{route.icon}</ListItemIcon>
                                        <ListItemText primary={route.name} />
                                    </ListItem>
                                </Link>
                            ))}
                    </List>
                </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}


// navigation links yo !!!

{/* <List component="nav">
{routes
  .filter((route) => route.name)
  .filter((route) => {
    if (!route.user_type) return true;
    if (route.user_type === userContext.user.user_type) return true;
    return false;
  })
  .map((route, index) => (
    <Link to={route.path} key={index}>
      <ListItem button divider className={classes.root}>
        <ListItemIcon>{route.icon}</ListItemIcon>
        <ListItemText primary={route.name} />
      </ListItem>
    </Link>
  ))}
</List> */}
