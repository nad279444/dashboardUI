import React from 'react'
import { BsEnvelope, BsSquare, BsStarFill } from "react-icons/bs"
import { BsBellFill,BsTrash } from "react-icons/bs"
import { FcGlobe, FcAndroidOs,FcUpLeft } from "react-icons/fc"
import {FcBusinessman,FcBusinesswoman} from "react-icons/fc"
import {FaSearchengin} from "react-icons/fa"
import { AiOutlinePaperClip } from 'react-icons/ai'
import {GrPrevious} from "react-icons/gr"
import {GrNext} from "react-icons/gr"
import Luka from "../luka.jpg"

const MainContent = () => {
    return (
        <div>
         <div className="row">
            <div className="col-sm-2">Inbox</div> 
            <div className="col-sm-4"></div> 
            <div className="col-sm-4">
                <span><BsBellFill/> </span>
                <span><BsEnvelope/> </span>
                <span><FcGlobe/> </span><span><small>English</small></span>
        
            </div>
            <div className="col-sm-2"><FcBusinessman/><small>Larry Nunez</small></div>     
        </div><hr/>
        <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-2"></div> 
            <div className="col-sm-6">
            <div className="input-group">
			 <input type="text" className="form-control" placeholder="Search Here"/><FaSearchengin/>
             
		   </div>
            </div>
            <div className="col-sm-2">
               <GrPrevious/>
               <GrNext/> 
            </div>     
        </div>
        <div className="row">
            <div className="col-sm-3">
                <div className="row">
                    <div className="col-sm-12 sidebox">
                        <span className="man"><FcBusinessman/> <small>Luis Aikens</small></span>
                        <p><small>How to write clean code baby!!</small></p>
                        <div className="row">
                            <div className="col-sm-8">
                                <BsSquare size="15px"/>  
                                <BsStarFill size="15px" color="yellow"/>  
                                <AiOutlinePaperClip size="15px"/> 
                            </div>
                            <div className="col-sm-4"><small>8:30AM</small></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                <div className="col-sm-12 sidebox">
                        <span className="man"><FcBusinessman/> <small>Luis Aikens</small></span>
                        <p><small>Refactoring knowledge is essential</small></p>
                        <div className="row">
                            <div className="col-sm-8">
                                <BsSquare size="15px"/>  
                                <BsStarFill size="15px" color="yellow"/>  
                                <AiOutlinePaperClip size="15px"/> 
                            </div>
                            <div className="col-sm-4"><small>8:30AM</small></div>
                        </div>
                    </div>

                
                </div>
                <div className="row">
                <div className="col-sm-12 sidebox">
                        <span className="man"><FcBusinessman/> <small>Reginald Mensah</small></span>
                        <p><small>deno might overthrow node</small></p>
                        <div className="row">
                            <div className="col-sm-8">
                                <BsSquare size="15px"/>  
                                <BsStarFill size="15px" color="yellow"/>  
                                <AiOutlinePaperClip size="15px"/> 
                            </div>
                            <div className="col-sm-4"><small>8:30AM</small></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                <div className="col-sm-12 sidebox">
                        <span className="man"><FcBusinesswoman/> <small>janet james</small></span>
                        <p><small>How to stop viruses</small></p>
                        <div className="row">
                            <div className="col-sm-8">
                                <BsSquare size="15px"/>  
                                <BsStarFill size="15px" color="yellow"/>  
                                <AiOutlinePaperClip size="15px"/> 
                            </div>
                            <div className="col-sm-4"><small>8:30AM</small></div>
                        </div>
                    </div>

                    
                </div>
            </div>
            <div className="col-sm-7 bigbox">
                <div className="row">
                    <div className="col-sm-8">
                        <p><b>Object oriented programming is dead !!</b></p>
                    </div>
                    <div className="col-sm-4">
                        <FcUpLeft color="indigo"/>
                        <FcAndroidOs color="blue"/>
                        <BsTrash color="red"/>
                    </div>
                </div> 
                <p><small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis excepturi, dolorem adipisci velit illum ut voluptatem dolor delectus quas nulla! Esse quaerat fuga harum, sed voluptatibus voluptatem labore facere similique.</small></p>
                <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem at quaerat ratione officiis exercitationem rerum sit repellendus illum, consequatur eos nostrum consequuntur iusto unde itaque neque vero recusandae alias cupiditate.</small></p>
                <div className="row">
                    <div className="col-sm-12">
                        <small>Attachment (80MB)<span className="mini">View</span><span className="bigi"> Download All</span></small>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2 minibox"><img src={Luka} alt=""/></div>
                    <div className="col-sm-2 minibox"><img src={Luka} alt=""/></div>
                    <div className="col-sm-2 minibox"><img src={Luka} alt=""/></div>
                    <div className="col-sm-2 minibox"><img src={Luka} alt=""/></div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                       <small> <span className="minx">Reply</span><span className="bigx"> Forward</span></small>
                    </div>
                </div>  
            </div>       
        </div>
        </div>
    )
}

export default MainContent
