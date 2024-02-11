import React, { useRef, useEffect, useContext } from 'react';
import './Header.css';
import { DataContext } from '../../../contextapi/DataContext';
import { GROUPING_OPTIONS, ORDERING_OPTIONS } from '../../../utils/index.js';

const HeaderFilter = ({ setDisplay }) => {
  const { setGroup, setOrder, group, order } = useContext(DataContext);
  const myRef = useRef();
  const handleOrderingChange = (event) => {
    setOrder(event.target.value);
  };
  const handleGroupingChange = (event) => {
    setGroup(event.target.value);
  };
  useEffect(() => {
    function handleClickOutside(event) {
      if (myRef.current && !myRef.current.contains(event.target)) {
        setDisplay(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [myRef]);
  return (
    <div
      id="display-container"
      name="displayContainer"
      className="displayContainer"
      ref={myRef}
    >
      <div className="grouping">
        <label>Grouping</label>
        <select
          name="status"
          onChange={handleGroupingChange}
          defaultValue={group}
        >
          {GROUPING_OPTIONS.map((item) => {
            const { label, value, key } = item;
            return (
              <option key={key} value={value}>
                {label}
              </option>
            );
          })}
        </select>
      </div>
      <div className="ordering">
        <label>Ordering</label>
        <select
          name="priority"
          onChange={handleOrderingChange}
          defaultValue={order}
        >
          {ORDERING_OPTIONS.map((item) => {
            const { label, value, key } = item;
            return (
              <option key={key} value={value}>
                {label}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};
export default HeaderFilter;
