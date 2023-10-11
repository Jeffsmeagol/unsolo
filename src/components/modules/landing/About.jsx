import { Container, Paper, Stack, Typography } from "@mui/material";

const oddStyle = {
  backgroundImage: "url('Group.png')",
  backgroundPosition: "bottom",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundColor: "#09131b",
  height: "55vh",
  width: "18%",
  borderRadius: 0,
  padding: 2,
};
const evenStyle = {
  backgroundPosition: "bottom",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  bgcolor: "primary.main",
  height: "35vh",
  width: "18%",
  borderRadius: "15%",
};

export default function About() {
  return (
    <Container
      id="about"
      sx={{
        textTransform: "capitalize",
        my: 12,
        bgcolor: "#fcf8f7",
      }}
    >
      <Stack textAlign="center" alignItems="center">
        <Typography variant="h2">
          how Unsolo <br /> works
        </Typography>
        <Typography variant="h5" color="text.disabled" pt={2}>
          "Unlocking the Enigma of Unsolo"
        </Typography>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="flex-end"
        pt={6}
      >
        <Paper sx={{ ...oddStyle }}>
          <Typography color="white" fontWeight={100}>
            Sign up/Login and Get Matched Based On Preference
          </Typography>
        </Paper>
        <Paper
          sx={{ ...evenStyle, backgroundImage: "url('about1.png')" }}
        ></Paper>
        <Paper sx={{ ...oddStyle, bgcolor: "primary.main" }}>
          <Typography fontWeight={100}>
            Create Trips Or Join Existing Trips From Your Buddies
          </Typography>
        </Paper>
        <Paper
          sx={{ ...evenStyle, backgroundImage: "url('about2.png')" }}
        ></Paper>
        <Paper sx={{ ...oddStyle }}>
          <Typography color="white" fontWeight={100}>
            Approve travel buddies you like and start planning your trip
            together.
          </Typography>
        </Paper>
      </Stack>
    </Container>
  );
}
