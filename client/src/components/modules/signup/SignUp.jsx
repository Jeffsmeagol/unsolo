import { useState } from "react";
import {
  Close,
  VisibilityOffOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";
import {
  Box,
  Checkbox,
  CircularProgress,
  IconButton,
  InputAdornment,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import MyButton from "../../ui/MyButton";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import SignInModal from "../signin/SignInModal";

export default function SignUp({ closeDialog, insideSignInModal }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [passwordErrMsg, setPasswordErrMsg] = useState("");
  const [emailErrMsg, setEmailErrMsg] = useState("");
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    day: "",
    month: "",
    year: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });
  const [checked, setChecked] = useState(true);

  const handleCheckedChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });

    console.log(userData);
    if (passwordErrMsg) setPasswordErrMsg("");
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const buildDate = () => {
    if (userData.day < 10) {
      return {
        ...userData,
        date: "0" + userData.day + "/" + userData.month + "/" + userData.year,
      };
    } else {
      return {
        ...userData,
        date: userData.day + "/" + userData.month + "/" + userData.year,
      };
    }
  };

  const submitUserDetails = async () => {
    const modifiedUserData = buildDate();
    console.log(modifiedUserData);
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8080/api/user/register",
        modifiedUserData
      );
      console.log(response);
      const resData = await response.data;
      console.log(resData);
      localStorage.setItem("emailForOTP", resData.email);
      navigate("/otpInput");
    } catch (error) {
      if (error.response) {
        console.log(error.response);
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (error.response.status == 400) {
          setEmailErrMsg(error.response.data);
        }
        if (error.response.status == 406) {
          setEmailErrMsg(error.response.data);
        }
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
    }
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.password != userData.confirmPassword) {
      setPasswordErrMsg("Your Passwords are Mismatched");
      return;
    } else {
      setPasswordErrMsg("");
    }
    submitUserDetails();
  };

  return (
    <Paper sx={{ width: "35rem", p: 3, pb: 0, borderRadius: "0.5rem" }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <IconButton sx={{ opacity: 0, cursor: "default" }}>
          <Close />
        </IconButton>
        <Box width="4rem">
          <img width="100%" src="/unsolo-icon.svg" alt="unsolo-icon" />
        </Box>
        {closeDialog ? (
          <IconButton onClick={() => closeDialog(false)} sx={{ mt: -1 }}>
            <Close />
          </IconButton>
        ) : (
          <IconButton sx={{ opacity: 0, cursor: "default" }}>
            <Close />
          </IconButton>
        )}
      </Stack>
      <Box textAlign="center" py={2}>
        <Typography variant="h6">Register your Account</Typography>
        <Typography variant="subtitle2" color="text.secondary">
          Enter your personal details
        </Typography>
      </Box>
      <Box component="form" autoComplete="on" onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <Stack direction="row" spacing={2}>
            <TextField
              helperText=""
              fullWidth
              autoComplete="off"
              size="small"
              required
              name="firstName"
              label="First Name"
              value={userData.firstName}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              size="small"
              required
              label="Last Name"
              name="lastName"
              value={userData.lastName}
              onChange={handleChange}
            />
          </Stack>
          <TextField
            error={emailErrMsg ? true : false}
            helperText={emailErrMsg}
            fullWidth
            size="small"
            required
            type="email"
            label="Email Address"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
          <Typography fontWeight={500} color="text.secondary">
            Date of Birth:
          </Typography>
          <Stack direction="row" justifyContent="space-between">
            <Box width="20%">
              <TextField
                fullWidth
                select
                size="small"
                required
                label="Day"
                name="day"
                value={userData.day}
                onChange={handleChange}
                SelectProps={{ MenuProps }}
              >
                {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                  <MenuItem key={day} value={day}>
                    {day}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
            <Box width="30%">
              <TextField
                select
                fullWidth
                size="small"
                required
                label="Month"
                name="month"
                value={userData.month}
                onChange={handleChange}
                SelectProps={{ MenuProps }}
              >
                {months.map((month) => (
                  <MenuItem key={month[0]} value={month[0]}>
                    {month[1]}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
            <Box width="45%">
              <TextField
                select
                fullWidth
                size="small"
                required
                label="Year"
                name="year"
                value={userData.year}
                onChange={handleChange}
                SelectProps={{ MenuProps }}
              >
                {Array.from({ length: 86 }, (_, i) => 2006 - i).map((year) => (
                  <MenuItem key={year} value={year}>
                    {year}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          </Stack>
          <TextField
            fullWidth
            select
            size="small"
            required
            label="Gender"
            name="gender"
            value={userData.gender}
            onChange={handleChange}
          >
            <MenuItem value={"male"}>Male</MenuItem>
            <MenuItem value={"female"}>Female</MenuItem>
          </TextField>
          <TextField
            error={passwordErrMsg ? true : false}
            helperText={passwordErrMsg}
            type={showPassword ? "text" : "password"}
            fullWidth
            sx={{ mt: 2 }}
            size="small"
            required
            label="Password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? (
                      <VisibilityOutlined />
                    ) : (
                      <VisibilityOffOutlined />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            error={passwordErrMsg ? true : false}
            helperText={passwordErrMsg}
            type={showConfirmPassword ? "text" : "password"}
            fullWidth
            sx={{ mt: 2 }}
            size="small"
            required
            label="Confirm Password"
            name="confirmPassword"
            value={userData.confirmPassword}
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowConfirmPassword}
                    edge="end"
                  >
                    {showConfirmPassword ? (
                      <VisibilityOutlined />
                    ) : (
                      <VisibilityOffOutlined />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        <Stack direction="row" ml={-1.5} py={2}>
          <Checkbox checked={checked} required onChange={handleCheckedChange} />
          <Typography color="text.secondary">
            By Creating an account you agree to accept our{" "}
            <Typography component="span" color="primary">
              Privacy Policy
            </Typography>{" "}
            and{" "}
            <Typography component="span" color="primary">
              {" "}
              Terms of Service{" "}
            </Typography>
          </Typography>
        </Stack>
        <Box position="relative">
          <MyButton
            width="100%"
            color="white"
            mySubmit="submit"
            myDisabled={loading}
          >
            proceed
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
      </Box>

      <Typography color="text.secondary" textAlign="center" py={2}>
        Do you already have an account?{" "}
        {/* <Link style={{ textDecoration: "none" }} to="/verifyOTP"> */}
        {insideSignInModal ? (
          <Typography
            onClick={() => closeDialog(false)}
            sx={{ cursor: "pointer" }}
            component="span"
            color="primary"
          >
            Sign In
          </Typography>
        ) : (
          <SignInModal insideSignUpDialog={true}>
            <Typography
              sx={{ cursor: "pointer" }}
              component="span"
              color="primary"
            >
              Sign In
            </Typography>
          </SignInModal>
        )}
        {/* </Link> */}
      </Typography>
    </Paper>
  );
}

const months = [
  ["01", "January"],
  ["02", "Febuary"],
  ["03", "March"],
  ["04", "April"],
  ["05", "May"],
  ["06", "June"],
  ["07", "July"],
  ["08", "August"],
  ["09", "September"],
  ["10", "October"],
  ["11", "November"],
  ["12", "December"],
];

const MenuProps = {
  PaperProps: {
    style: {
      height: 200,
      // width: 250,
    },
  },
};
