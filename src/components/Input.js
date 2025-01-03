import React, { useState, useRef } from "react";

export default function Input({setIpAddress, setCoordinates}) {

    const inputRef = useRef();
    const [input, setInput] = useState('');

    const handleInputChange = (event) => {
        
        event.preventDefault();
        const NewIpAddress = inputRef.current.value.trim();
        if (NewIpAddress) {
            setIpAddress(NewIpAddress);
        }
    }

    return (
        <form
            className="z-10 flex items-center justify-center w-2/3 h-12 mx-auto bg-white rounded-lg shadow-lg"
            onSubmit={handleInputChange}
            method="post"
        >
            <input
                className="w-4/5 h-12 px-4 text-gray-600 bg-white rounded-l-lg" 
                type="text"
                placeholder="Search for any IP address"
                ref={inputRef}
                name="ipAddress"
            />
            <button className="w-1/5 h-full text-white bg-black rounded-r-lg" type="submit">Go</button>
            
        </form>
    )
}