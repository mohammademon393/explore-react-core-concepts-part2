import { useState } from "react"

export default function Team () {

    const [team, setTeam] = useState (11);

    const hendkeAdd=()=>{
        const newTeam= team+1;
        setTeam(newTeam);
    }

    const hendkeRemove=()=>{
        
        setTeam(team-1)
    }

    const teamStyels = {
        border : '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }

    return (
        <div style={teamStyels}>
            <h3>Players: {team} </h3>
            <button onClick={hendkeAdd}>Add</button>
            <button onClick={hendkeRemove}>Remove</button>
        </div>
    )
}