import { Box, Button, Paper, Typography } from "@mui/material";
import MyButton from "../components/ui/MyButton";
import axios from "axios";
import Carousel from "react-material-ui-carousel";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
// import "./testing.css";

function Example(props) {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper sx={{ bgcolor: "blue" }}>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}

export default function Testing() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/#about", { state: { redirectedFromOtp: true } });
  };

  return (
    <Box>
      <Typography variant="h2" textAlign="center" p={6}>
        Testing
      </Typography>
      <Example />

      <Hero />

      <MyButton onClick={handleClick}>testing</MyButton>
    </Box>
  );
}
const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    // slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
    {
      name: "Random Name #3",
      description: "lomdkdsldskdsm sklkdslkdslkd!",
    },
    {
      name: "Random Name #4",
      description: "Hejfskds oslkdslkds",
    },
    {
      name: "Random Name #5",
      description: "Huoilsasalksa World!",
    },
  ];
  return (
    <Slider {...settings}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Slider>
  );
};
