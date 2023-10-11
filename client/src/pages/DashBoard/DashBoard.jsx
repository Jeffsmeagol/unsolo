import React from 'react';
// import Navbar from '../Navbar/Navbar';
import DashBoardHeader from './DashBoardHeader/DashBoardHeader';
import Avatar from '@mui/material/Avatar';
import LocationImage from './DashBoardContent/LocationImage/LocationImage';
import UpcomingTrips from './DashBoardContent/UpcomingTrips/UpcomingTrips';
import ActivityFeed from './DashBoardContent/ActivityFeed/ActivityFeed';
import ChatStack from './DashBoardContent/ChatStack/ChatStack';

function DashBoard() {
  const profileImg = 'https://images.pexels.com/photos/1000498/pexels-photo-1000498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

  return (
    <div>
      {/* <Navbar imgSrc={profileImg} /> */}

      <div className="vstack gap-2 col-sm-10 mx-auto">
        <DashBoardHeader imgSrc={profileImg} />

        <div className="container mt-3">
          <div className="row">
            <div className="col-9">
              <div className="vstack gap-2 mx-auto">
                <LocationImage />
                <UpcomingTrips />
                <ActivityFeed />
              </div>
            </div>
            <div className="col-3 position-relative">
              <ChatStack />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;












// import React from 'react';
// // import Navbar from '../Navbar/Navbar';
// import DashBoardHeader from './DashBoardHeader/DashBoardHeader';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import Avatar from '@mui/material/Avatar';
// import Grid from '@mui/material/Grid';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';

// function DashBoard() {
//   const profileImg = 'https://images.pexels.com/photos/1000498/pexels-photo-1000498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

//   return (
//     <div>
//       {/* <Navbar imgSrc={profileImg} /> */}

//       <div className="vstack gap-2 col-sm-10 mx-auto">
//         <DashBoardHeader imgSrc={profileImg} />

//         <div className="container mt-3">
//           <div className="row">
//             <div className="col-9">
//               <div className="vstack gap-2 mx-auto">
//                 <Card variant="outlined" sx={{ bgcolor: 'transparent' }}>
//                   <CardMedia
//                     component="img"
//                     height="300"
//                     image="https://media.istockphoto.com/id/1309800132/photo/dubai-skyline-view-from-the-marasi-marina-in-city-business-bay-downtown-area-in-the-uae.jpg?s=2048x2048&w=is&k=20&c=V4BcklcU3AYCyeJcNkKOMzF1Qo-DK-AHlgmgOJ02VQE="
//                     alt="..."
//                   />
//                   <CardContent>
//                     <Typography variant="h5" component="div">
//                       Place, Location
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                       This should be just random text or description about Place, Location. Place, Location details
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                       Visited 5 Times this year // Most Visited Place  // Popular Location
//                     </Typography>
//                   </CardContent>
//                 </Card>

//                 <div className="mt-2">
//                   <h4 className="">Upcoming Trips</h4>
//                   <div className="mt-4">
//                     <Grid container spacing={2}>
//                       {[1, 2, 3, 4].map((item) => (
//                         <Grid item key={item}>
//                           <Avatar
//                             alt="Place, Location"
//                             src="https://media.istockphoto.com/id/1309800132/photo/dubai-skyline-view-from-the-marasi-marina-in-city-business-bay-downtown-area-in-the-uae.jpg?s=2048x2048&w=is&k=20&c=V4BcklcU3AYCyeJcNkKOMzF1Qo-DK-AHlgmgOJ02VQE="
//                             sx={{ width: 60, height: 60 }}
//                           />
//                           <Typography variant="body2" className="fw-light">Place, Location</Typography>
//                         </Grid>
//                       ))}
//                     </Grid>
//                   </div>
//                 </div>

//                 <div className="mt-1">
//                   <div className="row">
//                     <div className="col-7">
//                       <Card variant="outlined">
//                         <CardHeader
//                           title="Travel Companions"
//                           avatar={<i className="fa-solid fa-users-line"></i>}
//                         />
//                         <List>
//                           <ListItem>
//                             <ListItemText
//                               primary="Joseph Morgan"
//                               secondary={
//                                 <React.Fragment>
//                                   <Typography variant="body2">JM</Typography>
//                                   <Typography variant="body2">Searching</Typography>
//                                 </React.Fragment>
//                               }
//                             />
//                           </ListItem>
//                           <ListItem>
//                             <ListItemText primary="Jamie Jones" />
//                           </ListItem>
//                           <ListItem>
//                             <ListItemText primary="Matthew Rolland" />
//                           </ListItem>
//                         </List>
//                       </Card>
//                     </div>
//                     <div className="col-5">
//                       <Card variant="outlined">
//                         <CardHeader
//                           title="Activity Feed"
//                           avatar={<i className="fa-solid fa-users-line"></i>}
//                         />
//                         <List>
//                           <ListItem>
//                             <ListItemText primary="Activity One" />
//                           </ListItem>
//                           <ListItem>
//                             <ListItemText primary="Activity Two" />
//                           </ListItem>
//                           <ListItem>
//                             <ListItemText primary="Activity Three" />
//                           </ListItem>
//                         </List>
//                       </Card>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-3">
//               <Card variant="outlined">
//                 <CardMedia
//                   component="img"
//                   height="200"
//                   image="..."
//                   alt="..."
//                 />
//                 <CardContent>
//                   <Typography variant="h5" component="div">
//                     Place, Location
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     This should be just random text about Place, Location.
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     Visited 5 Times this year, Most Visited Place  // Popular Location
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DashBoard;
