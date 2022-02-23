import React from 'react';
import { useDispatch } from 'react-redux';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import classNames from 'classnames';

import { timeOver } from '../../store/placesSlice';
import { StatusPlace } from "../../data/places";

import './Place.scss';

const Place = ({ place, index, bookingPlace }) => {
  const dispatch = useDispatch();

  const renderTime = (remainingTime) => {
    return (
      <div className="timer">
        <div className="value">{remainingTime}</div>
      </div>
    );
  };

  return (
    <div
      className={
        classNames([
          'place',
          place.status === StatusPlace.DEFAULT ? 'place--default' : '',
          place.status === StatusPlace.RESERVED ? 'place--reserved' : '',
          place.status === StatusPlace.SOLVED ? 'place--solved' : ''
        ])
      }
      onClick={bookingPlace}
    >
      <div className="place-number">{index}</div>
      {
        place.status === StatusPlace.RESERVED &&
        <div className='place-timer'>
          <CountdownCircleTimer
            isPlaying
            duration={5}
            colors='#10b981'
            trailColor='#e9edf5'
            size={50}
            strokeWidth={5}
            onComplete={() => {
              dispatch(timeOver({ place }))
            }}
          >
            {({ remainingTime }) => renderTime(remainingTime)}
          </CountdownCircleTimer>
        </div >
      }
    </div >
  )
}

export default Place;
