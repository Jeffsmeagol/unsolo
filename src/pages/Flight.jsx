import { Box, Stack } from "@mui/material";
import Header from "../components/modules/buddy/Header";
import FlightRemCard from "../components/modules/booking/FlightRemCard";
import Slider from "react-slick";
import "../components/modules/booking/slick.css";
import FlightForm from "../components/modules/booking/FlightForm";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  variableWidth: true,
  adaptiveHeight: true,
};
export default function Flight() {
  return (
    <>
      <Box py={5} pr={2}>
        <FlightForm />
      </Box>
      <Header
        title="Trending Flight Deals"
        subtitle="Make bookings that suit your destination"
      />
      <Box pb={10}>
        <Slider {...settings}>
          {flightDetails.map((flightDetail, i) => (
            <Box py={2} key={i}>
              <FlightRemCard {...flightDetail} />
            </Box>
          ))}
        </Slider>
      </Box>
    </>
  );
}
const flightDetails = [
  { img: "/flight1.svg", from: "Lagos", to: "London", price: "782,573" },
  { img: "/flight2.jpg", from: "Berlin", to: "Miami", price: "358,098" },
  { img: "/flight3.jpg", from: "Accra", to: "Cairo", price: "562,345" },
  { img: "/flight4.jpg", from: "Abuja", to: "Santorini", price: "912,780" },
  {
    img: "/flight5.jpg",
    from: "Trondheim",
    to: "johannesburg",
    price: "189,200",
  },
];
