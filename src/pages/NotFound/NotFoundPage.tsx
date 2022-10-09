import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { PrimaryButton } from '../../components/PrimaryButton/PrimaryButton';
import './NotFoundPage.css';

export function NotFoundPage() {
  const places = ['forest', 'dungeon', 'place'];
  //{`${places[Math.floor(Math.random() * 3)]}`}

  return (
    <div className="page">
      <div className="advise-container">
        <div className="error-number-container">
          <span className="error-number">404</span>
        </div>
        <div className="message-container">
          <h1 className="error-title">
            After playing with a group of kids, you reach into your pocket and notices that your map is gone
          </h1>
          <span className="error-subtitle">Those damn kids... FUUUUUUUUU</span>
        </div>
        <div className="action-buttons">
          <div className="go-back-button-div">
            <Link to={'/'}>
              <PrimaryButton>
                <FontAwesomeIcon icon={faArrowLeftLong} className="mr-2" />
                Go back to home
              </PrimaryButton>
            </Link>
          </div>
          <div className="help-button-div">
            <Link to={'/contact'}>
              <PrimaryButton className="bg-blue-100 text-blue-600 hover:bg-blue-200">Call for help</PrimaryButton>
            </Link>
            <span className="help-button-description">*Contact support</span>
          </div>
        </div>
      </div>
    </div>
  );
}
