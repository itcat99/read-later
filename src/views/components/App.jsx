import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

import Header from "../containers/Header";
import PostList from "../containers/PostList";

const styles = {
  root: {
    width: "300px",
    height: "300px",
    maxHeight: "350px",
    padding: "8px",
  },
};

const App = props => (
  <div className={props.classes.root}>
    <CssBaseline>
      <Grid
        direction="column"
        justify="space-between"
        alignItems="stretch"
        container
        spacing={0}
      >
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <PostList />
        </Grid>
        <Grid item xs={12}>
          Footer
        </Grid>
      </Grid>
    </CssBaseline>
  </div>
);

export default withStyles(styles)(App);
