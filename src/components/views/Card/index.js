import React, { useContext } from 'react';
import './Card.css';
import { HiDotsHorizontal } from "react-icons/hi";
import { GoDotFill } from "react-icons/go";
import { DataContext } from '../../../contextapi/DataContext';

export default function Card({ item }) {
  const {
    data: { users },
  } = useContext(DataContext);

  const getUserInitials = (userId) => {
    return users?.filter(user=> user.id === userId)[0]?.name?.split(" ").map((n)=>n[0].toUpperCase()).join("");
  }
  const isActive = (userId) => {
    return users.filter(user=> user.id === userId)[0].available;
  }
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  return (
    <div className="container">
      <div className="card-header">
        <p>{item.id}</p>
        <p className="user" style= {{backgroundColor: getRandomColor()}}>
          {getUserInitials(item?.userId)}
          <span className= {`status-dot ${isActive ? " bg-online" : "bg-offline"}`}></span>
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
          <GoDotFill />
          <p className="status">{item?.tag[0]}</p>
        </p>
      </div>
    </div>
  );
}
