import {
  ChatOutlined,
  GridView,
  GroupAddOutlined,
  LibraryAddCheckOutlined,
  MapOutlined,
  MapsUgcOutlined,
  PeopleAltOutlined,
} from "@mui/icons-material";

export const bookingRoutes = [
  { name: "Flight Bookings", link: "/homepage/booking/flight" },
  { name: "Hotel Bookings", link: "/homepage/booking/hotel" },
  { name: "packages", link: "/homepage/booking/package" },
];

const fontSize = "1.25rem";
export const homepageRoutes = [
  {
    name: "Dashboard",
    link: "/homepage/dashboard",
    icon: <GridView sx={{ fontSize }} />,
  },
  {
    name: "Buddy",
    link: "/homepage/buddy",
    icon: <PeopleAltOutlined sx={{ fontSize }} />,
  },
  {
    name: "Trips",
    link: "/homepage/trip",
    icon: <MapOutlined sx={{ fontSize }} />,
  },
  {
    name: "Invites",
    link: "/homepage/invite",
    icon: <GroupAddOutlined sx={{ fontSize }} />,
  },
  {
    name: "Bookings",
    link: "/homepage/booking",
    icon: <LibraryAddCheckOutlined sx={{ fontSize }} />,
  },
  {
    name: "Chats",
    link: "/homepage/chat",
    icon: <MapsUgcOutlined sx={{ fontSize }} />,
  },
  {
    name: "Broadcasts",
    link: "/homepage/broadcast",
    icon: <ChatOutlined sx={{ fontSize }} />,
  },
];
