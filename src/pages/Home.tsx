import React, { useState } from 'react';
import Map from '../components/Map';
import NavBar from '../components/NavBar';
import { Places } from '../types/types';



const Home = () => {
    const [places, setPlaces] = useState<Places[]>([]);
    const [currentPosition, setCurrentPosition] = useState<number[]>([51.505, -0.09]);
    // State to control the relocation of the map to the current position
    const [shouldRelocate, setShouldRelocate] = useState<boolean>(false);

    return (
        <div className='ui-display'>
            <NavBar setPlaces={setPlaces}
                places={places}
                setCurrentPosition={setCurrentPosition}
                setShouldRelocate={setShouldRelocate} />
            <Map places={places} setPlaces={setPlaces}
                currentPosition={currentPosition}
                shouldRelocate={shouldRelocate}
                setShouldRelocate={setShouldRelocate} />
        </div>
    )
}

export default Home
