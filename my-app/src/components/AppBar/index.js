import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AlertDialog from "../AddForm";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#130f40",
    margin: 0
  }
});

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className={classes.root}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <AlertDialog />
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
