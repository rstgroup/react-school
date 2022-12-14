import axios from "axios";
import { EventsReceiver } from "eventrix";
import { FETCH_PLANETS } from "../eventsNames/starWarsApi";

const fetchPlanetsReceiver = new EventsReceiver(
  FETCH_PLANETS,
  (eventName, eventData, stateManager) => {
    return axios.get("https://swapi.dev/api/planets/").then((response) => {
      const planetsList = response.data.results;
      stateManager.setState("planets", planetsList);
    });
  }
);

export default fetchPlanetsReceiver;
