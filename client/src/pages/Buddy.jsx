import { Box, Stack } from "@mui/material";
import Header from "../components/modules/buddy/Header";
import BuddyCard from "../components/modules/buddy/BuddyCard";
import BuddyModal from "../components/modules/buddy/BuddyModal";
import MyButton from "../components/ui/MyButton";

export default function Buddy() {
  return (
    <Box p={4}>
      <Header title="Buddy" subtitle="Link up with buddies around you">
        <BuddyModal
          title="Find A Buddy"
          subtitle="Find a travel buddy that suits you."
          url="http://localhost:8080/api/user/buddy"
          action="search"
        >
          <MyButton>Find A Buddy</MyButton>
        </BuddyModal>
      </Header>
      <Stack direction="row" flexWrap="wrap">
        {/* <BuddyCard />
        <BuddyCard />
        <BuddyCard /> */}
      </Stack>
    </Box>
  );
}
