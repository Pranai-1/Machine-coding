export default function Settings(){
    return(
        <div style={{
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px"
        }}>
            <p>Inside of Settings</p>

            <label htmlFor="theme">Theme:
           <input id="theme" name="theme" type="radio"/>Light
           <input id="theme" name="theme" type="radio"/>Dark
           </label>

            <label htmlFor="privacy">Account Privacy</label>
            <select id="privacy" name="privacy">
                <option>Public</option>
                <option >Private</option>
            </select>
            <label htmlFor="consent">I have read terms and conditions
            <input id="consent" name="consent" type="checkbox" required/>
            </label>
            <input type="submit"/>
        </div>
    )
}