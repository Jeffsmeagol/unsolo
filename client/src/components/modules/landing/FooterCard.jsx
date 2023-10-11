import { Box, Paper, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import MyDot from "../../ui/MyDot";

export default function FooterCard() {
  return (
    <Paper
      elevation={0}
      // variant="outlined"
      sx={{
        borderRadius: "5%",
        bgcolor: grey[100],
        width: "32%",
      }}
    >
      <Stack direction="row" pt={4} pr={1} pb={6}>
        <Box minWidth="50%" mr={-1} mb={-2.5}>
          <img width="100%" src="/bust-1.svg.png" />
        </Box>
        <Box minWidth="50%" maxHeight="30vh" overflow="auto">
          <Stack direction={"row"} pt={4} alignItems={"center"} spacing={2}>
            <MyDot />
            <Typography variant="subtitle2">Mitchelle mikon</Typography>
          </Stack>
          <Typography
            variant="subtitle2"
            pt={2}
            pr={0.5}
            color="text.secondary"
          >
            Whenever I travelled in the US or abroad I always found someone who
            joined me on my adventures.
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
}
