import { Box, Container, Stack, Typography } from "@mui/material";
import MyButton from "../../ui/MyButton";
import SignInModal from "../signin/SignInModal";

export default function Travel() {
  return (
    <Container sx={{ py: 12 }}>
      <Stack textAlign="center" alignItems="center" textTransform="capitalize">
        <Typography variant="h2">
          Travel <br /> Comfortably
        </Typography>
        <Typography
          variant="h6"
          color="text.disabled"
          textTransform="uppercase"
          py={2}
        >
          With Travellers like you all around the world
        </Typography>
      </Stack>
      <Stack direction="row" justifyContent="space-evenly" mt={-8} mb={-8}>
        <Box width="21%" pt={2}>
          <img width="100%" src="/traveller1.png" />
        </Box>
        <Box width="21%" pt={20}>
          <img width="100%" src="/traveller2.png" />
        </Box>
        <Box width="21%" pt={10}>
          <img width="100%" src="/traveller3.png" />
        </Box>
        <Box width="21%">
          <img width="100%" src="/traveller4.png" />
        </Box>
      </Stack>
      <Stack direction="row" justifyContent="flex-end">
        <SignInModal>
          <MyButton>Find a Travel Buddy</MyButton>
        </SignInModal>
      </Stack>
    </Container>
  );
}
