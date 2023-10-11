import React from 'react'

function LocationImage() {
  return (
    <div>
      <div className="card text-bg-dark rounded-4 bg-transparent">
        <div>
          <img
            src="https://media.istockphoto.com/id/1309800132/photo/dubai-skyline-view-from-the-marasi-marina-in-city-business-bay-downtown-area-in-the-uae.jpg?s=2048x2048&w=is&k=20&c=V4BcklcU3AYCyeJcNkKOMzF1Qo-DK-AHlgmgOJ02VQE="
            className="card-img rounded-4"
            alt="..."
            height="300"
          />
        </div>
        <div className="card-img-overlay mb-0">
          <h5 className="card-title">Place, Location</h5>
          <p className="card-text">This should be just random text or description about Place, Location. Place, Location details</p>
          <p className="card-text"><small>Visited 5 Times this year // Most Visited Place  // Popular Location</small></p>
        </div>
      </div>
    </div>
  )
}

export default LocationImage
