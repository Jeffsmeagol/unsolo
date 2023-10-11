import { rgbToHex } from '@mui/material'
import React from 'react'
// import './PopularVisits.css'

function PopularVisits() {
  return (
    <div className='PopularVisits'>
      <div className='row'>
        <div className='d-inline-block col-4'>
          <div id="carouselExampleSlidesOnly" className="carousel slide rounded-4" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active rounded-4">
                <img
                  src="https://lh3.googleusercontent.com/drive-viewer/AK7aPaBnJqO-1xZrha10NgJwUdisdzl6YCVvu3F8A_QZpQI-ZazbIumXVIRfzAeM963QA6X7L5AssrL6G6ra7VsDipDZAYRl6w=s1600"
                  className="d-block w-100 rounded-4"
                  alt="miami"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className='fw-normal lh-1 d-flex align-items-start'>Miami, USA</h5>
                  <p className='fw-light fs-6 lh-1 d-flex align-items-start'>
                  <i className="fa-solid fa-map-location-dot me-1"></i>
                    500 travels
                  </p>
                </div>
              </div>
              <div className="carousel-item rounded-4">
                <img
                  src="https://lh3.googleusercontent.com/drive-viewer/AK7aPaAeN8Q0DkZ1HrHsk2fJNdqZBRFGtSc7NCKwdT5urYrZiaKLodOlNz05s4Xx8J3cpjoiMXMp6AnAD3SYGWoZWsu387if=s1600"
                  className="d-block w-100 rounded-4"
                  alt="accra"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className='fw-normal lh-1 d-flex align-items-start'>Accra, Ghana</h5>
                  <p className='fw-light fs-6 lh-1 d-flex align-items-start'>
                  <i className="fa-solid fa-map-location-dot me-1"></i>
                    135 travels
                  </p>
                </div>
              </div>
              <div className="carousel-item rounded-4">
                <img
                  src="https://lh3.googleusercontent.com/drive-viewer/AK7aPaB_aGyEOMWfKRlfrVOwVCCvIiImbi1eluc0zNGdArSZP8jCPZh-RiBoci4h4CrfQold8Q5aMAmuvjoP6qwFt5Wot5IP=s1600"
                  className="d-block w-100 rounded-4"
                  alt="lisbon"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className='fw-normal lh-1 d-flex align-items-start'>Lisbon, Portugal</h5>
                  <p className='fw-light fs-6 lh-1 d-flex align-items-start'>
                  <i className="fa-solid fa-map-location-dot me-1"></i>
                    500 travels
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='d-inline-block col-4'>
          <div id="carouselExampleSlidesOnly" className="carousel slide rounded-4" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active rounded-4">
                <img
                  src="https://lh3.googleusercontent.com/drive-viewer/AK7aPaDG10TACoKmup7lkOws95wQZcvjqYFVgGM5cg_ZNf1UEKW5ySHIdfL-CL0H9TsGKj047ificS8-aXVQxBRlHuXCki4alA=s1600"
                  className="d-block w-100 rounded-4"
                  alt="abuja"
                />
                {/* <div className="carousel-caption d-none d-md-block" style={{background: '#00000033', padding: 2 + 'px'}}> */}
                <div className="carousel-caption d-none d-md-block" style={{color: 'black', background: '#00000033'}}>
                  <h5 className='fw-normal lh-1 d-flex align-items-start'>Abuja, Nigeria</h5>
                  <p className='fw-light fs-6 lh-1 d-flex align-items-start'>
                  <i className="fa-solid fa-map-location-dot me-1"></i>
                    167 travels
                  </p>
                </div>
              </div>
              <div className="carousel-item rounded-4">
                <img
                  src="https://lh3.googleusercontent.com/drive-viewer/AK7aPaB6cU0ZJkJ0lEkrRxcF3YoDBIkQS2FfDhA6OYUrOCldgf-Kf_IOBtHzefuvVkB1nCyxh55feqUZxpikv49ynzacSxxRCw=s1600"
                  className="d-block w-100 rounded-4"
                  alt="santorini"
                />
                {/* <div className="carousel-caption d-none d-md-block" style={{top: 20 + 'px', bottom: 'auto', background: '#00000033', padding: 2 + 'px'}}> */}
                <div className="carousel-caption d-none d-md-block" style={{color:'black', background: '#00000033'}}>
                  <h5 className='fw-normal lh-1 d-flex align-items-start'>Santorini, Greece</h5>
                  <p className='fw-light fs-6 lh-1 d-flex align-items-start'>
                  <i className="fa-solid fa-map-location-dot me-1"></i>
                    422 travels
                  </p>
                </div>
              </div>
              <div className="carousel-item rounded-4">
                <img
                  src="https://lh3.googleusercontent.com/drive-viewer/AK7aPaDmQk5-KdahrsW_p81swaUdc8t-iwGkKvILcMFvDYyj0mF3S3JQWLu2yfl23y45YVfZjy26UjgraQSnotcbfzqrpjgG1Q=s1600"
                  className="d-block w-100 rounded-4"
                  alt="berlin"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className='fw-normal lh-1 d-flex align-items-start'>Berlin, Germany</h5>
                  <p className='fw-light fs-6 lh-1 d-flex align-items-start'>
                  <i className="fa-solid fa-map-location-dot me-1"></i>
                    410 travels
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='d-inline-block col-4'>
          <div id="carouselExampleSlidesOnly" className="carousel slide rounded-4" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active rounded-4">
                <img
                  src="https://lh3.googleusercontent.com/drive-viewer/AK7aPaCbfCQlwnh0lSp3vNVg6iXjlEsppnMOG4hEAmIs_UwMJDx7PGkr4bEu1otHZaWbJtc1NZDtVYIoBMrlu3K53gSppQHDAQ=s1600"
                  className="d-block w-100 rounded-4"
                  alt="trondheim"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className='fw-normal lh-1 d-flex align-items-start'>Trondheim, Norway</h5>
                  <p className='fw-light fs-6 lh-1 d-flex align-items-start'>
                  <i className="fa-solid fa-map-location-dot me-1"></i>
                    235 travels
                  </p>
                </div>
              </div>
              <div className="carousel-item rounded-4">
                <img
                  src="https://lh3.googleusercontent.com/drive-viewer/AK7aPaC96qn8TWkcI6qZZrRPq43nGF8VdQoN9GDTL4KDzxw0DTW4_FhTlLpwbU1-dNJOfSc-gHkyD9ClN4AM6HahHGq5yPJJog=s1600"
                  className="d-block w-100 rounded-4"
                  alt="johannesburg"
                />
                {/* <div className="carousel-caption d-none d-md-block" style={{background: '#00000033', padding: 2 + 'px'}}> */}
                <div className="carousel-caption d-none d-md-block" style={{background: '#00000033', padding: 2 + 'px'}}>
                  <h6 className='fw-normal lh-1 d-flex align-items-start'>Johannesburg, South Africa</h6>
                  <p className='fw-light fs-6 lh-1 d-flex align-items-start'>
                  <i className="fa-solid fa-map-location-dot me-1"></i>
                    523 travels
                  </p>
                </div>
              </div>
              <div className="carousel-item rounded-4">
                <img
                  src="https://lh3.googleusercontent.com/drive-viewer/AK7aPaDqxIJN0j6-DrIZuNwb1YfO80HwCTXibSj2BDwcPRU3Em4XfK_pVUxOtKLnhPUJDZ_zCtujLvptTsEXuYkPtPH1r8K6pQ=s1600"
                  className="d-block w-100 rounded-4"
                  alt="cairo"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className='fw-normal lh-1 d-flex align-items-start'>Cairo, Egypt</h5>
                  <p className='fw-light fs-6 lh-1 d-flex align-items-start'>
                  <i className="fa-solid fa-map-location-dot me-1"></i>
                    128 travels
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopularVisits
