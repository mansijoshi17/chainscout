import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import FormDialog from "./components/modal";

export default function CheckboxListSecondary() {
  const [types, setTypes] = React.useState([
    "Wash Trading",
    "Security Audit",
    "Tokenomics",
  ]);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <List
        dense
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      >
        {types.map((value) => {
          return (
            <ListItem
              key={value}
              secondaryAction={
                <Button variant="contained" onClick={handleClickOpen}>
                  Subscribe
                </Button>
              }
            >
              <ListItemButton>
                <ListItemText primary={value} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <FormDialog open={open} handleClose={handleClose} />
    </div>
  );
}
