import React, { useContext } from 'react';
import Container from './views/Container/index.js';
import Header from './views/Header/index.js';
import './Kanban.css';

export default function KanbanDashboard() {
  return (
    <div className="wrapper">
      <div className="main-header">
        <Header />
      </div>
      <div className="main-content">
        <Container />
      </div>
    </div>
  );
}
