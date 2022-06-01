import { createContext, useContext, useState } from 'react';

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [lat, setLat] = useState(39);
  const [lon, setLon] = useState(32);
  const values = {
    lat,
    lon,
    setLat,
    setLon,
  };

  return (
    <LocationContext.Provider value={values}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => useContext(LocationContext);
