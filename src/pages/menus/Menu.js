import React from "react";
import { Grid } from "@material-ui/core";
import { useParams } from "react-router-dom";

function Menu() {
    const { id } = useParams();
    console.log(id);
    return (
        <Grid container item>
            Menu2
        </Grid>
    );
}

export default Menu;
