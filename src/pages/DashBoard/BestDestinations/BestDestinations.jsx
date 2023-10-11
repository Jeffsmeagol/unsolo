import { Avatar } from '@mui/material'
import React from 'react'

function BestDestinations() {
  return (
    <div>
      <div className="mt-1">
        <div className="">
          {/* <div className="card" style={{width: 18 + 'rem'}}> */}
          <div className="card">
            {/* <div className="card-header" style={{ height: 60 + 'px' }}> */}
            <div className="card-header">
              <h4 className='fw-bold'>Best Destinations</h4>
              <p className='fw-light mt-0'>Find travel companions from your best locations</p>
            </div>
            <ul className="list-group list-group-flush">

              {/* <li className="list-group-item border-0 lh-1" style={{ height: 80 + 'px' }}> */}
              <li className="list-group-item border-0 lh-1">
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
                  <div className='col-4'>
                    <div className='ms-1 mt-3'>
                      <h5 className='lh-1 fw-bold'>
                        Miami Beach
                      </h5>
                      <p className='lh-1 fw-light'>
                        <span>
                          <i className="fa-solid fa-location-dot me-2"></i>
                          Miami, Florida.
                        </span>
                        <span className='ms-2'>
                          <i className="fa-regular fa-star me-1"></i>
                          4.8
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className='col-3'>
                    <div className='justify-content-center mt-3'>
                      <div className="hstack gap-0">
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
                  <div className='col-3'>
                    <h2 className='mt-4'>₦1,200,000/trip</h2>
                  </div>
                  <div className='col-1'>
                    <div className='mt-4'>
                      <button type="button" className="btn btn-warning">View</button>
                    </div>
                  </div>
                </div>
              </li>


              <li className="list-group-item lh-1">
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
                  <div className='col-4'>
                    <div className='ms-1 mt-3'>
                      <h5 className='lh-1 fw-bold'>
                        City Park
                      </h5>
                      <p className='lh-1 fw-light'>
                        <span>
                          <i className="fa-solid fa-location-dot me-2"></i>
                          New Orleans, Louisiana.
                        </span>
                        <span className='ms-2'>
                          <i className="fa-regular fa-star me-1"></i>
                          4.5
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className='col-3'>
                    <div className='justify-content-center mt-3'>
                      <div className="hstack gap-0">
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
                          23 persons available on this trip.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-3'>
                    <h2 className='mt-4'>₦900,000/trip</h2>
                  </div>
                  <div className='col-1'>
                    <div className='mt-4'>
                      <button type="button" className="btn btn-warning">View</button>
                    </div>
                  </div>
                </div>
              </li>


              <li className="list-group-item lh-1">
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
                  <div className='col-4'>
                    <div className='ms-1 mt-3'>
                      <h5 className='lh-1 fw-bold'>
                        Zuma Rock Resort
                      </h5>
                      <p className='lh-1 fw-light'>
                        <span>
                          <i className="fa-solid fa-location-dot me-2"></i>
                          Abuja, Nigeria.
                        </span>
                        <span className='ms-2'>
                          <i className="fa-regular fa-star me-1"></i>
                          4.1
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className='col-3'>
                    <div className='justify-content-center mt-3'>
                      <div className="hstack gap-0">
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
                          21 persons available on this trip.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-3'>
                    <h2 className='mt-4'>₦600,000/trip</h2>
                  </div>
                  <div className='col-1'>
                    <div className='mt-4'>
                      <button type="button" className="btn btn-warning">View</button>
                    </div>
                  </div>
                </div>
              </li>


              <li className="list-group-item lh-1">
                <div className='row'>
                  <div className='col-1 justify-content-center'>
                    <div className=''>
                      <img
                        src="https://www.visitdubai.com/-/media/gathercontent/poi/m/motiongate-dubai/fallback-image/motiongate-dubai-01.jpg?rev=d8cb18080b9142ce9e7b22cfa627c8bf&cx=0.5&cy=0.5&cw=1556&ch=690"
                        className="d-block w-100 rounded-4"
                        alt="accra"
                      />
                    </div>
                  </div>
                  <div className='col-4'>
                    <div className='ms-1 mt-3'>
                      <h5 className='lh-1 fw-bold'>
                        Motiongate, Dubai.
                      </h5>
                      <p className='lh-1 fw-light'>
                        <span>
                          <i className="fa-solid fa-location-dot me-2"></i>
                          Dubai
                        </span>
                        <span className='ms-2'>
                          <i className="fa-regular fa-star me-1"></i>
                          4.0
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className='col-3'>
                    <div className='justify-content-center mt-3'>
                      <div className="hstack gap-0">
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
                            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1e/9a/90/40/entrance-gate-to-motiongate.jpg?w=1200&h=1200&s=1"
                          // sx={{ width: 80, height: 80 }}
                          />
                        </span>
                      </div>

                      <div>
                        <p>
                          19 persons available on this trip.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-3'>
                    <h2 className='mt-4'>₦1,100,000/trip</h2>
                  </div>
                  <div className='col-1'>
                    <div className='mt-4'>
                      <button type="button" className="btn btn-warning">View</button>
                    </div>
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

export default BestDestinations
