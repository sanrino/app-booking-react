import { v4 as uuidv4 } from 'uuid';

export const StatusPlace = {
  DEFAULT: 'default',
  RESERVED: 'reserved',
  SOLVED: 'solved'
};

export const places = [
  {
    id: uuidv4(),
    status: StatusPlace.DEFAULT,
    isTimeOver: false
  },
  {
    id: uuidv4(),
    status: StatusPlace.DEFAULT,
    isTimeOver: false
  },
  {
    id: uuidv4(),
    status: StatusPlace.DEFAULT,
    isTimeOver: false
  },
  {
    id: uuidv4(),
    status: StatusPlace.DEFAULT,
    isTimeOver: false
  },
  {
    id: uuidv4(),
    status: StatusPlace.DEFAULT,
    isTimeOver: false
  },
  {
    id: uuidv4(),
    status: StatusPlace.DEFAULT,
    isTimeOver: false
  },
  {
    id: uuidv4(),
    status: StatusPlace.DEFAULT,
    isTimeOver: false
  },
  {
    id: uuidv4(),
    status: StatusPlace.DEFAULT,
    isTimeOver: false
  },
  {
    id: uuidv4(),
    status: StatusPlace.DEFAULT,
    isTimeOver: false
  },
]
