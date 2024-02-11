import React, { useState, createContext } from 'react';
import useFetchHook from '../customHook/useFetchHook.js';

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [data, setData] = useFetchHook();
  const [group, setGroup] = useState('status');
  const [order, setOrder] = useState('priority');
  const [display, setDisplay] = useState(false);
  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        group,
        setGroup,
        order,
        setOrder,
        display,
        setDisplay,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
