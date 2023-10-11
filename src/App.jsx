import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import Testing from "./pages/Testing";
import OtpInput from "./pages/Otp/OtpInput";
import Booking from "./components/layout/Booking";
import Buddy from "./pages/Buddy";
import Trip from "./pages/Trip";
import Flight from "./pages/Flight";
import Hotel from "./pages/Hotel";
import Layout from "./components/modules/layout/Layout";
import PersistentDrawerLeft from "./pages/DashBoard/PersistentDrawerLeft/PersistentDrawerLeft";
import DashBoardWindow from "./pages/DashBoard/DashBoardWindow/DashBoardWindow";
import Homepage from "./components/layout/Homepage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="otpInput" element={<OtpInput />} />
          <Route path="homepage" element={<Homepage />}>
            <Route path="dashboard" element={<DashBoardWindow />} />
            <Route path="buddy" element={<Buddy />} />
            <Route path="trip" element={<Trip />} />
            <Route path="booking" element={<Booking />}>
              <Route path="flight" element={<Flight />} />
              <Route path="hotel" element={<Hotel />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="testing" element={<Testing />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
