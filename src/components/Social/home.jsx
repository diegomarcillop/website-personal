import React from 'react';
import './home.css'
function Home() {
  return (
    <div className="parallax central-content">
      <div className="col-sm-12">
        <h1 className="text-center title1 animated bounceInDown  ">Hi, I am Diego</h1>
      </div>
      <div className="col-sm-5 central-content">
        <hr />
        <h2 className="text-center  animated bounceInLeft ">full stack developer</h2>
        <div className="social central-content">
          <div className="row">
            <div className="col-sm-12">

              <a target="_black" href="https://www.behance.net/dfmarcillopinzon">
                <i class="fab fa-behance" />
              </a>
              <a href="https://github.com/diegomarcillop" target="_black">
                <i class="fab fa-github"></i>
              </a>

              <a href="https://www.linkedin.com/in/diegomarcillop/" target="_black">
                <i class="fab fa-linkedin-in"></i>
              </a>

              <a href="https://www.instagram.com/diegomarcillop/" target="_black">
                <i class="fab fa-instagram"></i>
              </a>


            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Home;