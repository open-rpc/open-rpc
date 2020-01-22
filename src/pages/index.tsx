import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import { Link as GatsbyLink } from "gatsby";
import Link from "@material-ui/core/Link";
import { grey } from "@material-ui/core/colors";

const MyApp: React.FC = () => {

  return (
    <>
      <Grid container alignContent="center" alignItems="center" justify="center" direction="column">
        <img className="logo" alt="logo" src={"https://raw.githubusercontent.com/open-rpc/design/master/icons/open-rpc-logo-noText/open-rpc-logo-noText%20(PNG)/256x256.png"} style={{ paddingTop: "10%" }} />
        <Typography gutterBottom style={{ paddingTop: "100px", paddingBottom: "20px" }} variant="inherit">
          The OpenRPC Specification defines a standard, programming language-agnostic interface description for {<Link href="https://www.jsonrpc.org/specification">JSON-RPC 2.0</Link>} APIs.
        </Typography>
        <br />
        <br />
        <br />
        <Grid container justify="space-between" style={{ marginBottom: "85px" }}>
          <Grid item container direction="column" style={{ width: "230px" }}>
            <Link
              component={(props: { children: any }) => (
                <GatsbyLink to={"/beginners"} style={{ textDecoration: "none", color: grey[500] }} activeStyle={{ color: grey[500] }}>
                  {props.children}
                </GatsbyLink>
              )}>
              <Grid>
                <Box>
                  <Typography variant="h6" gutterBottom color="primary">→ Beginners</Typography>
                </Box>
                <Box>
                  <Typography variant="caption" color="secondary">- New to OpenRPC?</Typography>
                </Box>
                <Box>
                  <Typography variant="caption">- What is OpenRPC?</Typography>
                </Box>
                <Box>
                  <Typography variant="caption">- Why should I care?</Typography>
                </Box>
              </Grid>
            </Link>
          </Grid>
          <Grid item container direction="column" style={{ width: "230px" }}>
            <Link
              component={(props: { children: any }) => (
                <GatsbyLink
                  to={"/learn"}
                  style={{ textDecoration: "none", color: grey[500] }}
                  activeStyle={{ color: grey[500] }}
                >
                  {props.children}
                </GatsbyLink>
              )}>
              <Grid>
                <Box>
                  <Typography variant="h6" gutterBottom color="primary">→ Learn</Typography>
                </Box>
                <Box>
                  <Typography variant="caption">- Beginner Resources</Typography>
                </Box>
                <Box>
                  <Typography variant="caption">- How OpenRPC works</Typography>
                </Box>
              </Grid>
            </Link>
          </Grid>
          <Grid item container direction="column" style={{ width: "230px" }}>
            <Link
              component={(props: { children: any }) => (
                <GatsbyLink to={"/learn"}
                  style={{ textDecoration: "none", color: grey[500] }}
                  activeStyle={{ color: grey[500] }}
                >
                  {props.children}
                </GatsbyLink>
              )}>
              <Grid>
                <Box>
                  <Typography variant="h6" gutterBottom color="primary">→ Developers</Typography>
                </Box>
                <Box>
                  <Typography variant="caption">- Repository Links</Typography>
                </Box>
                <Box>
                  <Typography variant="caption">- Find the latest dev tools</Typography>
                </Box>
              </Grid>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default MyApp;
