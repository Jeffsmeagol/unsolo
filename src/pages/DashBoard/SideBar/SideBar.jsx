import React from 'react'
import { Avatar } from '@mui/material'

function SideBar() {
  return (
    <div>
      <div>
        <div className='my-2 hstack gap-3'>
          <input className="form-control me-auto" type="text" placeholder="Enter Search Term" aria-label="Add your item here..." />
          <button type="button" className="btn btn-secondary">Search</button>
          {/* <div class="vr"></div>
          <button type="button" class="btn btn-outline-danger">Reset</button> */}
        </div>
        <div>
          <div className="card my-5 border-0" style={{ width: 20 + 'rem' }}>
            <ul className="list-group list-group-flush">
              <li className="list-group-item" style={{ height: 40 + 'px' }}>DashBoard</li>
              <li className="list-group-item" style={{ height: 40 + 'px' }}>Buddies</li>
              <li className="list-group-item" style={{ height: 40 + 'px' }}>Trips</li>
              <li className="list-group-item" style={{ height: 40 + 'px' }}>Invites</li>
              <li className="list-group-item" style={{ height: 40 + 'px' }}>Bookings</li>
              <li className="list-group-item" style={{ height: 40 + 'px' }}>Chat</li>
              <li className="list-group-item" style={{ height: 40 + 'px' }}>Broadcast</li>
            </ul>
          </div>
        </div>
        <div className='mb-3'>
          <div className="card border-0 position-absolute bottom-0" style={{ width: 20 + 'rem' }}>
            <ul className="list-group list-group-flush">
              <li className="list-group-item" style={{ height: 40 + 'px' }}>Site Settings</li>
              <li className="list-group-item" style={{ height: 40 + 'px' }}>
                <div className='row'>
                  <div className='col-2'>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://media.istockphoto.com/id/1309800132/photo/dubai-skyline-view-from-the-marasi-marina-in-city-business-bay-downtown-area-in-the-uae.jpg?s=2048x2048&w=is&k=20&c=V4BcklcU3AYCyeJcNkKOMzF1Qo-DK-AHlgmgOJ02VQE="
                      sx={{ width: 50, height: 50 }}
                    />
                  </div>
                  <div className='col-1'></div>
                  <div className='col-9'>
                    <h5>Oluwasegun Tosin</h5>
                    <p>oluwaseguntosin@gmail.com</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SideBar
