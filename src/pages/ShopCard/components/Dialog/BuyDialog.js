import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useCard } from "../../../../commonComponents/hooks";

export default function BuyDialog({ content, text, allPokeInCard }) { 

  const { cardItems, clearAllCard } = useCard()

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);

    if(allPokeInCard !== 0) {
        clearAllCard(cardItems)
    }

  };

  const handleClose = () => {
    setOpen(false);  
  };


  return (
    <div>
      <Button variant="default" onClick={handleClickOpen}>
        {content}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirmation"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>Good!</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
