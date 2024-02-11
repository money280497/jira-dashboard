import React from 'react';
import './style.css';
import KanbanDashboard from './components/KanbanDashboard.js';
import { DataProvider } from './contextapi/DataContext';
export default function App() {
  return (
    <DataProvider>
      <KanbanDashboard />
    </DataProvider>
  );
}
