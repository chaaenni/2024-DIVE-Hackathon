'use client'

import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

interface mapContainerStyle{
    width: string;
    height: string;
}

export default function Recommend(){
    const containerStyle:mapContainerStyle = {
        width: '700px',
        height: '900px'
    }
    const center = {
        lat: 35.14246667, //latitude(위도)
        lng: 129.115375, //longitude(경도)
    }
    return(
        <div>
            <LoadScript googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY || ""}>
                <GoogleMap 
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={12}
                >

                </GoogleMap>
            </LoadScript>
        </div>
    )
}