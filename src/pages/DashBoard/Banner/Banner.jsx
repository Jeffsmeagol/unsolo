import React from 'react'

function Banner() {
  return (
    <div>
      <div className='container-fluid'>
        <div className='row mx-2 my-3'>
          <div className='col d-flex justify-content-between'>
            <div>
              <p className='d-inline-block mx-2'>
                Welcome Oluwaseun
              </p>
              <div className="vr"></div>
              <p className='d-inline-block mx-2'>
                Friday, 22nd September, 2023.
              </p>
            </div>
            
            {/* <div>
              <div className='d-inline-block mx-2'>
                <i className="fa-regular fa-bell" style={{ color: '#545f73' }}></i>
              </div>
              <div className="vr"></div>
              <div className='d-inline-block mx-2'>
                <i className="fa-regular fa-flag ms-1 me-2" style={{ color: '#545f73' }}></i>
                Nigeria
                <button type="button" className="btn btn-secondary ms-2">Light</button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
