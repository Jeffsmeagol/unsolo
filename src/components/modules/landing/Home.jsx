import { Box, Container, Stack, Toolbar, Typography } from "@mui/material";
import MyButton from "../../ui/MyButton";
import SignInModal from "../signin/SignInModal";
import SignUpDialog from "../signup/SignUpDialog";

export default function Home({ rdFO }) {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: "url('LandingPage1.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        bgcolor: "rgba(0, 0, 0, 0.4)",
        color: "white",
      }}
    >
      <Stack
        bgcolor="rgba(0, 0, 0, 0.2)"
        direction="row"
        alignItems="center"
        p={14}
        pt={20}
      >
        <Stack width="60%">
          <Typography
            fontSize="8.75rem"
            fontWeight={700}
            lineHeight="6.75rem"
            letterSpacing="-0.3rem"
            py={8}
          >
            Explore <br /> The World Together
          </Typography>
          <Typography variant="h3" fontWeight={300}>
            connecting like-minded <br /> travellers one trip at a time
          </Typography>
        </Stack>
        <Stack alignItems="flex-start" pl={8}>
          <Typography
            variant="h6"
            fontWeight={300}
            textTransform="uppercase"
            pb={2}
          >
            Find your adventure with <br /> the perfect travel buddy
          </Typography>

          <SignInModal rdFO={rdFO}>
            <MyButton color="white">Get Started</MyButton>
          </SignInModal>
        </Stack>
      </Stack>
      {/* </Box> */}
    </Box>
  );
}
