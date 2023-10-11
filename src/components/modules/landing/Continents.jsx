import { Box, Stack, Typography } from "@mui/material";
import MyButton from "../../ui/MyButton";
import SignInModal from "../signin/SignInModal";

export default function Continents({ redirectedFromOtp }) {
  return (
    <Stack
      sx={{
        backgroundImage: "url('continent-image.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#191919",
        width: "100%",
        height: "100vh",
      }}
      direction="row"
      justifyContent="flex-end"
      pr={1}
    >
      <Stack
        // ml={-8}
        width="40rem"
        textAlign="center"
        justifyContent="center"
        alignItems="center"
        color="common.white"
      >
        <Typography variant="h2">
          Meet your Travel Buddies both Local & Internationally
        </Typography>
        <Typography variant="subtitle2" width="70%" p={4}>
          Dubai is a city of skyscrapers, ports, and beaches, where big business
          takes place alongside sun-seeking tourism. Because of its large
          expatriate population, it feels like a Middle Eastern melting pot, and
          the atmosphere is generally tolerant.
        </Typography>
        <Stack></Stack>
        <SignInModal>
          <MyButton>Find A Travel Buddy</MyButton>
        </SignInModal>
      </Stack>
    </Stack>
  );
}
