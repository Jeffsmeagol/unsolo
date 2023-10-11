import { useState } from "react";
import { Flight, RoomOutlined } from "@mui/icons-material";
import { Autocomplete, Box, MenuItem, Stack, TextField } from "@mui/material";
import { grey } from "@mui/material/colors";
import { DatePicker } from "@mui/x-date-pickers";
import MyButton from "../../ui/MyButton";
import countries from "../../../assets/countries.json";

export default function FlightForm() {
  const [hotelCity, setHotelCity] = useState(null);
  const [room, setRoom] = useState(1);
  const [guest, setGuest] = useState(1);
  const [departureDate, setDepartureDate] = useState(dayjs(new Date()));
  const [arrivalDate, setArrivalDate] = useState(dayjs(new Date()));

  return (
    <Box bgcolor="#101828" borderRadius="0.5rem" p={3}>
      <Stack
        direction="row"
        spacing={1.5}
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "& .MuiInputBase-root": {
            fontSize: "1.1vw",
            fontWeight: 700,
          },
        }}
      >
        <Stack direction="row" width="50%" spacing={1}>
          <Stack
            direction="row"
            width="45%"
            borderRadius="1rem"
            bgcolor="#fff"
            pb={0.8}
            pt={3}
            pl={2}
          >
            <Stack width="100%" direction="row">
              <Flight fontSize="small" color="primary" />
              <Box width="100%" sx={{ "& svg": { color: "#fff" } }}>
                <Autocomplete
                  options={countries}
                  value={hotelCity}
                  onChange={(event, newValue) => {
                    setHotelCity(newValue);
                  }}
                  autoHighlight
                  disableClearable
                  getOptionLabel={(option) => option.label}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      sx={{
                        label: {
                          fontSize: "1.2vw",
                          fontWeight: 400,
                          color: grey[400],
                        },
                        "& input::placeholder": {
                          color: grey[900],
                        },
                      }}
                      placeholder="City name"
                      size="small"
                      label="Going to"
                      InputLabelProps={{ shrink: true }}
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: "new-password",
                      }}
                    />
                  )}
                />
              </Box>
            </Stack>
          </Stack>
          <Stack
            direction="row"
            width="55%"
            bgcolor="#fff"
            borderRadius="1rem"
            pb={0.8}
            pt={3}
            pl={2}
          >
            <Stack width="100%" direction="row">
              <RoomOutlined fontSize="small" color="primary" />
              <Stack
                width="100%"
                direction="row"
                justifyContent="space-between"
                sx={{ "& svg": { color: "#fff" } }}
              >
                <Box minWidth="56%">
                  <TextField
                    sx={{
                      label: {
                        fontSize: "1.2vw",
                        fontWeight: 400,
                        color: grey[400],
                      },
                      "& input::placeholder": {
                        color: grey[900],
                      },
                    }}
                    select
                    fullWidth
                    placeholder="1 room"
                    size="small"
                    label="Rooms and guests"
                    value={room}
                    InputLabelProps={{ shrink: true }}
                  >
                    {Array.from({ length: 5 }, (_, i) => i + 1).map((room) => (
                      <MenuItem key={room} value={room}>
                        {room + " room"}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>
                <TextField
                  sx={{
                    label: {
                      fontSize: "1.2vw",
                      fontWeight: 400,
                      color: grey[400],
                    },
                    "& input::placeholder": {
                      color: grey[900],
                    },
                  }}
                  select
                  fullWidth
                  placeholder="1 room"
                  size="small"
                  value={guest}
                  InputLabelProps={{ shrink: true }}
                >
                  {Array.from({ length: 5 }, (_, i) => i + 1).map((guest) => (
                    <MenuItem key={guest} value={guest}>
                      {guest + " guest"}
                    </MenuItem>
                  ))}
                </TextField>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="row" width="50%" justifyContent="space-between">
          <Stack direction="row" width="60%" bgcolor="#fff" borderRadius="1rem">
            <Stack
              direction="row"
              width="50%"
              bgcolor="#fff"
              borderRadius="1rem"
              pt={3}
            >
              <DatePicker
                disablePast
                label="Check In "
                value={departureDate}
                onChange={(newValue) => {
                  setDepartureDate(newValue);
                }}
                sx={{ label }}
                slotProps={{
                  textField: {
                    size: "small",
                  },
                  openPickerButton: {
                    color: "primary",
                    size: "small",
                    sx: { mt: -1.5, mr: -0.5, p: 0 },
                  },
                }}
              />
            </Stack>
            <Stack
              direction="row"
              width="50%"
              bgcolor="#fff"
              borderRadius="1rem"
              pt={3}
            >
              <DatePicker
                disablePast
                label="Check Out "
                value={arrivalDate}
                onChange={(newValue) => {
                  setArrivalDate(newValue);
                }}
                sx={{ label }}
                slotProps={{
                  textField: {
                    size: "small",
                  },
                  openPickerButton: {
                    color: "primary",
                    size: "small",
                    sx: { mt: -1.5, mr: 0, p: 0 },
                  },
                }}
              />
            </Stack>
          </Stack>
          <MyButton color="#fff" px={4}>
            Search Hotels
          </MyButton>
        </Stack>
      </Stack>
    </Box>
  );
}
const label = {
  fontSize: "1.2vw",
  fontWeight: 400,
  color: grey[400],
};
