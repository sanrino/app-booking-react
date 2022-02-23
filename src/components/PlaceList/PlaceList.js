import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';

import { selectPlace, buyPlaces, notificationUpdate } from '../../store/placesSlice';
import { StatusPlace } from "../../data/places";
import Place from "../Place/Place";
import './PlaceList.scss'

import AlertMessage from '../AlertMessage/AlertMessage';

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
    y()
  }, [notification]);

  const y = () => {
    const tsa = new Promise(resolve => {
      setTimeout(resolve, 3000)
    })

    return tsa;
  };

  return (
    <div className='main'>
      {
        (success && notification || !success && notification) &&
        <AlertMessage alertName={success} />
      }

      <div className='places-list'>
        {
          places.map((place, index) => {
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
            onClick={purchasePlace}
          >
            Buy
          </Button>
        </div>
      }
    </div>
  );
}

export default PlaceList;
