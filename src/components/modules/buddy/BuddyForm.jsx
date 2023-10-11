import { useState } from "react";
import {
  Autocomplete,
  Box,
  CircularProgress,
  IconButton,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Close, FlightLand, FlightTakeoff } from "@mui/icons-material";
import MyButton from "../../ui/MyButton";
import countries from "../../../assets/countries.json";
import axios from "axios";
// import dayjs from "dayjs";

console.log(dayjs("2018-08-08"));
console.log(dayjs(new Date()));

export default function BuddyForm({
  title,
  subtitle,
  url,
  action,
  closeModal,
}) {
  const [loading, setLoading] = useState(false);
  const [destination, setDestination] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);
  const [arrivalDate, setArrivalDate] = useState(null);
  const [buddyData, setBuddyData] = useState({
    gender: "",
    budget: "",
    splitCost: "",
    journeyType: "",
  });
  const handleChange = (e) => {
    setBuddyData({ ...buddyData, [e.target.name]: e.target.value });
    console.log(buddyData);
  };

  const modifiedBuddyData = {
    ...buddyData,
    destination: destination?.label,
    departureDate: departureDate?.format("DD/MM/YYYY"),
    arrivalDate: arrivalDate?.format("DD/MM/YYYY"),
  };

  const submitBuddyData = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(modifiedBuddyData);
    try {
      const response = await axios.post(url, modifiedBuddyData);
      console.log(response);
      const resData = await response.data;
      console.log(resData);
    } catch (error) {
      if (error.response) {
        console.log(error.response);
      } else {
        console.log("Error", error);
      }
    }
    setLoading(false);
  };

  return (
    <Paper sx={{ width: "30rem", p: 3, borderRadius: "0.5rem" }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <IconButton sx={{ opacity: 0, cursor: "move" }}>
          <Close />
        </IconButton>
        <Box width="4rem">
          <img width="100%" src="/unsolo-icon.svg" alt="unsolo-icon" />
        </Box>
        <IconButton
          onClick={() => {
            closeModal(false);
          }}
          sx={{ mt: -1 }}
        >
          <Close color="initial" />
        </IconButton>
      </Stack>
      <Box textAlign="center" py={2}>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="subtitle2" color="text.secondary">
          {subtitle}
        </Typography>
      </Box>
      <Stack spacing={2} component="form" onSubmit={submitBuddyData}>
        <Autocomplete
          options={countries}
          value={destination}
          onChange={(event, newValue) => {
            setDestination(newValue);
          }}
          autoHighlight
          getOptionLabel={(option) => option.label}
          renderOption={(props, option) => (
            <Box
              component="li"
              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
              {...props}
            >
              <img
                loading="lazy"
                width="40"
                src={`https://flagcdn.com/w80/${option.code.toLowerCase()}.png`}
                alt=""
              />
              {option.label} ({option.code}) +{option.phone}
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              size="small"
              label="Destination"
              inputProps={{
                ...params.inputProps,
                autoComplete: "new-password", // disable autocomplete and autofill
              }}
            />
          )}
        />

        <Stack direction="row" spacing={2}>
          <Box>
            <DatePicker
              disablePast
              label="Date from: "
              value={departureDate}
              onChange={(newValue) => {
                setDepartureDate(newValue);
              }}
              slots={{ openPickerIcon: FlightTakeoff }}
              slotProps={{
                textField: {
                  // helperText: "MM/DD/YYYY",
                  size: "small",
                  // required: true,
                },
                openPickerButton: { color: "primary" },
              }}
            />
          </Box>

          <Box>
            <DatePicker
              disablePast
              label="Date to: "
              value={arrivalDate}
              onChange={(newValue) => {
                setArrivalDate(newValue);
              }}
              slots={{ openPickerIcon: FlightLand }}
              slotProps={{
                textField: {
                  size: "small",
                },
                openPickerButton: { color: "primary", size: "small" },
              }}
            />
          </Box>
        </Stack>
        <TextField
          fullWidth
          select
          size="small"
          label="Journey Type"
          name="journeyType"
          value={buddyData.journeyType}
          onChange={handleChange}
        >
          {journeyTypes.map((journeyType) => (
            <MenuItem key={journeyType} value={journeyType.toLowerCase()}>
              {journeyType}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          fullWidth
          select
          size="small"
          label="Gender"
          name="gender"
          value={buddyData.gender}
          onChange={handleChange}
        >
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
        </TextField>
        <Stack direction="row" spacing={2}>
          <TextField
            fullWidth
            type="number"
            inputProps={{ min: 100 }}
            size="small"
            label="Budget"
            name="budget"
            value={buddyData.budget}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            select
            size="small"
            label="Split Cost?"
            name="splitCost"
            value={buddyData.splitCost}
            onChange={handleChange}
          >
            <MenuItem value={true}>Yes</MenuItem>
            <MenuItem value={false}>No</MenuItem>
          </TextField>
        </Stack>

        <Box position="relative">
          <MyButton
            width="100%"
            color="white"
            mySubmit="submit"
            myDisabled={loading}
          >
            {action}
          </MyButton>
          {loading && (
            <CircularProgress
              size={40}
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                marginTop: "-20px",
                marginLeft: "-20px",
              }}
            />
          )}
        </Box>
      </Stack>
    </Paper>
  );
}
const journeyTypes = [
  "Backpacking",
  "Mountaineering",
  "Safari",
  "Pilgrimage",
  "Family_Vacation",
];
