import React from 'react';
import Avatar from '@mui/material/Avatar';


function ActivityFeed() {
  return (
    <div>
      <div className="mt-1">
        <div className="">
          {/* <div className="card" style={{width: 18 + 'rem'}}> */}
          <div className="card">
            <div className="card-header">
              Activity Feed
            </div>
            <ul className="list-group list-group-flush">
              {/* <li className="list-group-item lh-1" style={{ height: 63 + 'px' }}> */}
              <li className="list-group-item lh-1">
                <div className='row'>
                  <div className='col-1 justify-content-center'>
                  <i className="fa-solid fa-user-group fa-xl mt-4" style={{ color: '#aaaab6' }}></i>
                  </div>
                  <div className='col-11'>
                    <p className='lh-1 fw-medium'>
                      Request accepted from <span className='fw-bolder'>Janet Kalu</span> for a trip to Paris, France.
                    </p>
                    <p className='lh-1 fw-light mt-0'>Notifications <i className="fa-solid fa-circle fa-2xs mx-1" style={{color: "#cdd6d6"}}></i> <a className='link-warning'>View Details</a> </p>
                  </div>
                </div>
              </li>
              <li className="list-group-item lh-1">
                <div className='row'>
                  <div className='col-1 justify-content-center'>
                  <i className="fa-regular fa-thumbs-up fa-xl mt-4" style={{ color: '#aaaab6' }}></i>
                  </div>
                  <div className='col-11'>
                    <p className='lh-1 fw-medium'>
                      Your invite for a buddy from <span className='fw-bolder'>Dubai</span> has two views.
                    </p>
                    <p className='lh-1 fw-light mt-0'>Invites <i className="fa-solid fa-circle fa-2xs mx-1" style={{color: "#cdd6d6"}}></i> <a className='link-warning'>View Invites</a> </p>
                  </div>
                </div>
              </li>
              <li className="list-group-item lh-1">
                <div className='row'>
                  <div className='col-1 justify-content-center'>
                  <i className="fa-regular fa-comments fa-xl fa-beat-fade mt-4" style={{ color: '#aaaab6' }}></i>
                  </div>
                  <div className='col-11'>
                    <p className='lh-1 fw-medium'>
                      Chiamaka sent you a message on Chats
                    </p>
                    <p className='lh-1 fw-light mt-0'>Chats <i className="fa-solid fa-circle fa-2xs mx-1" style={{color: "#cdd6d6"}}></i> <a className='link-warning'>View Chats</a> </p>
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

export default ActivityFeed
