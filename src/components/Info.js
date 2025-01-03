import React, { useEffect, useState } from "react";
import Input from "./Input";

export default function Info({ ipAddress, setCoordinates }) {

    const [ip, setIp] = useState('');
    const [location, setLocation] = useState('');
    const [timeZone, setTimeZone] = useState('');
    const [isp, setIsp] = useState('');

    useEffect(() => {
        //enter your ipify api key here
        // edit the url to include the ipAddress ipAddress=${ipAddress}
        const url = ``;
        
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setIp(data.ip);
                setLocation(`${data.location.city}, ${data.location.country}`);
                setTimeZone(data.location.timezone);
                setIsp(data.isp);
                setCoordinates([data.location.lat, data.location.lng]);
                console.log(data.location.lat, data.location.lng);
            })
            .catch(error => {
                console.error("Error fetching IP information:", error);
            });
    }, [ipAddress]);

    return (
        <div className="absolute z-10 flex items-center justify-between w-2/3 p-12 mx-auto text-center transform -translate-x-1/2 bg-white rounded-lg shadow-lg sm:flex-col lg:flex-row -translate-y-2/3 h-fit top-1/3 sm:top-[40%] lg:top-72 left-1/2">
            <div className="flex flex-col gap-2 mb-4 tracking-wider text-center sm:mb-4 lg:mb-0">
                <p className="tracking-wider text-center text-gray-500">IP ADDRESS</p>
                <p className="text-3xl font-bold tracking-wider text-center text-gray-700 sm:text-3xl lg:text-lg">{ip}</p>
            </div>
            <div className="flex flex-col gap-2 mb-4 tracking-wider text-center sm:mb-4 lg:mb-0">
                <p className="tracking-wider text-center text-gray-500">LOCATION</p>
                <p className="text-3xl font-bold tracking-wider text-center text-gray-700 sm:text-3xl lg:text-lg">{location}</p>
            </div>
            <div className="flex flex-col gap-2 mb-4 tracking-wider text-center sm:mb-4 lg:mb-0">
                <p className="tracking-wider text-center text-gray-500">TIME ZONE</p>
                <p className="text-3xl font-bold tracking-wider text-center text-gray-700 sm:text-3xl lg:text-lg">{timeZone}</p>
            </div>
            <div className="flex flex-col gap-2 mb-4 tracking-wider text-center sm:mb-4 lg:mb-0">
                <p className="tracking-wider text-center text-gray-500">ISP</p>
                <p className="text-3xl font-bold tracking-wider text-center text-gray-700 sm:text-3xl lg:text-lg">{isp}</p>
            </div>
        </div>
    );
}
