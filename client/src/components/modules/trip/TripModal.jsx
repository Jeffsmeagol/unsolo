import { useState } from "react";
import { Dialog } from "@mui/material";
import BuddyForm from "../buddy/BuddyForm";

export default function TripModal({ title, subtitle, url, action, children }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <>
      <div onClick={handleOpen}>{children}</div>
      <Dialog
        open={open}
        scroll="body"
        sx={{
          "& > .MuiBackdrop-root": {
            backdropFilter: "blur(1px)",
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
