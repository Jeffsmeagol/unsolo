import { Box } from "@mui/material";
import SignIn from "../components/modules/signin/SignIn";

export default function SignInPage() {
  return (
    <Box
      sx={{
        alignItems: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        bgcolor: "rgba(0, 0, 0, 0.4)",
      }}
    >
      <SignIn />
    </Box>
  );
}
