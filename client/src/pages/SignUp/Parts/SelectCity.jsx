import React, { useState } from 'react';
import { FormControl, InputLabel, NativeSelect } from '@material-ui/core';
import axios from 'axios';

const SelectCity = ({ handleChange, userData }) => {
  const [apiData, setApiData] = useState('');

  const handleSearch = async () => {
    try {
      let response = await axios.get(
        `/api/location/city/${userData.birthState}`
      );
      setApiData(response.data);
    } catch (error) {
      alert('here is error', error);
    }
  };

  return (
    <>
      <FormControl id="birthCity" className="user-input-su">
        <InputLabel htmlFor="birthCity" id="birthCity">
          city
        </InputLabel>
        <NativeSelect
          id="birthCity"
          defaultValue=""
          onChange={handleChange}
          onClick={handleSearch}
          required
        >
          {apiData &&
            apiData.map((city, i) => {
              return (
                <option id="birthCity" key={i} value={city.name}>
                  {city.name}
                </option>
              );
            })}
        </NativeSelect>
      </FormControl>
    </>
  );
};

export default SelectCity;
