import React from 'react';
import './about.css'
function About() {
    return (
        <div className="about w-100" >
            <div className="container"  >
               <div className="card-body" id="about">
               <div className="row ">
                    <div className="col-sm-6">
                        <img src="https://raw.githubusercontent.com/diegomarcillop/portfolio/master/public/img/perfil.jpg"  className="img-profile shadow-sm rounded-circle  " data-aos="fade-down-right" alt="" />
                    </div>
                    <div className="col-sm-6">
                        <div className="m-5 ">
                            <h2>About</h2>
                            <p>I am an enterprising, visionary, creative man, committed to what I do, helpful and with a social sense, I like to be in a constant learning, I use my knowledge to contribute and collaborate in the place where I provide my services, with an attitude of Working in an orderly manner and with the best practices, I feel able to take on great challenges.
                       </p>
                        </div>

                    </div>
                </div>
               </div>
            </div>
        </div>
    )
}
export default About;