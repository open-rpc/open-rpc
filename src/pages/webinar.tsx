import React from "react";
import { Typography, Grid, Link, Button } from "@material-ui/core";
import NextAndPrev from "@etclabscore/gatsby-theme-pristine/src/components/NextAndPrev";
import { Link as GatsbyLink } from "gatsby";
import { grey } from "@material-ui/core/colors";

interface IProps {

}

const Webinar: React.FC<IProps> = (props) => {
  return (
    <Grid container justify="center" alignItems="center" style={{ paddingBottom: "20px" }}>
      <Grid item container justify="center" alignItems="center">
        <img style={{ maxWidth: "90%" }} src="https://user-images.githubusercontent.com/364566/81385049-8f94b280-90c7-11ea-9416-0e6a3e61247a.gif" />
      </Grid>
      <Grid item container justify="space-around" style={{ maxWidth: "940px" }}>
        <Grid item style={{ width: "200px" }} container justify="center">
          <Typography variant="h3" gutterBottom>Introduction</Typography>
          <Typography gutterBottom>Introduction to JSON-RPC and the OpenRPC Inspector.</Typography>
          <div style={{ height: "30px" }} />
          <iframe width="300" height="250" src="https://www.youtube.com/embed/VdtBY6PEeks" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="1"></iframe>
        </Grid>
        <Grid item container style={{ width: "200px" }} justify="center">
          <Typography variant="h3" gutterBottom>Basics</Typography>
          <Typography gutterBottom>An overview of the basics, creating a new document, and use the existing tools.</Typography>
          <div style={{ height: "30px" }} />
          <iframe width="300" height="250" src="https://www.youtube.com/embed/wXlJWoWxk7Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="1"></iframe>
        </Grid>
        <Grid item style={{ width: "200px" }} container justify="center">
          <Typography variant="h3" gutterBottom>Advanced</Typography>
          <Typography gutterBottom>A deep dive into creating and generating documents with OpenRPC.</Typography>
          <div style={{ height: "30px" }} />
          <iframe width="300" height="250" src="https://www.youtube.com/embed/hxdazdSBY2c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="1"></iframe>
        </Grid>
      </Grid>
      <Grid container justify="center" style={{ marginTop: "60px", width: "300px" }} direction="column" alignItems="center">
        <Typography align="center" gutterBottom><Typography color="secondary">Congrats!</Typography> You've completed the webinar. Please drop some feedback on github to improve and create content like this.</Typography>
        <Link href="https://github.com/open-rpc/open-rpc/issues" target="_blank">
          <Button variant="contained" color="primary">Give Feedback</Button>
        </Link>
      </Grid>
      <NextAndPrev next={{
        name: "Getting Started",
        link: "/getting-started",
      }} />
    </Grid>
  );
};

export default Webinar;
