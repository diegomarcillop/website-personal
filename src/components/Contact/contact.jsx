import React from 'react';
import './contact.css'

function Contact() {
    return (
        <div>
            <div className="contact" id="contact">
                <div className="contact-dat ">
                    <div className="row ">
                        <div className="col-sm-6 datos " data-aos="fade-right">
                            <div className="row ">
                                <i className="far fa-envelope-open central-content"></i>
                                <h3> dfmarcillop@gmail.com</h3>
                            </div>
                            <br />
                            <div className="row">
                                <i className="fas fa-phone-alt"></i>
                                <h3>(+57) 310 280 2131</h3>
                            </div>
                            <br />
                            <div className="row">
                                <i className="fas fa-map-marker-alt"></i>
                                <h3>Caqueta, Colombia</h3>
                            </div>
                        </div>
                        <div className="col-sm-6" data-aos="fade-left">
                            <img src="https://raw.githubusercontent.com/diegomarcillop/portfolio/master/public/img/contact.png" className="img-contact"></img>
                        </div>
                    </div>

                    
                </div>

            </div>
        </div>
    )
}

export default Contact;