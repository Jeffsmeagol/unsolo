import React from 'react';
import './ChatStack.css';
import Avatar from '@mui/material/Avatar';

function ChatStack() {
  return (
    <div>
      <div className="card border-0">
        <div className="card-header">
          My Chats
        </div>
        <ul className="list-group list-group-flush align-items-center align-self-center">
          <li className="list-group-item" style={{ height: 70 + 'px' }}>
            <div className='row mt-3'>
              <div className="col-2">
                <Avatar
                  alt="Remy Sharp"
                  src="https://media.istockphoto.com/id/1309800132/photo/dubai-skyline-view-from-the-marasi-marina-in-city-business-bay-downtown-area-in-the-uae.jpg?s=2048x2048&w=is&k=20&c=V4BcklcU3AYCyeJcNkKOMzF1Qo-DK-AHlgmgOJ02VQE="
                  sx={{ width: 35, height: 35 }}
                />
              </div>
              <div className='col-10'>
                <h6>Miles Morgan</h6>
                <p className='lh-1'>Chat text with Miles Morgan</p>
              </div>
            </div>
          </li>
          <li className="list-group-item" style={{ height: 70 + 'px' }}>
            <div className='row mt-3'>
              <div className="col-2">
                <Avatar
                  alt="Remy Sharp"
                  src="https://media.istockphoto.com/id/1309800132/photo/dubai-skyline-view-from-the-marasi-marina-in-city-business-bay-downtown-area-in-the-uae.jpg?s=2048x2048&w=is&k=20&c=V4BcklcU3AYCyeJcNkKOMzF1Qo-DK-AHlgmgOJ02VQE="
                  sx={{ width: 35, height: 35 }}
                />
              </div>
              <div className='col-10'>
                <h6>Miles Morgan</h6>
                <p className='lh-1'>Chat text with Miles Morgan</p>
              </div>
            </div>
          </li>
          <li className="list-group-item" style={{ height: 70 + 'px' }}>
            <div className='row mt-3'>
              <div className="col-2">
                <Avatar
                  alt="Remy Sharp"
                  src="https://media.istockphoto.com/id/1309800132/photo/dubai-skyline-view-from-the-marasi-marina-in-city-business-bay-downtown-area-in-the-uae.jpg?s=2048x2048&w=is&k=20&c=V4BcklcU3AYCyeJcNkKOMzF1Qo-DK-AHlgmgOJ02VQE="
                  sx={{ width: 35, height: 35 }}
                />
              </div>
              <div className='col-10'>
                <h6>Miles Morgan</h6>
                <p className='lh-1'>Chat text with Miles Morgan</p>
              </div>
            </div>
          </li>
          <li className="list-group-item" style={{ height: 70 + 'px' }}>
            <div className='row mt-3'>
              <div className="col-2">
                <Avatar
                  alt="Remy Sharp"
                  src="https://media.istockphoto.com/id/1309800132/photo/dubai-skyline-view-from-the-marasi-marina-in-city-business-bay-downtown-area-in-the-uae.jpg?s=2048x2048&w=is&k=20&c=V4BcklcU3AYCyeJcNkKOMzF1Qo-DK-AHlgmgOJ02VQE="
                  sx={{ width: 35, height: 35 }}
                />
              </div>
              <div className='col-10'>
                <h6>Miles Morgan</h6>
                <p className='lh-1'>Chat text with Miles Morgan</p>
              </div>
            </div>
          </li>
          <li className="list-group-item" style={{ height: 70 + 'px' }}>
            <div className='row mt-3'>
              <div className="col-2">
                <Avatar
                  alt="Remy Sharp"
                  src="https://media.istockphoto.com/id/1309800132/photo/dubai-skyline-view-from-the-marasi-marina-in-city-business-bay-downtown-area-in-the-uae.jpg?s=2048x2048&w=is&k=20&c=V4BcklcU3AYCyeJcNkKOMzF1Qo-DK-AHlgmgOJ02VQE="
                  sx={{ width: 35, height: 35 }}
                />
              </div>
              <div className='col-10'>
                <h6>Miles Morgan</h6>
                <p className='lh-1'>Chat text with Miles Morgan</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="card position-absolute bottom-0 w-100 h-25">
        <div className="card-body">
          <h5 className="card-title">Chat</h5>
          <p className="card-text">Active Chat Text</p>
          <p className="card-text">Active Chat Text</p>
          
        </div>
      </div>
    </div>
  )
}

export default ChatStack
