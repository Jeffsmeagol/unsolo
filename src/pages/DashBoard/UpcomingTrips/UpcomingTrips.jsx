import React from 'react'

function UpcomingTrips() {
  //style={{width: 50 + '%', height: 100 + 'px'}}
  return (
    <div>
      <div className=''>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        {/* style={{ width: 500 + 'px', height: 200 + 'px' }} */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://lh3.googleusercontent.com/drive-viewer/AK7aPaB4MLlJAvXnRU7lX2dX9jGY2DNCcGm9NatObjOIeb_BaMRhiH9MlEQvvbl8kSlL-F_Wv9gKUzaKxu3qgYij-l3d5EFatg=s1600"
                className="d-block w-100 img-responsive"
                alt="view trips"
              />
              <div className="carousel-caption d-none d-md-block">
                <h2 className='fw-bold lh-1 d-flex align-items-start'>Upcoming Trips</h2>
                <p className='fw-normal lh-1 d-flex align-items-start'>View upcoming trips that might interest you.</p>
                <button type="button" className="btn btn-outline-light mt-5 pb-0 d-flex align-items-start"><h6>View Trips</h6></button>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://lh3.googleusercontent.com/drive-viewer/AK7aPaCnLI7eX0MffrsnAlz79uqbivUG5mTKddOq2z1A1ixxHcE4X9i8h6AJzmHhEhNJIq5KqBHrxj2hu3eGAWsUJUlZszMmuw=s1600"
                className="d-block w-100 img-responsive"
                alt="find buddies"
              />
              <div className="carousel-caption d-none d-md-block">
                <h2 className='fw-bold lh-1 d-flex align-items-start'>Mingle</h2>
                <p className='fw-normal lh-1 d-flex align-items-start'>Connect with other travellers around the world.</p>
                <button type="button" className="btn btn-outline-light mt-5 pb-0 d-flex align-items-start"><h6>Find Buddies</h6></button>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://lh3.googleusercontent.com/drive-viewer/AK7aPaC6FFtrM1l_bufEUgYHW0LwKRFX9A43wlF3csgomUxPn7A0ObP6q-Poy6igrPZ9ZlkIded8o6hlakwfoZRYwVwrirXnbQ=s1600"
                className="d-block w-100 img-responsive"
                alt="bookings"
              />
              <div className="carousel-caption d-none d-md-block">
                <h2 className='fw-bold lh-1 d-flex align-items-start'>Reservations</h2>
                <p className='fw-normal lh-1 d-flex align-items-start'>Travel around the globe with immense convenience.</p>
                <button type="button" className="btn btn-outline-light mt-5 pb-0 d-flex align-items-start"><h6>See Bookings</h6></button>
              </div>
            </div>
          </div>
          {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button> */}
        </div>
      </div>
    </div>
  )
}

export default UpcomingTrips
