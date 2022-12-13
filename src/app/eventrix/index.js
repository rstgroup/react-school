import { Eventrix, EventrixDebugger } from 'eventrix';
import receivers from './receivers';

const initialState = {
  counter: {
    value: 0,
    status: 'idle',
  },
  planets: [],
  characters: [],
}

const eventrix = new Eventrix(initialState, receivers);

const eDebugger = new EventrixDebugger(eventrix);
eDebugger.start();

export default eventrix;