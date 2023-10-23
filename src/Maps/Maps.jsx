import React from "react";
import GoogleMapReact from 'google-map-react';

export default function Map() {
    const defaultProps = {
        center: {
            lat: 31.5102,
            lng: 74.3441
        },
        zoom: 11
    };

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
            </GoogleMapReact>
        </div>
    );
}