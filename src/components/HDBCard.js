import React, { useState } from "react"
import HDBModal from "../components/HDBModal"
import { faCheckCircle, faTimesCircle, faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BeneficiaryCard({header , items, clientName}){
    const [status, showModal] = useState(false)


    const Header ={
        color: "black",
        backgroundColor: "#BBD95C",
        fontWeight: "bold",
        width: '100%',
        height: '50px',
        flexStart:'start',
        flexDirection: "row",
        display: "flex",
        justifyContent: 'space-between',
        verticalAlign:'middle',
        alignItems:'center'
    }

    const Container = {
        padding: "15px",
        display: "flex",
        margin: '10px',
        marginRight: '20px',
        marignLeft: '20px',
        flexDirection:"column"
    }

    const GreyCards ={
        backgroundColor: '#F4F4F4',
        marginTop: '15px',
        borderRadius: '10px',
        padding: '10px',
        justifyContent:'space-between',
        flexDirection:'row',
        display:'flex'
    }

    const changeModal = () =>{
        showModal(!status)
        console.log("HIT", status)
    }

    const HDB_DICT = {1:"Eligibility", 2:"Document Approval", 3:"Matching with Tenant", 4:"Allocation of HDB Unit", 5:"Key Collection"}

    const icon = (text) =>{
        if(text == "Completed"){
            return <FontAwesomeIcon icon={faCheckCircle} style={{color:'green'}} size='2.5x' /> 
        } else if (text == "Pending"){
            return <FontAwesomeIcon icon={faStopwatch} style={{color:'#f5c542'}} size='2.5x' /> 
        } else {
            return   <FontAwesomeIcon icon={faTimesCircle} style={{color:'red'}}  size='2.5x'  /> 
        }
    }

    return(
    <div style={Container} >

        <div style={Header} >

        <div style={{verticalAlign:'middle', display:'table-cell', marginLeft:'10px'}}>
                {header}
            </div>
            
           

        {status ? <HDBModal setShowModal={showModal}  clientName={clientName} items={items}  /> : null }
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40 my-1 mx-1 " onClick={changeModal} >
                Update Status
            </button>
        </div>            
            {
                Object.keys(items).map((value, index) => {

                    return <div style={GreyCards} key={index}> 

                    <div>
                    <label>
                        {value + ". " }
                    </label>
                        {HDB_DICT[value]}  
                    </div>
   
                    <div>
                        {icon(items[value])}
                    </div>

                    </div>
                })
            }
    </div>
    )
}

