import React from 'react'
import { BsEnvelope } from "react-icons/bs"
import { BsBellFill } from "react-icons/bs"
import { FcGlobe } from "react-icons/fc"
import {FcBusinessman} from "react-icons/fc"
import {FaSearchengin} from "react-icons/fa"
const MainContent = () => {
    return (
        <div>
         <div className="row">
            <div className="col-sm-2">Inbox</div> 
            <div className="col-sm-6"></div> 
            <div className="col-sm-2">
                <BsBellFill/>
                <BsEnvelope/>
                <FcGlobe/><small>English</small>
            </div>
            <div className="col-sm-2"><FcBusinessman/><small>Larry Nunez</small></div>     
        </div>
        <div className="row">
            <div className="col-sm-2">1</div>
            <div className="col-sm-2">2</div> 
            <div className="col-sm-4">
            <div className="input-group">
				<input type="text" className="form-control"/>
				      <span className="input-group-btn">
				        <button className="btn btn-default" type="button"><FaSearchengin/></button>
				      </span>
		   </div>
            </div>
            <div className="col-sm-4">4</div>     
        </div>
        <div className="row">
            <div className="col-sm-4">
                <div className="row">
                    <div className="col-sm-12">1</div>
                </div>
                <div className="row">
                    <div className="col-sm-12">2</div>
                </div>
                <div className="row">
                    <div className="col-sm-12">3</div>
                </div>
                <div className="row">
                    <div className="col-sm-12">4</div>
                </div>
            </div>
            <div className="col-sm-8">
                <div className="row">
                    <div className="col-sm-8">title</div>
                    <div className="col-sm-4">icon</div>
                </div>  
            </div>       
        </div>
        </div>
    )
}

export default MainContent
