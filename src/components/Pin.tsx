import React from 'react'
import { Popup, Marker } from 'react-leaflet';
import { Icon } from 'leaflet';
import { PinProps } from '../types/types';

const Pin: React.FC<PinProps> = ({ lat, lng, name, description}) => {

    const customIcon = new Icon({
        iconUrl: require('../assets/location-dot-solid.svg').default,
        iconSize: [38, 38]
    });

    return (
        <>
            <Marker position={[lat, lng]} icon={customIcon} >
                <Popup >
                    {name} <br /> {description}
                </Popup>
            </Marker>
        </>
        
    )
}

export default Pin