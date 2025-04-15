export default function Profile() {
    return (
        <div style={{
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px"
        }}>
            <p>Inside of profile</p>

            <label htmlFor="name">Username</label>
            <input id="name" name="name" type="text" 
                placeholder="Enter your name..." 
                maxLength={12} minLength={4} required />

            <label htmlFor="email">Email:</label>
            <input id="email" name="email" type="email" 
                placeholder="Enter your email..." 
                maxLength={32} minLength={12} required />

            <label htmlFor="age">Age:</label>
            <input id="age" name="age" type="number" 
                placeholder="Enter your age..." 
                min={13} required />
        </div>
    );
}
