import { Box, Stack } from "@mui/material";
import Header from "../components/modules/buddy/Header";
import BuddyCard from "../components/modules/buddy/BuddyCard";
import TripModal from "../components/modules/trip/TripModal";
import MyButton from "../components/ui/MyButton";

export default function Trip() {
  return (
    <Box p={4}>
      <Header
        title="Trips"
        subtitle="Check for popular destinations that interests you."
      >
        <TripModal
          title="Create A Trip"
          subtitle="Invite fellow travellers that share your interests"
          url="http://localhost:8080/api/user/trip"
          action='create trip'
        >
          <MyButton>Invite Traveler</MyButton>
        </TripModal>
      </Header>
      <Stack direction="row" flexWrap="wrap">
        <BuddyCard />
        <BuddyCard />
        <BuddyCard />
      </Stack>
    </Box>
  );
}
