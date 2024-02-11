import React, { useContext } from 'react';
import './Section.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { priorityMapping } from '../../../utils/index.js';
import { DataContext } from '../../../contextapi/DataContext';

export default function SectionHeader({ item, count }) {
  const {
    group,
    order,
    data: { tickets, users },
  } = useContext(DataContext);
  const rendeHeader = () => {
    if (group === 'userId') {
      const usersData = users?.filter((ele) => ele.id === item);
      return usersData[0]?.name;
    } else if (group === 'status') {
      return item;
    } else {
      return priorityMapping[item];
    }
  };
  return <div className="section-header"></div>;
}
