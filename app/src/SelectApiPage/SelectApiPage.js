import React, { useCallback } from 'react';
import './SelectApiPage.css';
import Logo from '../logo.png';
import SelectApi from '../SelectApi/SelectApi';
import { useNavigate } from 'react-router-dom';

const SelectApiPage = () => {
  const navigate = useNavigate();
  const handleChange = useCallback(
    (selectedApi) => {
      navigate(selectedApi.value);
    },
    [navigate],
  );

  return (
    <div>
      <div className="search-wrapper">
        <div>
          <img src={Logo} alt="Redoc" />
          <SelectApi autoFocus="true" onChange={handleChange} />
        </div>
      </div>
    </div>
  );
};

export default SelectApiPage;
