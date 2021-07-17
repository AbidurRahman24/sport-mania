import React, { useState } from 'react';

const Coditional = () => {
    const [friend, setFriend] = useState(false)
    return (
        <div>
            <h3>Am i Your Friend: {friend.toString().toUpperCase()}</h3>
            <button onClick={()=>setFriend(!friend)}>Is friend</button>
            {
                friend ? <p>SHe is my friend</p> : <p>She is not my friend</p>
            }
        </div>
    );
};

export default Coditional;