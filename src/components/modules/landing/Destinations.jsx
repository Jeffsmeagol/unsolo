import { Avatar, Box, Container, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";

export default function Destinations() {
  return (
    <Box>
      <Container sx={{ textAlign: "center", py: 12, bgcolor: "#fcf8f7" }}>
        <Typography variant="h2">
          Popular <br /> Destinations
        </Typography>
        <Typography
          variant="h6"
          color="text.disabled"
          textTransform="uppercase"
        >
          Meet travelers around the world.
        </Typography>
        <Box p={8}>
          <Carousel>
            {images.map((img) => (
              <Avatar
                key={img}
                variant="square"
                alt="flight boooking"
                src={img}
                sx={{
                  width: "100%",
                  height: "30rem",
                }}
              />
            ))}
          </Carousel>
        </Box>
      </Container>
    </Box>
  );
}
const images = [
  "/destination1.jpg",
  "/destination2.jpg",
  "/destination3.jpg",
  "/destination4.jpg",
];
