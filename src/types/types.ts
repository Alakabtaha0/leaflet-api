export interface MapProps {
    places: Places[];
    setPlaces: React.Dispatch<React.SetStateAction<Places[]>>;
    currentPosition: number[];
    setShouldRelocate: React.Dispatch<React.SetStateAction<boolean>>;
    shouldRelocate: boolean;
};

export interface PinProps {
    lat: number;
    lng: number;
    name: string;
    description: string;
}

export interface Places {
    id: number;
    lat: number;
    lng: number;
    name: string;
    description: string;
};


export interface NavBarProps {
    places: Places[];
    setCurrentPosition: React.Dispatch<React.SetStateAction<number[]>>;
    setPlaces: React.Dispatch<React.SetStateAction<Places[]>>;
    setShouldRelocate: React.Dispatch<React.SetStateAction<boolean>>;
}

