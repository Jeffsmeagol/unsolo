import { NotificationsOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

export default function Topbar() {
  const navigate = useNavigate();
  return (
    <Box p={2} px={4} borderBottom="1px solid #EAECF0" color={grey[500]}>
      <Stack
        direction="row"
        alignItems="flex-start"
        justifyContent="space-between"
      >
        <Stack
          direction="row"
          divider={
            <Divider orientation="vertical" color={grey[800]} flexItem />
          }
          spacing={2}
        >
          <Typography variant="subtitle2">Welcome, Emmanuel</Typography>
          <Typography variant="subtitle2">Monday 10th Feb, 2023</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={2} mt={-1}>
          <IconButton>
            <NotificationsOutlined />
          </IconButton>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            pl={4}
            borderLeft="1.5px solid #EAECF0"
          >
            <Avatar
              alt="Nigeria flag"
              src="https://flagcdn.com/w40/ng.png"
              sx={{
                width: "1.25rem",
                height: "1.25rem",
                bgcolor: "green",
                px: 0.7,
              }}
            />
            <Typography fontWeight={600} color={grey[600]}>
              Nigeria
            </Typography>
          </Stack>
          <Button
            variant="outlined"
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/");
            }}
            sx={{
              borderRadius: "0.5rem",
              textTransform: "capitalize",
              fontWeight: 700,
              fontSize: "1rem",
            }}
          >
            Log out
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
