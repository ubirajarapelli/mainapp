import * as singleSpa from "single-spa";
import {matchingPathname, runScript} from "../../utils/loaderScripts";

const loadCarsApp = async () => {
    await runScript('http://localhost:3002/bundle.js');
    return window.carsApp;
};


export const registerCarsApp = () => {
    singleSpa.registerApplication('cars-app', loadCarsApp, matchingPathname(['/cars', '/']));
};
