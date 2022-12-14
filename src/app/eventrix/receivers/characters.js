import axios from "axios";
import { EventsReceiver } from "eventrix";
import { FETCH_CHARACTERS } from "../eventsNames/starWarsApi";

const fetchCharactersReceiver = new EventsReceiver(
  FETCH_CHARACTERS,
  (eventName, eventData, stateManager) => {
    return axios.get("https://swapi.dev/api/species/").then((response) => {
      const charactersList = response.data.results;
      stateManager.setState("characters", charactersList);
    });
  }
);

export default fetchCharactersReceiver;
