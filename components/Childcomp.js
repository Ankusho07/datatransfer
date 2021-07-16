import React from 'react'

function Childcomp(props) {   
    return (
        <div>
             
        <button onClick={()=>props.greethandler('Info-Axon')} >React-training</button>  
        </div>
    )
}

export default Childcomp
