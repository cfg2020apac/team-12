import React, { useState } from "react"
import Modal from "../components/Modal"


export default function BeneficiaryCard({header , items}){
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
        padding: '10px'
    }

    const changeModal = () =>{
        showModal(!status)
        console.log("HIT", status)
    }

    return(
    <div style={Container} >

        <div style={Header} >

            <div style={{verticalAlign:'middle', display:'table-cell'}}>
                {header}
            </div>
            
           

        {status ? <Modal setShowModal={showModal}  items={items} /> : null }
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40 my-1 mx-1 " onClick={changeModal} >
                Add Post
            </button>
        </div>
   
            
            {
                items.map((value, index) => {
                    return <div style={GreyCards} key={index}> 
                        Date: {value[0]} 
                        <div> <strong>{value[1]}</strong> </div> 
                        <div> {value[2]} </div>
                    </div>
                })
            }
    </div>
    )
}

