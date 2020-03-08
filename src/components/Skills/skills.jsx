import React from 'react';
import './skills.css'
import Services from '../Services/Services';
function Skill() {
    return (
        <div className="" id="skills">
            <Services />
            <div className="skills-1 central-content"  >
                <div className="container ">
                    <div className=" skills">
                        <div className="  row sk">
                            <div className="col-sm-6"   >
                                <ul>
                                    <li className="html">HTML</li>
                                    <li className="css">CSS</li>
                                    <li className="js">JavaScript</li> 
                                </ul>
                            </div> 
                            <div className="col-sm-6">
                                <ul>
                                    <li className="node">NodeJS</li>
                                    <li className="react">ReactJS</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skill;