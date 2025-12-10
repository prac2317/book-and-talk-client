import axios from "axios";
import { useState } from "react";

interface Address {
    id: string;
    place_name: string;
    category_name: string;
    category_group_code: string;
    category_group_name: string;
    phone: string;
    address_name: string;
    road_address_name: string;
    x: string;
    y: string;
    place_url: string;
    distance: string;
}

const LocationSearch = () => {

    const [addressList, setAddressList] = useState<Address[]>([]);

    const [searchWord, setSearchWord] = useState('');

    const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchWord(e.target.value);
    }

    const searchAddress = async () => {
        const response = await axios.get('https://dapi.kakao.com/v2/local/search/keyword.json', {
            params: {
                query: searchWord
            },
            headers: {
                'Authorization': `KakaoAK ${import.meta.env.VITE_KAKAO_REST_API_KEY}`,
            }
        });

        console.log(response.data.documents);

        setAddressList(response.data.documents);
    }

    return (
        <div>
            <input type="text" value={searchWord} onChange={onChangeSearch} />
            <button onClick={searchAddress}>검색</button>
            <div>
                {addressList.map((address: Address) => (
                    <div key={address.id}>
                        <span>{address.address_name}</span>
                        <span>{address.place_name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LocationSearch;
