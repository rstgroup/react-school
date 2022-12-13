import counterReceivers from './counter';
import fetchPlanetsReceiver from './planets';
import fetchCharactersReceiver from './characters';

export default [...counterReceivers, fetchPlanetsReceiver, fetchCharactersReceiver];