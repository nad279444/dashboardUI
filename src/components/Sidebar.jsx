import React from 'react'
import { BsList } from "react-icons/bs"
import { BsLightningFill } from "react-icons/bs"
import { BsEnvelope } from "react-icons/bs"
import { BsCone } from "react-icons/bs"
import { BsCursorFill} from "react-icons/bs"
import { BsController } from "react-icons/bs"
import { BsGem } from "react-icons/bs"
import { BsEnvelopeFill } from "react-icons/bs"
import { BsFillStarFill } from "react-icons/bs"
import { BsFillEnvelopeOpenFill } from "react-icons/bs"
import { FaPoo } from "react-icons/fa"
import { BsTrash } from "react-icons/bs"
import { FcBusinesswoman } from 'react-icons/fc'
import {FcBusinessman} from "react-icons/fc"
import {AiOutlinePlus} from "react-icons/ai"


const Sidebar = () => {
    return (
        <div className="row line">
            <div className="col-sm-2 aside">
                <div className="row ">
                    <div  className="col-sm-12 icon" ><BsList/></div>
                </div><br/><br/>
                <div className="row ">
                    <div className="col-sm-12  icon"><BsLightningFill/></div>
                </div>
                <div className="row ">
                    <div className="col-sm-12 icon "><BsGem/></div>
                </div>
                <div className="row icon">
                    <div className="col-sm-12 icon"><BsEnvelope/></div>
                </div>
                <div className="row icon">
                    <div className= "col-sm-12 icon"><BsCone/></div>
                </div>
                <div className="row icon">
                    <div className="col-sm-12 icon"><BsCursorFill/></div>
                </div>
                <div className="row icon">
                    <div className="col-sm-12 icon"><BsController/></div>
                </div>
        </div>
                
            
            
            <div className="col-sm-10 ">
                <div className="row"> 
                    <div className="col-sm-2"></div>
                    <div className="col-sm-10"><small>Abilan</small></div>
                </div><br/>
                <div className="row">
                    <div  className="col-sm-2"></div> 
                    <div  className="col-sm-8 box1">
                        <div className="text-center"> <AiOutlinePlus size="20px"/>Compose Mail</div>
                    </div>
                    <div  className="col-sm-2"></div>          
                </div>
                <p> <small>Folders</small> </p>
                <div className="row"> 
                    <div className="col-sm-2"><BsEnvelopeFill/></div>
                    <div className="col-sm-10"><small>Inbox</small></div>
                </div><br/>
                <div className="row"> 
                    <div className="col-sm-2"><BsCursorFill/></div>
                    <div className="col-sm-10"><small>Send Mail</small></div>
                </div><br/>
                <div className="row"> 
                    <div className="col-sm-2"><BsFillStarFill/></div>
                    <div className="col-sm-10"><small>Important</small></div>
                </div><br/>
                <div className="row"> 
                    <div className="col-sm-2"><BsFillEnvelopeOpenFill/></div>
                    <div className="col-sm-10"><small>Draft</small></div>
                </div><br/>
                <div className="row"> 
                    <div className="col-sm-2"><FaPoo/></div>
                    <div className="col-sm-10"><small>Spam</small></div>
                </div><br/>
                <div className="row"> 
                    <div className="col-sm-2"><BsTrash/></div>
                    <div className="col-sm-10"><small>Trash</small></div>
                </div><br/><br/>
                <p><small>Online friend</small></p><br/>
                <div className="row"> 
                    <div className="col-sm-2">
                        <FcBusinesswoman/>  
                    </div>
                    <div className="col-sm-10"><small>Don Allen</small></div>
                </div><br/>
                <div className="row"> 
                    <div className="col-sm-2"><FcBusinesswoman/></div>
                    <div className="col-sm-10"><small>Aaron Gonzalez</small></div>
                </div><br/>
                <div className="row"> 
                    <div className="col-sm-2"><FcBusinessman/></div>
                    <div className="col-sm-10"><small>Timothy Johnson</small></div>
                </div><br/>
                <p><small>Labels</small></p><br/>
                <div className="row"> 
                    <div className="col-sm-4 box2">
                        <div><small>important</small></div>
                    </div>
                    <div className="col-sm-3 box3">
                       <div><small>New</small></div>
                    </div>
                </div><br/>
                <div className="row"> 
                    <div className="col-sm-3 box3">
                       <div><small>Old</small></div>
                    </div>
                    <div className="col-sm-4 box2">
                       <div><small>Priority</small></div>
                    </div>
                </div><br/>

            </div>
    
        </div>

    
    )
}

export default Sidebar
