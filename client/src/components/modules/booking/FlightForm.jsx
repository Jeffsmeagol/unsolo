import { useState } from "react";
import { Autocomplete, Box, MenuItem, Stack, TextField } from "@mui/material";
import {
  ConnectingAirports,
  Flight,
  Person,
  RoomOutlined,
} from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import { DatePicker } from "@mui/x-date-pickers";
import MyButton from "../../ui/MyButton";
import countries from "../../../assets/countries.json";

export default function FlightForm() {
  const [flightDeparture, setFlightDeparture] = useState(null);
  const [flightArrival, setFlightArrival] = useState(null);
  const [departureDate, setDepartureDate] = useState(dayjs(new Date()));
  const [arrivalDate, setArrivalDate] = useState(dayjs(new Date()));
  const [flightData, setFlightData] = useState({
    trip: "round",
    passengerNum: 1,
    class: "economy",
  });
  const handleChange = (e) => {
    setFlightData({ ...flightData, [e.target.name]: e.target.value });
    console.log(flightData);
  };
  return (
    <Box bgcolor={"#101828"} borderRadius="0.5rem" p={2.5}>
      <Stack
        direction="row"
        color="#fff"
        pb={1.5}
        sx={{
          "& svg": { color: "#fff" },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "& .MuiInputBase-root": {
            color: "#fff",
            fontSize: "0.9vw",
            fontWeight: 700,
          },
        }}
      >
        <Stack direction="row" alignItems="center" spacing={-1}>
          <ConnectingAirports fontSize="small" />
          <TextField
            select
            size="small"
            // required
            name="trip"
            value={flightData.trip}
            onChange={handleChange}
          >
            <MenuItem value="round">Round Trip</MenuItem>
            <MenuItem value="one">One way</MenuItem>
          </TextField>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={-1}>
          <Person fontSize="small" />
          <TextField
            select
            size="small"
            // required
            name="passengerNum"
            value={flightData.passengerNum}
            onChange={handleChange}
          >
            {Array.from({ length: 5 }, (_, i) => i + 1).map((passengerNum) => (
              <MenuItem key={passengerNum} value={passengerNum}>
                {passengerNum}
              </MenuItem>
            ))}
          </TextField>
        </Stack>
        <TextField
          select
          size="small"
          required
          name="gender"
          value={flightData.class}
          onChange={handleChange}
        >
          <MenuItem value="economy">Economy</MenuItem>
          <MenuItem value="first_class">First Class</MenuItem>
        </TextField>
      </Stack>
      <Stack
        direction="row"
        spacing={1.5}
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "& .MuiInputBase-root": {
            // color: "#fff",
            fontSize: "1.1vw",
            fontWeight: 700,
          },
        }}
      >
        <Box position="relative" width="50%">
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              borderRadius: "0.4rem",
              bgcolor: "#2524B3",
              px: 0.4,
            }}
          >
            <ConnectingAirports
              sx={{ color: "#fff", fontSize: "1.5vw", mt: -0.5 }}
            />
          </Box>
          <Stack direction="row" width="100%">
            <Stack
              direction="row"
              width="50%"
              // height="4rem"
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
                    value={flightDeparture}
                    onChange={(event, newValue) => {
                      setFlightDeparture(newValue);
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
                        placeholder="Enter City"
                        size="small"
                        label="From"
                        InputLabelProps={{
                          shrink: true,
                        }}
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
              width="50%"
              // height="4rem"
              borderRadius="1rem"
              bgcolor="#fff"
              pb={0.8}
              pt={3}
              pl={4}
            >
              <Stack width="100%" direction="row">
                <RoomOutlined fontSize="small" color="primary" />
                <Box width="100%" sx={{ "& svg": { color: "#fff" } }}>
                  <Autocomplete
                    options={countries}
                    value={flightArrival}
                    onChange={(event, newValue) => {
                      setFlightArrival(newValue);
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
                        placeholder="Enter City"
                        size="small"
                        label="To"
                        InputLabelProps={{
                          shrink: true,
                        }}
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
          </Stack>
        </Box>
        <Stack direction="row" width="50%" spacing={1}>
          <Stack
            direction="row"
            width="31%"
            bgcolor="#fff"
            borderRadius="1rem"
            pt={3}
          >
            <DatePicker
              disablePast
              label="Departure "
              value={departureDate}
              onChange={(newValue) => {
                setDepartureDate(newValue);
              }}
              sx={{
                label: {
                  fontSize: "1.2vw",
                  fontWeight: 400,
                  color: grey[400],
                },
              }}
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
            width="31%"
            bgcolor="#fff"
            borderRadius="1rem"
            pt={3}
          >
            <DatePicker
              disablePast
              label="Arrival "
              value={arrivalDate}
              onChange={(newValue) => {
                setArrivalDate(newValue);
              }}
              sx={{
                label: {
                  fontSize: "1.2vw",
                  fontWeight: 400,
                  color: grey[400],
                },
              }}
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
          <MyButton color="#fff" px={2}>
            search flights
          </MyButton>
        </Stack>
      </Stack>
    </Box>
  );
}
