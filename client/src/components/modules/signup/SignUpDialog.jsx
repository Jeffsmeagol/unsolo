import { Button, Dialog, Modal, Typography } from "@mui/material";
import { useState } from "react";
import SignUp from "./SignUp";

export default function SignUpDialog({ children, insideSignInModal }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <span onClick={handleClickOpen}>{children}</span>
      <Dialog open={open} 
      // onClose={handleClose} 
      scroll="body">
        <SignUp closeDialog={setOpen} insideSignInModal={insideSignInModal} />
      </Dialog>
    </>
  );
}
