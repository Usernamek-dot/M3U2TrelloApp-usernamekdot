import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  CssBaseline,
} from "@mui/material";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import AlertDialog from "../AddForm";

export default function ButtonAppBar() {
  return (
    <>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ backgroundColor: "#2c3e50" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <AccountTreeIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Trello Demo
            </Typography>
            <AlertDialog />
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
