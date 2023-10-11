import { Avatar, Box, Paper, Stack, Typography } from "@mui/material";
import MyButton from "../../ui/MyButton";
import { Flight, RadioButtonChecked, TripOrigin } from "@mui/icons-material";

export default function FlightRemCard({ img, from, to, price }) {
  return (
    <Paper
      variant="outlined"
      sx={{
        p: 2,
        mr: 3,
        "&:hover": {
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          transform: "matrix(1.04, 0, 0, 1.04, 0, -7)",
        },
        transition: "0.5s",
      }}
    >
      <Box overflow="hidden">
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            "&:hover": { transform: "scale(1.1)" },
            transition: "1s",
          }}
        >
          <Avatar
            alt="flight boooking"
            src={img}
            sx={{
              width: "21rem",
              height: "14rem",
              borderRadius: "0.4rem",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "rgba(0, 0, 0, 0.2)",
              // background: 'linear-gradient(45deg, #ffa000 30%, #ffc107 90%), rgba(0, 0, 0, 0.5)',
              width: "100%",
              height: "100%",
              p: 3,
              color: "#fff",
              borderRadius: "0.4rem",
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <Stack>
                <Stack direction="row" alignItems="center" spacing={1.5}>
                  <RadioButtonChecked fontSize="10px" />
                  <Typography fontWeight={600}>{from}</Typography>
                </Stack>
                <Flight fontSize="10px" sx={{ transform: "rotate(180deg)" }} />
                <Stack direction="row" alignItems="center" spacing={1.5}>
                  <TripOrigin fontSize="10px" />
                  <Typography fontWeight={600}>{to}</Typography>
                </Stack>
              </Stack>
              <Typography
                fontSize="12px"
                fontWeight={600}
                color="#010080"
                bgcolor="#fff"
                px={2}
                py={0.5}
                borderRadius="0.5rem"
              >
                Top flight deal
              </Typography>
            </Stack>
            <Box pt={8}>
              <Typography fontWeight={700} fontSize="34px">
                ₦ {price}
              </Typography>
              <Typography fontSize="10px" mt={-1}>
                Sun, Sep 17, 2023 - Mon, Sep 25, 2023
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Stack direction="row" justifyContent="space-between" pt={1}>
        <Avatar
          alt="airline"
          src="/ET.svg"
          variant="square"
          sx={{ width: "5rem", height: "2rem" }}
        />
        <MyButton color="#fff" py="0.5rem" fontSize="12px">
          book now
        </MyButton>
      </Stack>
    </Paper>
  );
}
