import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import {
  FacebookRounded,
  Instagram,
  Twitter,
  LinkedIn,
} from "@mui/icons-material";
import MyButton from "../../ui/MyButton";
import SignUpDialog from "../signup/SignUpDialog";

export default function FooterBottom() {
  return (
    <Box id="contact" px={2} textTransform="uppercase">
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography variant="h4" color="text.secondary">
          Want to
        </Typography>
        <SignUpDialog>
          <MyButton variant="outlined">Sign up</MyButton>
        </SignUpDialog>
      </Stack>
      <Typography
        width="100%"
        variant="h2"
        fontSize="5.4vw"
        textAlign="justify"
        fontWeight="400"
        borderBottom="1px solid "
      >
        travel the world with friends
      </Typography>
      {/* <Divider sx={{ height: "2px", color: "red" }} /> */}
      <Stack direction="row" justifyContent="space-between" py={2}>
        <Typography>tRAVBUD</Typography>
        <Stack direction="row" spacing={2} mt={-1}>
          <IconButton>
            <Twitter />
          </IconButton>
          <IconButton>
            <FacebookRounded />
          </IconButton>
          <IconButton>
            <LinkedIn />
          </IconButton>
          <IconButton>
            <Instagram />
          </IconButton>
        </Stack>
        <Typography> LAgos, Nigeria 09:00</Typography>
      </Stack>
    </Box>
  );
}
