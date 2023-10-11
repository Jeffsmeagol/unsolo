import React from 'react';
import Avatar from '@mui/material/Avatar';

function DashBoardHeader(props) {
  return (
    <div>
      <div className="card">
        <div className="card-body container">
          <div className='row'>
            <div className='d-inline-block col-1 overflow-hidden align-self-center h-100'>
              <Avatar
                alt="Remy Sharp"
                src="https://media.istockphoto.com/id/1309800132/photo/dubai-skyline-view-from-the-marasi-marina-in-city-business-bay-downtown-area-in-the-uae.jpg?s=2048x2048&w=is&k=20&c=V4BcklcU3AYCyeJcNkKOMzF1Qo-DK-AHlgmgOJ02VQE="
                sx={{ width: 60, height: 60 }}
              />
            </div>
            <div className='d-inline-block col-3 align-self-center'>
              <h4>Hi Mitchel</h4>
              <p>How are you doing today?</p>
            </div>
            <div className='d-inline-block col-6'>
              <div className="d-flex ms-5">
                <a className="my-5 mx-3" href="#">DashBoard</a>
                <a className="my-5 mx-3" href="#">Buddy</a>
                <a className="my-5 mx-3" href="#">Trips</a>
                <a className="my-5 mx-3" href="#">Invites</a>
                <a className="my-5 mx-3" href="#">Bookings</a>
                <a className="my-5 mx-3" href="#">Chats</a>
              </div>
            </div>
            <div className='d-inline-block col-2'>
              <div className="btn-group mx-auto border border-secondary-subtle mt-4">
                <button className="btn btn-light btn-lg" type="button">
                  <i className="fa-regular fa-calendar fa-sm me-3"></i>
                  Trips
                </button>
                <button type="button" className="btn btn-lg btn-light dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                  <span className="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Today</a></li>
                  <li><a className="dropdown-item" href="#">This Week</a></li>
                  <li><a className="dropdown-item" href="#">This Month</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">All</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoardHeader;
