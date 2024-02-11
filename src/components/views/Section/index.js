import React, { useState, useEffect, useContext } from 'react';
import SectionHeader from './SectionHeader.js';
import Card from '../Card/index.js';
import { DataContext } from '../../../contextapi/DataContext';

import './Section.css';
export default function Section({ item }) {
  const {
    group,
    order,
    data: { tickets, users },
  } = useContext(DataContext);
  const [sectionData, setSectionData] = useState([]);
  useEffect(() => {
    const sectionDataMap = tickets?.filter((ele) => ele[group] === item);
    console.log({ sectionDataMap });
    if (order === 'priority') {
      sectionDataMap?.sort((a, b) => a.priority - b.priority);
    } else {
      sectionDataMap?.sort((a, b) => a.title.localeCompare(b.title));
    }
    setSectionData(sectionDataMap);
  }, [item, order]);
  return (
    <>
      <SectionHeader item={item} count={sectionData?.length} />
      <div className="card-wrapper">
        {sectionData?.length &&
          sectionData?.map((item) => {
            return (
              <>
                <Card item={item} />
              </>
            );
          })}
        </div>
    </>
  );
}
