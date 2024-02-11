import React from 'react';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HiDotsHorizontal } from "react-icons/hi";

import {
  faUser,
  faExclamation,
  faCircleDot,
} from '@fortawesome/free-solid-svg-icons';

export default function Card({ item }) {
  return (
    <div className="container">
      <div className="card-header">
        <p>{item.id}</p>
        <p className="user">
          <FontAwesomeIcon icon={faUser} size="lg" />
        </p>
      </div>
      <div className="main">
        <p>{item.title}</p>
      </div>
      <div className="content">
        <p className="icon-container">
          <HiDotsHorizontal />
        </p>
        <p className="status-container">
          <FontAwesomeIcon icon={faCircleDot} />
          <p className="status">{item?.tag[0]}</p>
        </p>
      </div>
    </div>
  );
}
