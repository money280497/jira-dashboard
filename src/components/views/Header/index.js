import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLayerGroup,
  faArrowDown,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import HeaderFilter from './HeaderFilter.js';
import { DataContext } from '../../../contextapi/DataContext';

export default function Header() {
  const { display, setDisplay } = useContext(DataContext);
  const handleDisplayClick = () => {
    setDisplay(!display);
  };
  return (
    <header className="header">
      <div className="button-wrapper">
        <button
          id="display-button"
          name="displayButton"
          className="displayButton"
          onClick={handleDisplayClick}
        >
          <FontAwesomeIcon icon={faLayerGroup} />
          <h6>Display</h6>
          {display && <FontAwesomeIcon icon={faArrowDown} />}
          {!display && <FontAwesomeIcon icon={faArrowLeft} />}
        </button>
        {display && <HeaderFilter setDisplay={setDisplay} />}
      </div>
    </header>
  );
}