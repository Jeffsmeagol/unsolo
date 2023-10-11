import { Box, Stack } from "@mui/material";
import Header from "../components/modules/buddy/Header";
import HotelRemCard from "../components/modules/booking/HotelRemCard";
import Slider from "react-slick";
import "../components/modules/booking/slick.css";
import HotelForm from "../components/modules/booking/HotelForm";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  variableWidth: true,
  adaptiveHeight: true,
};
export default function Hotel() {
  return (
    <>
      <Box py={5} pr={2}>
        <HotelForm />
      </Box>
      <Header
        title="Hotels around your destination"
        subtitle="Make lodging bookings that suit your destination"
      />
      <Box pb={10}>
        <Slider {...settings}>
          {hotelDetails.map((hotelDetail, i) => (
            <Box py={2} key={i}>
              <HotelRemCard {...hotelDetail} />
            </Box>
          ))}
        </Slider>
      </Box>
    </>
  );
}
const hotelDetails = [
  {
    img: "/hotel1.svg",
    name: "Hotel Tropicana",
    location: "Dubai, UAE",
    price: "350,000",
  },
  { img: "/hotel2.jpg", name: "Berlin", location: "Miami", price: "158,098" },
  { img: "/hotel3.jpg", name: "Accra", location: "Cairo", price: "62,345" },
  {
    img: "/hotel4.jpg",
    name: "Abuja",
    location: "Santorini",
    price: "95,080",
  },
  {
    img: "/hotel5.jpg",
    name: "Trondheim",
    location: "johannesburg",
    price: "189,200",
  },
  {
    img: "/hotel6.jpg",
    name: "Abuja",
    location: "Santorini",
    price: "78,780",
  },
  {
    img: "/hotel7.jpg",
    name: "Abuja",
    location: "Santorini",
    price: "82,500",
  },
];
