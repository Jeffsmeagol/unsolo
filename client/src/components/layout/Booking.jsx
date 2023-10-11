import { Box, Button } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import Header from "../modules/buddy/Header";
import MyButton from "../ui/MyButton";
import { grey } from "@mui/material/colors";
import { bookingRoutes } from "../../assets/Routes";

export default function Booking() {
  return (
    <>
      <Box pl={4} pr={2} pt={4}>
        <Header
          title="Bookings"
          subtitle="Make bookings that suit your destination"
        >
          <MyButton>Reserve Booking</MyButton>
        </Header>
      </Box>
      <Box
        pl={4}
        pt={2}
        borderBottom="1px solid #EAECF0"
        sx={{
          "& button": {
            textTransform: "capitalize",
            fontSize: "1rem",
            borderRadius: 0,
            py: 2,
            px: 3,
          },
        }}
      >
        {bookingRoutes.map(({ name, link }) => (
          <NavLink to={link} key={link}>
            {({ isActive }) => (
              <Button
                sx={{
                  color: grey[700],
                  fontWeight: 500,
                  ...(isActive && {
                    fontWeight: 600,
                    borderBottom: "1px solid",
                    color: "primary",
                  }),
                }}
              >
                {name}
              </Button>
            )}
          </NavLink>
        ))}
      </Box>
      <Box pl={4} bgcolor={grey[50]}>
        <Outlet />
      </Box>
    </>
  );
}
