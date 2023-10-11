// import { Title } from '@mui/icons-material'
import Title from '../Title/Title';
import React from 'react'
import UpcomingTrips from '../UpcomingTrips/UpcomingTrips'
import PopularVisits from '../PopularVisits/PopularVisits'
import Profile from '../Profile/Profile'
import TripData from '../TripData/TripData'
import QuickActions from '../QuickActions/QuickActions'
import ActivityFeed from '../ActivityFeed/ActivityFeed'
import BestDestinations from '../BestDestinations/BestDestinations'

function DashBoardWindow() {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className="vstack gap-3">
            <div className='row'>
              <Title />
            </div>

            <div className='row'>
              <div className='col-8'>
                <div className="vstack gap-3 me-2">
                  <div className='row'>
                    <UpcomingTrips />
                  </div>
                  {/* <div className='row'></div> */}
                  <div className='row'>
                    <PopularVisits />
                  </div>
                  <div className='row'>
                    <BestDestinations />
                  </div>

                </div>
              </div>
              <div className='col-4'>
                <div className="vstack gap-3 ms-2">
                  <div className='row mb-2'>
                    <div className='col-8'>
                      <Profile />
                    </div>
                    <div className='col-4'>
                      <TripData />
                    </div>
                  </div>
                  <div className='row mt-2 mb-2'>
                    <QuickActions />
                  </div>
                  <div className='row mt-2'>
                    <ActivityFeed />
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-10'>
                {/* <div className='row'>
                  <BestDestinations />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashBoardWindow
