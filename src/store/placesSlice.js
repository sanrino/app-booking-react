import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { places, StatusPlace } from '../data/places';

const placesSlice = createSlice({
  name: 'places',
  initialState: {
    places: places,
    success: false,
    notification: undefined,
  },
  reducers: {
    selectPlace(state, action) {
      const place = state.places.find(p => p.id === action.payload.place.id);
      place.status = StatusPlace.RESERVED;
    },

    buyPlaces: (state) => {
      state.success = !state.success;
      state.notification = true;

      if (state.success) {
        state.places.forEach(place => {
          if (place.status === StatusPlace.RESERVED) {
            place.status = StatusPlace.SOLVED;
          }
        });

      } else {
        state.places.forEach(place => {
          if (place.status === StatusPlace.RESERVED) {
            place.status = StatusPlace.DEFAULT;
          }
        });
      }
    },

    timeOver(state, action) {
      const place = state.places.find(p => p.id === action.payload.place.id);
      place.status = StatusPlace.DEFAULT;
      place.isTimeOver = true;
    },

    notificationUpdate(state) {
      if (state.success && state.notification) {
        state.notification = undefined;
      }
      if (!state.success && state.notification) {
        state.notification = undefined;
      }
    }
  },
});

export const { selectPlace, buyPlaces, timeOver, notificationUpdate } = placesSlice.actions;

export default placesSlice.reducer;
