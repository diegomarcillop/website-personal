import React from 'react';
import './service.css'
function Services() {
    return (
        <div>
            <div className="row services ">
                <div className="col-sm-3 " data-aos="flip-left">
                    <div className="card card-body m-2 service shadow"> 
                         <div className="img-contai">
                         <img src="https://raw.githubusercontent.com/diegomarcillop/portfolio/master/public/img/web.png" width="100%" className="web" alt="" /> 
                         </div>
                        <h1 className="text-center">Web development</h1>
                    </div>
                </div>

                <div className="col-sm-3">
                    <div className="card card-body m-2 service shadow" data-aos="flip-right">
                    <div className="img-contai">
                    <img src="https://raw.githubusercontent.com/diegomarcillop/portfolio/master/public/img/mobile.png" width="100%" className="mobile" alt="" />
                         </div>
                         <h1 className="text-center">Mobile development</h1>
                    </div>
                </div>

                <div className="col-sm-3">

                    <div className="card card-body m-2 service shadow" data-aos="flip-left">
                    <div className="img-contai">
                    <img src="https://raw.githubusercontent.com/diegomarcillop/portfolio/master/public/img/draw.png" className="ux" width="100%" alt="" />
                         </div>
                    
                         <h1 className="text-center">UX/UI design</h1>
                    </div>
                </div>

                <div className="col-sm-3">
                    <div className="card card-body m-2 service shadow" data-aos="flip-right">

                    <div className="img-contain">
                    <img src="https://raw.githubusercontent.com/diegomarcillop/portfolio/master/public/img/media.png" className="mobile" width="100%" alt="" />
                         </div>
                         <h1 className="text-center">Audiovisual production</h1>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Services;