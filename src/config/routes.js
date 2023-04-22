import React from "react";
import Home from "../pages/home/Home";
import HomeIcon from "@material-ui/icons/Home";
import Menu from "../pages/menus/Menu";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import NoMatch from "../pages/noMatch/NoMatch";
import ProductPage from "../pages/productPage/ProductPage";

export const routes = [
  {
    path : "/",
    name: "Home",
    component: Home,
    icon: <HomeIcon />,
  },
  {
    path : "/menu/", // Link will use this. ie. it will redirect to this path. Imp. it needs a way in which
    name: "Menu",
    component: Menu,
    icon: <MenuBookIcon />,
  },
  {
    matchPath : "product/:id", 
    name : "Product",
    component : ProductPage,
    icon : null,
    excludeFromNavigation : true, 
  },
  // {
  //   path: "/menu",
  //   name: "Private Menu",
  //   component: Menu,
  //   icon: <MenuBookIcon />,
  //   is_private: true,
  // },
  // {
  //   path: "/menu",
  //   name: "Private Menu",
  //   component: Menu,
  //   icon: <MenuBookIcon />,
  //   is_private: true,
  //   user_type: "vendor",
  // },
  // {
  //   path: "/menu",
  //   name: "Admin Private Menu",
  //   component: Menu,
  //   icon: <MenuBookIcon />,
  //   is_private: true,
  //   user_type: "admin",
  // },
  {
    path : "*",
    name : "No Match",
    component : NoMatch,
    icon : <MenuBookIcon/>,
    excludeFromNavigation : true, 

  }
];
