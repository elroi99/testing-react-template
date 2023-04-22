import React from "react";
import Routes from "./routes/Routes";
import { Grid, withStyles } from "@material-ui/core";
import Navigation from "./app-bar/Navigation";
import { Container } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    padding: theme.spacing(2),
  },
});
function Main({ classes }) {
  return (
        <Grid container direction="row">
          <Grid item md={12}>
            <Navigation />
          </Grid>
          <Grid className={classes.root} container item lg={12}>
            <Container> 
              <Routes />
            </Container>
          </Grid>
        </Grid>
  );
}

export default withStyles(styles, { withTheme: true })(Main);
