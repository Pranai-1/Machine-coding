import { useState } from "react"
import Profile from "./components/tabForm/Profile"
import Interests from "./components/tabForm/Interests"
import Settings from "./components/tabForm/Settings"

const renderObject={
    Profile:<Profile/>,
    Interests:<Interests/>,
    Settings:<Settings/>,
}

type StateType="Profile" | "Interests" | "Settings"

export default function TabFormComponent(){

    const[state,setState]=useState<StateType>("Profile")

     function handleSubmit(event:any){
        event.preventDefault()
        console.log(event)
     }

    return(
        <div className="homeDiv">
        <p>Welcome</p>
        <div className="progressBar">
            <span className="barText" onClick={()=>setState("Profile")}>Profile</span>
            <span className="barText" onClick={()=>setState("Interests")}>Interests</span>
            <span className="barText" style={{border:"none"}} onClick={()=>setState("Settings")}>Settings</span>
        </div>

        <form onSubmit={handleSubmit}>
            {renderObject[state]}
        </form>
        </div>
    )
}