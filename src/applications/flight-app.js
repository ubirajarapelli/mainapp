import * as singleSpa from "single-spa";
import {matchingPathname, runScript} from "../../utils/loaderScripts";

const loadFlightApp = async () => {
    await runScript('http://localhost:3003/bundle.js');
    return window.flightApp;
};

export const registerFlightApp = () => {
    singleSpa.registerApplication('flight-app', loadFlightApp, matchingPathname(['/flight', '/']));
};
