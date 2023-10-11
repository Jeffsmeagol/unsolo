import { Box, Button, Dialog, Modal, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import BuddyForm from "./BuddyForm";

export default function BuddyModal({ title, subtitle, url, action, children }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div onClick={handleOpen}>{children}</div>
      <Dialog
        open={open}
        // onClose={handleClose}
        scroll="body"
        sx={{
          // "& .MuiPaper-root":{boxShadow: 'none'},
          "& > .MuiBackdrop-root": {
            backdropFilter: "blur(1px)",
            // bgcolor: "rgba(243, 172, 84, 0.1)",
            bgcolor: "rgba(255, 255, 255, 0.1)",
          },
        }}
      >
        <BuddyForm
          title={title}
          subtitle={subtitle}
          url={url}
          action={action}
          closeModal={setOpen}
        />
      </Dialog>
    </>
  );
}
