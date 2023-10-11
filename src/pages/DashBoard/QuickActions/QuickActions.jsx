import React from 'react';
import Avatar from '@mui/material/Avatar';


function QuickActions() {
  return (
    <div>
      <div className="mt-1">
        <div className="">
          {/* <div className="card" style={{width: 18 + 'rem'}}> */}
          <div className="card">
            <div className="card-header">
              Quick Actions
            </div>
            <ul className="list-group list-group-flush">
              {/* <li className="list-group-item lh-1" style={{ height: 50 + 'px' }}> */}
              <li className="list-group-item lh-1">
                <div className='row'>
                  <div className='col-1 justify-content-center'>
                    <i className="fa-regular fa-calendar fa-xl mt-4" style={{ color: '#aaaab6' }}></i>
                  </div>
                  <div className='col-9'>
                    <div className='ms-1'>
                      <h5 className='lh-1 fw-bold'>
                        Book a Hotel
                      </h5>
                      <p className='lh-1 fw-light'>Conducive place for your tours</p>
                    </div>
                  </div>
                  <div className='col-2'></div>
                </div>
              </li>
              <li className="list-group-item lh-1">
                <div className='row'>
                  <div className='col-1'>
                    <i className="fa-solid fa-plane-up fa-xl mt-4" style={{ color: '#aaaab6' }}></i>
                  </div>
                  <div className='col-9'>
                    <div className='ms-1'>
                      <h5 className='lh-1 fw-bold'>
                        Request a Fligt
                      </h5>
                      <p className='lh-1 fw-light'>Fly to anywhere around the world</p>
                    </div>
                  </div>
                  <div className='col-2'></div>
                </div>
              </li>
              <li className="list-group-item lh-1">
                <div className='row'>
                  <div className='col-1'>
                    <i className="fa-solid fa-people-line fa-xl mt-4" style={{ color: '#aaaab6' }}></i>
                  </div>
                  <div className='col-9'>
                    <div className='ms-1'>
                      <h5 className='lh-1 fw-bold'>
                        Find a Buddy
                      </h5>
                      <p className='lh-1 fw-light'>Meet friends around you</p>
                    </div>
                  </div>
                  <div className='col-2'></div>
                </div>
              </li>
              <li className="list-group-item lh-1">
                <div className='row'>
                  <div className='col-1'>
                    <i className="fa-solid fa-circle-exclamation fa-xl mt-4" style={{ color: '#aaaab6' }}></i>
                  </div>
                  <div className='col-9'>
                    <div className='ms-1'>
                      <h5 className='lh-1 fw-bold'>
                        Emergency
                      </h5>
                      <p className='lh-1 fw-light'>Request immediate help</p>
                    </div>
                  </div>
                  <div className='col-2'></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuickActions
