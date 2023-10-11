import {
  AccountCircleOutlined,
  ExploreOutlined,
  LabelOutlined,
  PaymentsOutlined,
  ReceiptLongOutlined,
} from "@mui/icons-material";
import { Avatar, Box, Stack, Typography } from "@mui/material";

function Item({ icon, name, value }) {
  return (
    <Stack direction="row" width="13rem" pb={1.5}>
      {icon}
      <Typography color="text.disabled" fontSize="80%">
        {name}
        <Typography component="span" ml={1} color="initial">
          {value}
        </Typography>
      </Typography>
    </Stack>
  );
}

export default function BuddyCard() {
  return (
    <Stack
      direction="row"
      minWidth="50%"
      borderBottom="1px solid #EAECF0"
      flexGrow={1}
      py={4}
    >
      <Avatar
        alt="Travis"
        src="https://material-ui.com/static/images/avatar/3.jpg"
        sx={{ width: "6vw", height: "6vw", mx: 2, my: 1, ml: 1 }}
      />

      <Stack>
        <Stack
          direction="row"
          alignItems="center"
          // justifyContent="space-between"
        >
          <Typography fontWeight={500} fontSize="140%" width="13rem">
            Demi Wikinson, 26
          </Typography>
          <Stack direction="row" spacing={1}>
            <ExploreOutlined />
            <Typography fontSize="100%">Male, Maldives</Typography>
          </Stack>
        </Stack>

        <Typography
          width="25rem"
          color="text.disabled"
          fontSize="80%"
          py={1}
        >
          I love little adventures and I tagged the trip name Mahjong. Looking
          to have fun all round.
        </Typography>

        <Stack direction="row" flexWrap="wrap" width="26rem">
          <Item
            icon={<AccountCircleOutlined color="primary" sx={{ mr: 0.5 }} />}
            name="Looking For"
            value="FEMALE"
          />

          <Item
            icon={<LabelOutlined color="primary" sx={{ mr: 0.5 }} />}
            name="Type of Journey"
            value="Backpack"
          />
          <Item
            icon={<PaymentsOutlined color="primary" sx={{ mr: 0.5 }} />}
            name="Split cost"
            value="Yes"
          />
          <Item
            icon={<ReceiptLongOutlined color="primary" sx={{ mr: 0.5 }} />}
            name="Budget"
            value="$1000"
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
