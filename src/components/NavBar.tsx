import React from 'react'
import '../styles/nav.css';
import { NavBarProps } from '../types/types';


const NavBar: React.FC<NavBarProps> = ({ setPlaces, places, setCurrentPosition, setShouldRelocate }) => {
    

    const handleRelocation = (lat: number, lng: number) => {
        setCurrentPosition([lat, lng]);
        setShouldRelocate(true);
    }

    const handleDelete = (id: number) => {
        const newPlaces = places.filter((place: any) => place.id !== id);
        setPlaces(newPlaces);
    }

    
    return (
        <ul className='navbar'>
            {
                places.map((place: any) => {
                    return (
                        <li>
                            {/* we'll be able to change the name and description to something more 
                            descriptive or customizable if I had more time */}
                            <div key={place.id} className='nav-item'>
                                <p>Name: {place.name}</p>
                                <p>Description: {place.description}</p>
                                <p>Latitude: {place.lat}</p>
                                <p>Longitude: {place.lng}</p>
                                <div className='control-buttons'>
                                    <button onClick={() => handleRelocation(place.lat, place.lng)}>Go</button>
                                    <button onClick={() => handleDelete(place.id)}>Delete</button>
                                </div>
                                
                            </div>
                        </li>
                    )

                })
            }
            <div className=''>

            </div>
        </ul>
    )
}

export default NavBar;
