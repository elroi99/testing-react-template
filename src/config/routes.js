import React from "react";
import Home from "../pages/home/Home";
import HomeIcon from "@material-ui/icons/Home";
import Menu from "../pages/menus/Menu";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import NoMatch from "../pages/noMatch/NoMatch";

export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    icon: <HomeIcon />,
  },
  {
    path: "/menu/:id",
    name: "Menu",
    component: Menu,
    icon: <MenuBookIcon />,
  },
  {
    path: "/menu",
    name: "Private Menu",
    component: Menu,
    icon: <MenuBookIcon />,
    is_private: true,
  },
  {
    path: "/menu",
    name: "Private Menu",
    component: Menu,
    icon: <MenuBookIcon />,
    is_private: true,
    user_type: "vendor",
  },
  {
    path: "/menu",
    name: "Admin Private Menu",
    component: Menu,
    icon: <MenuBookIcon />,
    is_private: true,
    user_type: "admin",
  },
  {
    path : "*",
    name : "No Match",
    component : NoMatch,
    icon : <MenuBookIcon/>,
  }
];
