import {
  Add,
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
  Remove,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import { grey } from "@mui/material/colors";
import Topbar from "./Topbar";
import { homepageRoutes, bookingRoutes } from "../../assets/Routes";

export default function Homepage() {
  const [openBooking, setOpenBooking] = useState(false);
  const [open, setOpen] = useState(true);
  const drawerWidth = open ? "13rem" : "3.1rem";
  const transition = "0.3s ease-in";
  return (
    <Box position="relative">
      <Box
        position="fixed"
        width={drawerWidth}
        p={1}
        pr={0}
        sx={{
          borderRight: "1px solid #EAECF0",
          transition,
          top: 0,
          bottom: 0,
          overflowX: "hidden",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          p={1}
          ml={open ? 0 : -1.5}
          sx={{ transition }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <Stack
              direction="row"
              spacing={1.5}
              sx={{ transitionDuration: "1s" }}
              display={open ? "" : "none"}
            >
              <Box width="1.8rem">
                <img alt="" width="100%" src="/unsolo-icon.svg" />
              </Box>
              <Typography fontWeight={700} fontSize="1.15rem" color="primary">
                UNSOLO
              </Typography>
            </Stack>
          </Link>
          <IconButton color="primary" onClick={() => setOpen((prev) => !prev)}>
            <Avatar
              sx={{
                bgcolor: "rgba(243, 172, 84, 0.1)",
                width: "2rem",
                height: "2rem",
              }}
            >
              {open ? (
                <KeyboardDoubleArrowLeft color="primary" />
              ) : (
                <KeyboardDoubleArrowRight color="primary" />
              )}
            </Avatar>
          </IconButton>
        </Stack>
        {homepageRoutes.map(({ name, link, icon }) => (
          <Box key={link}>
            <Button
              onClick={() => {
                if (name == "Bookings") setOpenBooking((prev) => !prev);
              }}
              sx={{ p: 0.8, px: 0.5 }}
            >
              <Stack
                width="11.5rem"
                direction="row"
                justifyContent="space-between"
              >
                <NavLink to={link} style={{ textDecoration: "none" }}>
                  {({ isActive }) => (
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <IconButton
                        component="div"
                        color={isActive ? "primary" : ""}
                        size="small"
                      >
                        {icon}
                      </IconButton>
                      <Typography
                        fontWeight={isActive ? 600 : 500}
                        fontSize="0.9rem"
                        textTransform="capitalize"
                        color={isActive ? "primary" : "#000"}
                      >
                        {name}
                      </Typography>
                    </Stack>
                  )}
                </NavLink>
                {name == "Bookings" && (
                  <IconButton
                    component="div"
                    color={openBooking ? "primary" : ""}
                    size="small"
                  >
                    {openBooking ? (
                      <Remove sx={{ fontSize: "1rem" }} />
                    ) : (
                      <Add sx={{ fontSize: "1rem" }} />
                    )}
                  </IconButton>
                )}
              </Stack>
            </Button>

            {name == "Bookings" && openBooking && (
              <Box pl={3} pt={1} my={1} overflow="hidden">
                <Box sx={{ borderLeft: "1px solid #e0e0e0" }}>
                  {bookingRoutes.map((b) => (
                    <NavLink
                      style={{ textDecoration: "none" }}
                      to={b.link}
                      key={b.link}
                    >
                      {({ isActive }) => (
                        <Typography
                          variant="body2"
                          textTransform="capitalize"
                          color={isActive ? "primary" : grey[700]}
                          sx={{
                            py: 1.5,
                            pl: 2.2,
                            fontWeight: 500,
                            ...(isActive && {
                              fontWeight: 600,
                              borderLeft: "1.5px solid",
                            }),
                          }}
                        >
                          {b.name}
                        </Typography>
                      )}
                    </NavLink>
                  ))}
                </Box>
              </Box>
            )}
          </Box>
        ))}
      </Box>
      <Box ml={drawerWidth} sx={{ transition }}>
        <Topbar />
        <Outlet />
      </Box>
    </Box>
  );
}
