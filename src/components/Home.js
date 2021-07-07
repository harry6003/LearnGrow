import React from 'react'
import Navbar from './Navbar'

export default function Home() {
  return (
    <div>
    <Navbar/>
         <div className="home-container">
            <div className="header">
               <div className="img-content">
                <h2>Take the first step to learn with us.</h2>
                <h3>Click here to get the best learning experience.</h3>
                <a href='/Classroom' className="btn button">Get Started</a>
            </div>
            </div>


            <section class="white-section row" id="features">
      <div class="col-lg-4 feature-column">
        <i class="fas fa-check-circle feature-icon fa-4x"></i>
        <h3 class="feature-title">Easy to learn.</h3>
        <p class="feature-p">Soo easy to use and understand.</p>
      </div>
      <div class="col-lg-4 feature-column">
        <i class="fas fa-bullseye feature-icon fa-4x"></i>
        <h3 class="feature-title">Free to use.</h3>
        <p class="feature-p">All content available at free of cost.</p>
      </div>
      <div class="col-lg-4 feature-column">
        <i class="fas fa-heart feature-icon fa-4x"></i>
        <h3 class="feature-title">Easily accessible.</h3>
        <p class="feature-p">You can access contents anytime and anywhere.</p>
      </div>
  </section>

  <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner cros">
    <div className="carousel-item active" data-bs-interval="2000">
      <img src="https://chronicle.brightspotcdn.com/89/f6/3de7e4a3bdd9a9e00ae13422c313/online-teaching.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://images.unsplash.com/photo-1513258496099-48168024aec0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8b25saW5lJTIwbGVhcm5pbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://images.unsplash.com/photo-1584697964358-3e14ca57658b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8b25saW5lJTIwbGVhcm5pbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon cros-btn" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon cros btn" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
 </div>
            </div>
    </div>
  )
}
