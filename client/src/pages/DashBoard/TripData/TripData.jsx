import React from 'react'
import { Avatar } from '@mui/material'

function TripData() {
  return (
    <div>
      <div className="card border-0">
        <ul className="list-group list-group-flush align-items-center align-self-center text-center">
          {/* <li className="list-group-item border-0 rounded-4" style={{ height: 70 + 'px', background: '#0000000a' }}> */}
          <li className="list-group-item border-0 rounded-4" style={{background: '#0000000a' }}>
            <div className='mt-2 mb-2'>
              <div className=''>
                <h3 className='fw-bold'>20</h3>
                <p>Total Trips</p>
              </div>
            </div>
          </li>
          {/* <li className="list-group-item border-0 rounded-4" style={{ height: 70 + 'px', background: '#0000000a' }}> */}
          <li className="list-group-item border-0 rounded-4" style={{background: '#0000000a' }}>
            <div className='mt-2 mb-2'>
              <div>
              <h3 className='fw-bold'>7</h3>
                <p>Trip Request</p>
              </div>
            </div>
          </li>
          {/* <li className="list-group-item border-0 rounded-4" style={{ height: 70 + 'px', background: '#0000000a' }}> */}
          <li className="list-group-item border-0 rounded-4" style={{background: '#0000000a' }}>
            <div className='mt-2 mb-2'>
              <div>
              <h3 className='fw-bold'>4</h3>
                <p>Trip Request</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default TripData
