import React, { useState } from "react";
import axios from "axios";
import "./OtpInput.css";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

function OtpInput() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [otpErrMsg, setOtpErrMsg] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setOtp(value);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8080/api/user/verify-otp",
        { otp, emailForOTP: localStorage.getItem("emailForOTP") }
      );
      console.log(response);
      const resData = await response.data;
      console.log(resData);
      localStorage.setItem("token", resData.token);
      navigate("/", { replace: true, state: { redirectedFromOtp: true } });
    } catch (error) {
      if (error.response) {
        console.log(error.response);
        if (error.response.status == 401) {
          setOtpErrMsg(error.response.data);
        }
        if (error.response.status == 403) {
          setOtpErrMsg(error.response.data);
        }
      } else {
        console.log("Error", error);
      }
    }
    setLoading(false);
  };
  //style="max-width: 540px;"

  return (
    <div className="otp-container">
      <div className="card mb-3" style={{ maxWidth: 1000 + "px" }}>
        <div className="row g-0">
          <div className="col-md-6">
            <img
              src="https://lh3.googleusercontent.com/drive-viewer/AITFw-yXo8ZLFBEf4p0kX9E1l8hM4JktNMZVBYX8r1sZ-55vd9yNJTrTPBOvsG09Fgjcp0UveSaYD4TsSxbY4oLzX0RmbZr2=s1600"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-6 text-center desc">
            <div className="card-body mt-5">
              <h3 className="card-title">Verify Your Account</h3>
              <p className="card-text">
                Please enter the OTP sent to the provided email
              </p>
              <input
                type="text"
                value={otp}
                onChange={handleChange}
                placeholder="Enter OTP"
                className="otp-input"
              />
              <p>{otpErrMsg}</p>
              <div style={{ position: "relative" }}>
                <button
                  type="button"
                  disabled={loading}
                  className="btn btn-primary btn-md m-2"
                  onClick={handleSubmit}
                >
                  Verify
                </button>
                {loading && (
                  <CircularProgress
                    size={30}
                    sx={{
                      color: "secondary.dark",
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      marginTop: "-15px",
                      marginLeft: "-15px",
                    }}
                  />
                )}
              </div>
              <p className="card-text">
                <small className="text-body-secondary">
                  Didn't get a code yet? <a href="#resendOTP">Resend OTP</a>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtpInput;

// import React, { useState } from 'react';
// import axios from 'axios';
// import Typography from '@mui/material/Typography';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Link from '@mui/material/Link';

// import './OtpInput.css';

// function OtpInput() {
//   const [otp, setOtp] = useState('');

//   const handleChange = (e) => {
//     const { value } = e.target;
//     setOtp(value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('backend-api-for-otp', { otp }); // backend endpoint
//       console.log('OTP verification successful:', response.data);
//     } catch (error) {
//       console.error('Error verifying OTP:', error);
//     }
//   };

//   return (
//       <Card sx={{ maxWidth: 1000 }}>
//         <div className="row g-0">
//           <div className="col-md-6">
//             <img
//               src="https://lh3.googleusercontent.com/drive-viewer/AITFw-yXo8ZLFBEf4p0kX9E1l8hM4JktNMZVBYX8r1sZ-55vd9yNJTrTPBOvsG09Fgjcp0UveSaYD4TsSxbY4oLzX0RmbZr2=s1600"
//               alt="..."
//               className="img-fluid rounded-start"
//             />
//           </div>
//           <div className="col-md-6 text-center desc">
//             <CardContent className="mt-5">
//               <Typography variant="h3" component="div">
//                 Verify Your Account
//               </Typography>
//               <Typography variant="body1" component="div" className="mt-2">
//                 Please enter the OTP sent to the provided email
//               </Typography>
//               <TextField
//                 type="text"
//                 value={otp}
//                 onChange={handleChange}
//                 placeholder="Enter OTP"
//                 className="otp-input"
//                 // fullWidth
//               />
//               <div className="mt-2">
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   size="large"
//                   onClick={handleSubmit}
//                 >
//                   Verify
//                 </Button>
//               </div>
//               <Typography variant="body2" component="div" className="mt-2">
//                 Didn't get a code yet? <Link href="#resendOTP">Resend OTP</Link>
//               </Typography>
//             </CardContent>
//           </div>
//         </div>
//       </Card>
//   );
// }

// export default OtpInput;
