import axios from 'axios';
import { useState } from 'react';

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

interface LocationSearchProps {
  setIsOpen: (isOpen: boolean) => void;
  setAddress: (address: Address) => void;
  markAddress: (x: string, y: string, addressName: string) => void;
}

const LocationSearch = ({ setIsOpen, setAddress, markAddress }: LocationSearchProps) => {
  const [addressList, setAddressList] = useState<Address[]>([]);

  const [searchWord, setSearchWord] = useState('');

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };

  const searchAddress = async () => {
    const response = await axios.get('https://dapi.kakao.com/v2/local/search/keyword.json', {
      params: {
        query: searchWord,
      },
      headers: {
        Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_REST_API_KEY}`,
      },
    });

    console.log(response.data.documents);

    setAddressList(response.data.documents);
  };

  const handleSelectAddress = (address: Address) => {
    console.log(address);
    setAddress(address);
    setIsOpen(false);
    markAddress(address.x, address.y, address.address_name);
  };

  return (
    <div className="container">
      <button onClick={() => setIsOpen(false)}> ← </button>
      <input type="text" value={searchWord} onChange={onChangeSearch} />
      <button onClick={searchAddress}>검색</button>
      <div>
        {addressList.map((address: Address) => (
          <div
            key={address.id}
            onClick={() => handleSelectAddress(address)}
            // todo: css 분리
            style={{ cursor: 'pointer', padding: '10px', border: '1px solid #ddd', margin: '5px 0' }}
          >
            <span>{address.address_name}</span>
            <br />
            <span>{address.place_name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationSearch;
