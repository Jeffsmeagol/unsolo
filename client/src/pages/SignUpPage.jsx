import { Box } from "@mui/material";
import SignUp from "../components/modules/signup/SignUp";

export default function SignUpPage() {
  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        bgcolor: "rgba(0, 0, 0, 0.4)",
      }}
    >
      <SignUp />
    </Box>
  );
}
