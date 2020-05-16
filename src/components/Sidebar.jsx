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


const Sidebar = () => {
    return (
        <div className="row ">
            <div className="col-sm-1 aside">
                <div className="row icon">
                    <div  className="col-sm-12" ><BsList/></div>
                </div><br/><br/>
                <div className="row icon">
                    <div className="col-sm-12"><BsLightningFill/></div>
                </div>
                <div className="row icon">
                    <div className="col-sm-12"><BsGem/></div>
                </div>
                <div className="row icon">
                    <div className="col-sm-12"><BsEnvelope/></div>
                </div>
                <div className="row icon">
                    <div className= "col-sm-12"><BsCone/></div>
                </div>
                <div className="row icon">
                    <div className="col-sm-12"><BsCursorFill/></div>
                </div>
                <div className="row icon">
                    <div className="col-sm-12"><BsController/></div>
                </div>
        </div>
                
            
            
            <div className="col-sm-3">
                <div className="row"> 
                    <div className="col-sm-4"></div>
                    <div className="col-sm-8"><small>Abilan</small></div>
                </div><br/>
                <div className="row">
                    <div  className="col-sm-12">
                        <div>Compose Mail</div>
                    </div>
                </div>
                <p> <small>Folders</small> </p>
                <div className="row"> 
                    <div className="col-sm-6"><BsEnvelopeFill/></div>
                    <div className="col-sm-6"><small>Inbox</small></div>
                </div><br/>
                <div className="row"> 
                    <div className="col-sm-6"><BsCursorFill/></div>
                    <div className="col-sm-6"><small>Send Mail</small></div>
                </div><br/>
                <div className="row"> 
                    <div className="col-sm-6"><BsFillStarFill/></div>
                    <div className="col-sm-6"><small>Important</small></div>
                </div><br/>
                <div className="row"> 
                    <div className="col-sm-6"><BsFillEnvelopeOpenFill/></div>
                    <div className="col-sm-6"><small>Draft</small></div>
                </div><br/>
                <div className="row"> 
                    <div className="col-sm-6"><FaPoo/></div>
                    <div className="col-sm-6"><small>Spam</small></div>
                </div><br/>
                <div className="row"> 
                    <div className="col-sm-6"><BsTrash/></div>
                    <div className="col-sm-6"><small>Trash</small></div>
                </div><br/><br/>
                <p><small>Online friend</small></p><br/>
                <div className="row"> 
                    <div className="col-sm-6">
                        <FcBusinesswoman/>  
                    </div>
                    <div className="col-sm-6"><small>Don Allen</small></div>
                </div><br/>
                <div className="row"> 
                    <div className="col-sm-6"><FcBusinesswoman/></div>
                    <div className="col-sm-6"><small>Aaron Gonzalez</small></div>
                </div><br/>
                <div className="row"> 
                    <div className="col-sm-6"><FcBusinessman/></div>
                    <div className="col-sm-6"><small>Timothy Johnson</small></div>
                </div><br/>
                <p><small>Labels</small></p><br/>
                <div className="row"> 
                    <div className="col-sm-8">
                        <div></div>
                    </div>
                    <div className="col-sm-4">
                       <div></div>
                    </div>
                </div><br/>
                <div className="row"> 
                    <div className="col-sm-4">
                       <div></div>
                    </div>
                    <div className="col-sm-8">
                       <div></div>
                    </div>
                </div><br/>

            </div>
    
        </div>

    
    )
}

export default Sidebar
