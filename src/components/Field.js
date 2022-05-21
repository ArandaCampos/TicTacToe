import { useState } from "react"

function Field({player}){

    const [field, setField] = useState('')

    function play(){
        if (!field){
            setField(player)
        } 
    }

    return(
        <>
            <button onClick={play}>{field}</button>
        </>
    )
}

export default Field