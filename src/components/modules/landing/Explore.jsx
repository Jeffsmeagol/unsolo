import {
  Avatar,
  AvatarGroup,
  Box,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import MyButton from "../../ui/MyButton";
import MyDot from "../../ui/MyDot";
import SignInModal from "../signin/SignInModal";

export default function Explore() {
  return (
    <Container id="explore" sx={{ textAlign: "center" }}>
      <Stack textAlign="center" alignItems="center" textTransform="capitalize">
        <Typography variant="h2">explore Trips</Typography>
        <Typography
          variant="h6"
          color="text.disabled"
          textTransform="uppercase"
          py={2}
        >
          Meet travelers around the world.
        </Typography>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        py={10}
        sx={{ background: "linear-gradient(90deg, #ffffff 30%, #fcf8f7 30%)" }}
      >
        <Box width="65%">
          <img src="/explore-img.png" width="100%" />
        </Box>
        <Stack width="35%" alignItems="center" justifyContent="center" px={5}>
          <Typography variant="h4" width="70%">
            Explore Trip to Dubai
          </Typography>
          <Typography variant="subtitle2" color="text.disabled">
            Meet friends going on same expenditure
          </Typography>
          <Typography variant="body2" color="text.disabled" pt={2}>
            Dubai is a city of skyscrapers, ports, and beaches, where big
            business takes place alongside sun-seeking tourism. Because of its
            large expatriate population, it feels like a Middle Eastern melting
            pot, and the atmosphere is generally tolerant.
          </Typography>
          <Stack
            width="100%"
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            py={4}
          >
            <AvatarGroup>
              <Avatar
                alt="Remy Sharp"
                src="https://material-ui.com/static/images/avatar/1.jpg"
              />
              <Avatar
                alt="Travis"
                src="https://material-ui.com/static/images/avatar/2.jpg"
              />
              <Avatar
                alt="Travis"
                src="https://material-ui.com/static/images/avatar/3.jpg"
              />
            </AvatarGroup>
            <MyDot />
            <Typography fontSize="80%" textTransform="uppercase">
              exploring destination
            </Typography>
          </Stack>
          <SignInModal>
            <MyButton>Explore More Trips</MyButton>
          </SignInModal>
        </Stack>
      </Stack>
    </Container>
  );
}
