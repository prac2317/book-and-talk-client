import { useState } from "react";

const LocationSearch = () => {

    const [address, setAddress] = useState('');

    const searchAddress = () => {

    }

    return (
        <div>
            <input type="text" />
            <button onClick={searchAddress}>검색</button>
        </div>
    );
};

export default LocationSearch;
