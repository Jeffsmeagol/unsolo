import { Box, Button, Modal, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import SignIn from "./SignIn";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
  borderRadius: "1rem",
};

export default function SignInModal({ children, insideSignUpDialog, rdFO }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (rdFO) {
      let timer = setTimeout(() => {
        setOpen(rdFO);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {insideSignUpDialog ? (
        <span onClick={handleOpen}>{children}</span>
      ) : (
        <div onClick={handleOpen}>{children}</div>
      )}

      <Modal
        open={open}
        // onClose={handleClose}
      >
        <Box sx={{ ...style }}>
          <SignIn
            closeModal={setOpen}
            insideSignUpDialog={insideSignUpDialog}
          />
        </Box>
      </Modal>
    </>
  );
}
