import React from "react";
import { useState, useEffect } from "react";
import "./style.css";
import Map from "./components/Map";
import Info from "./components/Info";
import Input from "./components/Input";

export default function App() {

    const [ipAddress, setIpAddress] = useState('');
    const [coordinates, setCoordinates] = useState([45.4685, 9.1824]);
    const [markerCoordinates, setMarkerCoordinates] = useState(coordinates);

    useEffect(() => {
        setMarkerCoordinates(coordinates);
    }, [ipAddress])

    return (
        <div className="items-center w-screen h-full mx-auto overflow-hidden text-center bg-slate-900">
            <div className="flex flex-col items-center justify-center w-full mt-24 mb-32 h-72 sm:h-72 lg:h-20 sm:mt-16 lg:mt-8"> 
                <h1 className="mt-12 mb-8 text-4xl text-center text-white">IP Address Tracker</h1>
                <Input setIpAddress={setIpAddress} />
            </div>
            <Info ipAddress={ipAddress} setCoordinates={setCoordinates}/>
            <Map coordinates={coordinates} markerCoordinates={markerCoordinates} />
        </div>  
    )
}
