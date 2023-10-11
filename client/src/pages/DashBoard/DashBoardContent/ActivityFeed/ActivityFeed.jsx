import React from 'react';
import Avatar from '@mui/material/Avatar';

function ActivityFeed() {
  return (
    <div>
      <div className="mt-1">
        <div className="row">
          <div className="col-7">
            <div className="card">
              <div className="card-header">
                <i className="fa-solid fa-users-line me-2"></i>
                Travel Companions
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item" style={{ height: 50 + 'px' }}>
                  <div className="row">
                    <div className="col-7 align-self-center">
                      Joseph Morgan
                    </div>
                    <div className="col-2">
                      <Avatar
                        alt="Remy Sharp"
                        src="https://media.istockphoto.com/id/1309800132/photo/dubai-skyline-view-from-the-marasi-marina-in-city-business-bay-downtown-area-in-the-uae.jpg?s=2048x2048&w=is&k=20&c=V4BcklcU3AYCyeJcNkKOMzF1Qo-DK-AHlgmgOJ02VQE="
                        sx={{ width: 30, height: 30 }}
                      />
                    </div>
                    <div className="col-3 align-self-center">
                      Searching
                    </div>
                  </div>
                </li>
                <li className="list-group-item" style={{ height: 50 + 'px' }}>
                  <div className="row">
                    <div className="col-7 align-self-center">
                      Adam Eve
                    </div>
                    <div className="col-2">
                      <Avatar
                        alt="Remy Sharp"
                        src="https://media.istockphoto.com/id/1309800132/photo/dubai-skyline-view-from-the-marasi-marina-in-city-business-bay-downtown-area-in-the-uae.jpg?s=2048x2048&w=is&k=20&c=V4BcklcU3AYCyeJcNkKOMzF1Qo-DK-AHlgmgOJ02VQE="
                        sx={{ width: 30, height: 30 }}
                      />
                    </div>
                    <div className="col-3">
                      Searching
                    </div>
                  </div>
                </li>
                <li className="list-group-item" style={{ height: 50 + 'px' }}>
                  <div className="row">
                    <div className="col-7 align-self-center">
                      Arthur Arthur
                    </div>
                    <div className="col-2">
                      <Avatar
                        alt="Remy Sharp"
                        src="https://media.istockphoto.com/id/1309800132/photo/dubai-skyline-view-from-the-marasi-marina-in-city-business-bay-downtown-area-in-the-uae.jpg?s=2048x2048&w=is&k=20&c=V4BcklcU3AYCyeJcNkKOMzF1Qo-DK-AHlgmgOJ02VQE="
                        sx={{ width: 30, height: 30 }}
                      />
                    </div>
                    <div className="col-3">
                      Searching
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-5">
            {/* <div class="card" style={{width: 18 + 'rem'}}> */}
            <div className="card">
              <div className="card-header">
                Activity Feed
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item" style={{ height: 50 + 'px' }}>Activity One</li>
                <li className="list-group-item" style={{ height: 50 + 'px' }}>Activity Two</li>
                <li className="list-group-item" style={{ height: 50 + 'px' }}>Activity Three</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActivityFeed
