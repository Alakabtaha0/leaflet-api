import React from 'react';
import { MapContainer, TileLayer, useMapEvents, useMap } from 'react-leaflet';
import Pin from './Pin';
import '../styles/map.css';
import 'leaflet/dist/leaflet.css';
import { MapProps } from '../types/types';

const Map: React.FC<MapProps> = ({ places, setPlaces, currentPosition, setShouldRelocate, shouldRelocate }) => {
    

    // This is a custom hook that listens for a click event on the map and adds a new place to the places array
    const LocationFinder = () => {
        useMapEvents({
            click(e:any) {
                const { lat, lng }: { lat: number, lng: number } = e.latlng;
                setPlaces([...places, { id: places.length + 1, lat, lng, name: `places ${places.length+1}`, description: `description ${places.length+1}` }]);
            },
        });
        return null;
    };
    
    // This is a custom hook that listens for a change in the shouldRelocate state and pans the map to the current position
    const RelocateMap = (currentPosition:any) => {
        const map = useMap();
        map.panTo(currentPosition.currentPosition);
        setShouldRelocate(false);
        return null;
    }

    return (
        <div id='map'>
            <MapContainer center={[51.5, -0.12]} zoom={13} scrollWheelZoom={true} >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

                />
                <LocationFinder />
                {shouldRelocate && <RelocateMap currentPosition={currentPosition} />}
                {
                    places.map((place:any) => {
                        return <Pin lat={place.lat} lng={place.lng} name={place.name} description={place.description} />
                    })
                }

            </MapContainer>
        </div>

    )
}

export default Map
