import React from "react"


export default function MatchingCard({header , items}){
    const Header ={
        color: "black",
        backgroundColor: "#BBD95C",
        fontWeight: "bold",
        width: '100%',
        height: '50px',
        flexStart:'start',
        alignText:"bottom"
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

    console.log(items)
    return(
    <div style={Container} >
        <div style={Header} >{header}</div>

            {
                items.map((value, index) => {
                    return <div style={GreyCards} key={index}> 
                        {value[0]} 
                        <div> {value[1]} </div> 
                        <div> {value[2]} </div>
                        <div> {value[3]} </div>
                    </div>
                })
            }
    </div>
    )
}