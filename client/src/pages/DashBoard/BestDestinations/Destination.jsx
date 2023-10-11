import React from 'react'
import { Avatar } from '@mui/material'

function Destination() {
  return (
    <div>
      <li className="list-group-item lh-1" style={{ height: 60 + 'px' }}>
        <div className='row'>
          <div className='col-1 justify-content-center'>
            <div className=''>
              <img
                src="https://lh3.googleusercontent.com/drive-viewer/AK7aPaAeN8Q0DkZ1HrHsk2fJNdqZBRFGtSc7NCKwdT5urYrZiaKLodOlNz05s4Xx8J3cpjoiMXMp6AnAD3SYGWoZWsu387if=s1600"
                className="d-block w-100 rounded-4"
                alt="accra"
              />
            </div>
          </div>
          <div className='col-3'>
            <div className='ms-1 mt-2'>
              <h5 className='lh-1 fw-bold'>
                Miami Beach
              </h5>
              <p className='lh-1 fw-light'>
                <span>
                  <i class="fa-solid fa-location-dot me-2"></i>
                  Miami, USA.
                </span>
                <span className='ms-4'>
                  <i class="fa-regular fa-star me-1"></i>
                  4.8
                </span>
              </p>
            </div>
          </div>
          <div className='col-3'>
            <div className=''>
              <div className="hstack gap-0 justify-content-center">
                <span>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://media.istockphoto.com/id/1309800132/photo/dubai-skyline-view-from-the-marasi-marina-in-city-business-bay-downtown-area-in-the-uae.jpg?s=2048x2048&w=is&k=20&c=V4BcklcU3AYCyeJcNkKOMzF1Qo-DK-AHlgmgOJ02VQE="
                  // sx={{ width: 80, height: 80 }}
                  />
                </span>
                <span>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://media.istockphoto.com/id/1309800132/photo/dubai-skyline-view-from-the-marasi-marina-in-city-business-bay-downtown-area-in-the-uae.jpg?s=2048x2048&w=is&k=20&c=V4BcklcU3AYCyeJcNkKOMzF1Qo-DK-AHlgmgOJ02VQE="
                  // sx={{ width: 80, height: 80 }}
                  />
                </span>
                <span>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://media.istockphoto.com/id/1309800132/photo/dubai-skyline-view-from-the-marasi-marina-in-city-business-bay-downtown-area-in-the-uae.jpg?s=2048x2048&w=is&k=20&c=V4BcklcU3AYCyeJcNkKOMzF1Qo-DK-AHlgmgOJ02VQE="
                  // sx={{ width: 80, height: 80 }}
                  />
                </span>
                <span>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://media.istockphoto.com/id/1309800132/photo/dubai-skyline-view-from-the-marasi-marina-in-city-business-bay-downtown-area-in-the-uae.jpg?s=2048x2048&w=is&k=20&c=V4BcklcU3AYCyeJcNkKOMzF1Qo-DK-AHlgmgOJ02VQE="
                  // sx={{ width: 80, height: 80 }}
                  />
                </span>
              </div>

              <div>
                <p>
                  34 persons available on this trip.
                </p>
              </div>
            </div>
          </div>
          <div className='col-4'>
            <h2 className='mt-3'>₦1,200,000 / trip</h2>
          </div>
          <div className='col-1'>
            <div className='mt-2'>
              <button type="button" class="btn btn-warning">View</button>
            </div>
          </div>
        </div>
      </li>
    </div>
  )
}

export default Destination
