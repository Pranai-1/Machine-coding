import { useState } from "react";

export default function Interests(){
    const [hours, setHours] = useState(0);
    return(
        <div style={{
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px"
        }}>
            <p>Inside of Interests</p>

            <label htmlFor="favourite">Favourite Genre:</label>
            <select id="favourite" name="favourite">
                <option>Comedy</option>
                <option>Sports</option>
                <option>Horror</option>
                <option>Romance</option>
            </select>

            <label htmlFor="contentType">Which form of content you like the most:
            <input id="contentType" name="contentType" type="radio" />short
            <input id="contentType" name="contentType" type="radio" />long
            </label>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>Hours: {hours}</p> {/* Value above the slider */}
            
            <input 
                id="hours" 
                name="hours" 
                type="range" 
                min={0} 
                max={24} 
                value={hours} 
                onChange={(e) => setHours(Number(e.target.value))} 
                style={{ width: "200px" }} // Adjust width as needed
            />
        </div>
        </div>
    )
}