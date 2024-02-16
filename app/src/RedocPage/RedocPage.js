import React, { useEffect, useState, useCallback } from 'react';
import './RedocPage.css';
import Logo from '../logo.png';
import { RedocStandalone } from 'redoc';
import { Link, useNavigate, useParams } from 'react-router-dom';
import SelectApi, { useAvailableApis } from '../SelectApi/SelectApi';

const RedocPage = () => {
  const availableApis = useAvailableApis();
  const params = useParams();
  const [activeApi, setActiveApi] = useState({ url: '' });
  const navigate = useNavigate();
  useEffect(() => {
    const activeApiFromQuery = availableApis.find(
      (element) => element.value === params.api,
    );

    if (activeApiFromQuery) {
      setActiveApi(activeApiFromQuery);
    } else {
      navigate('/');
    }
  }, [availableApis, params, navigate]);

  const handleChange = useCallback(
    (selectedApi) => {
      setActiveApi(selectedApi);
      navigate(selectedApi.value);
    },
    [navigate],
  );

  return (
    <div>
      <header className="RedocPage-header">
        <Link to={'/'}>
          <img src={Logo} alt="Redoc" />
        </Link>

        <SelectApi
          className="select"
          value={activeApi}
          onChange={handleChange}
        />
      </header>
      <section className="container__redoc">
        <RedocStandalone
          specUrl={activeApi.url}
          options={{
            nativeScrollbars: true,
            scrollYOffset: 60,
            theme: {
              colors: { primary: { main: window._env_.THEME_COLOR } },
            },
          }}
        />
      </section>
    </div>
  );
};

export default RedocPage;
