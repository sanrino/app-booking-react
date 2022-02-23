import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Alert } from '@mui/material';
import Button from '@mui/material/Button';

import { selectPlace, buyPlaces, notificationUpdate } from '../../store/placesSlice';
import { StatusPlace } from "../../data/places";
import Place from "../Place/Place";

import './PlaceList.scss'

const PlaceList = () => {
  const places = useSelector(state => state.places.places);
  const success = useSelector(state => state.places.success);
  const notification = useSelector(state => state.places.notification);
  const dispatch = useDispatch();

  const bookingPlace = (place) => {
    if (place.status === StatusPlace.DEFAULT) {
      dispatch(selectPlace({ place }));
    }

    if (place.status === StatusPlace.RESERVED) {
      console.log('This place has already reserved');
    }

    if (place.status === StatusPlace.SOLVED) {
      console.log('This place has already solved');
    }
  }

  const purchasePlace = () => {
    dispatch(buyPlaces());
  }

  const isReserved = () => {
    return places.some(p => p.status === StatusPlace.RESERVED);
  }

  useEffect(() => {
    setTimeout(() => {
      dispatch(notificationUpdate());
    }, 3000);
  }, [notification]);

  return (
    <div className='main'>
      {
        (success && notification) &&
        <Alert className='alert' severity="success">Payment successfully!</Alert>
      }

      {
        (!success && notification) &&
        <Alert className='alert' severity="error">Payment failed!</Alert>
      }

      <div className='places-list'>
        {
          places.map((place, index, i) => {
            return (
              <Place
                key={place.id}
                place={place}
                index={++index}
                bookingPlace={() => bookingPlace(place)}
              />
            )
          })
        }
      </div>
      {
        isReserved() &&
        <div className="places-actions">
          <Button
            variant='contained'
            color="success"
            onClick={() => purchasePlace()}
          >
            Buy
          </Button>
        </div>
      }
    </div>
  );
}

export default PlaceList;
