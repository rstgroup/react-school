import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import {useEmit, useReceiver} from "eventrix";
import {ROUTE_CHANGE_EVENT_NAME} from "../app/eventrix/eventsNames/router";

function useStoreRoute() {
    const location = useLocation();
    const emit = useEmit();
    useReceiver(ROUTE_CHANGE_EVENT_NAME, (eventName, routeData, stateManager) => {
        stateManager.setState('currentRoute', routeData);
    });
    useEffect(() => {
        emit(ROUTE_CHANGE_EVENT_NAME, location);
    }, [location]);
    return location;
}

export default useStoreRoute;
