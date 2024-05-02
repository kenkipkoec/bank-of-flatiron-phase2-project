import { useState } from "react";

function Fillter({search, handleUpdate}) {
    return (<>
        <div>
            <input 
            type="text"
             placeholder="search transactions" 
             value={search} 
             onChange={(e) => handleUpdate(e.target.value)}
             />
        </div>

    </>);
}

export default Fillter;