import { Avatar, Box, Paper, Stack, Typography } from "@mui/material";
import MyButton from "../../ui/MyButton";
import { RoomOutlined } from "@mui/icons-material";

export default function HotelRemCard({ img, name, location, price }) {
  return (
    <Paper
      variant="outlined"
      sx={{
        p: 2,
        mr: 3,
        "&:hover": {
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          transform: "matrix(1.05, 0, 0, 1.05, 0, -5)",
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
            <Box
              sx={{
                position: "absolute",
                bottom: "7%",
                left: "7%",
              }}
            >
              <Typography fontWeight={700} fontSize="34px" mb={-1}>
                {name}
              </Typography>
              <Stack direction="row" alignItems="center" spacing={1}>
                <RoomOutlined fontSize="small" />
                <Typography fontSize="12px">{location}</Typography>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        pt={1}
      >
        <Typography variant="caption" color="text.disabled" fontWeight={600}>
          Starting from{"  "}
          <span style={{ color: "initial", fontSize: "1rem" }}>
            ₦{price}/day
          </span>
        </Typography>
        <MyButton color="#fff" py="0.5rem" fontSize="12px">
          book now
        </MyButton>
      </Stack>
    </Paper>
  );
}
