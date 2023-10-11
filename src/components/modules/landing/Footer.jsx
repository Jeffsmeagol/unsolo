import { Avatar, Box, Container, Stack, Typography } from "@mui/material";
import FooterCard from "./FooterCard";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <Container>
      <Stack direction={"row"} justifyContent="space-between" p={4}>
        <Box pt={6} width="50%">
          <Typography variant="h2">What Clients Say About Us</Typography>
          <Typography variant="h6" width="30rem" mt={1} color={"text.disabled"}>
            MEET TRAVELERS AROUND THE WORLD.
          </Typography>
        </Box>
        <Stack width="60%" direction="row" justifyContent="space-between">
          <Stack width="30%" textAlign="center" alignItems="center">
            <Avatar
              sx={{
                width: 88,
                height: 88,
                borderStyle: "solid",
                borderColor: "primary.main",
                borderWidth: "2px",
              }}
              alt="Travis"
              src="https://material-ui.com/static/images/avatar/2.jpg"
            />
            <Typography variant="h5" mt={2}>
              Ola Mide
            </Typography>
            <Typography variant="subtitle1" color={"text.secondary"}>
              Trip to Dubai
            </Typography>
          </Stack>
          <Stack alignItems={"center"} width="65%">
            <Box p={3}>
              <img src="/appostVector.png" />
            </Box>
            <Typography color="text.secondary">
              TripGiraffe might be the only website for finding a travel buddy
              where you don't get spammed by fake travelers just to get money
              from you.
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      <Stack direction={"row"} justifyContent={"space-between"} mb={9} mt={6}>
        <FooterCard />
        <FooterCard />
        <FooterCard />
      </Stack>

      <FooterBottom></FooterBottom>
    </Container>
  );
}
