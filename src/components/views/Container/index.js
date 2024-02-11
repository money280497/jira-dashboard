import React, { useState, useEffect, useContext } from 'react';
import Section from '../Section/index.js';
import './Container.css';
import { DataContext } from '../../../contextapi/DataContext';

export default function Container() {
  const {
    group,
    order,
    data: { tickets, users },
  } = useContext(DataContext);

  const [grouping, setGrouping] = useState([]);
  useEffect(() => {
    const newGrouping = tickets?.map((item) => item[group]);
    const uniqueGrouping = newGrouping?.filter(
      (value, index, self) => self.indexOf(value) === index
    );
    setGrouping(uniqueGrouping);
  }, [tickets, users, group, order]);

  return (
    <div className="section-container">
      {grouping?.length &&
        grouping?.map((item) => {
          return <div className="section-column">
              <Section item={item} />
            </div>;
        })}
    </div>
  );
}
