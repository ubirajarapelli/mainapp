import * as singleSpa from "single-spa";
import {matchingPathname, runScript} from "../../utils/loaderScripts";

const loadTrayApp = async () => {
    await runScript('http://localhost:3001/bundle.js');
    return window.trayApp;
};


export const registerTrayApp = () => {
    singleSpa.registerApplication('tray-app', loadTrayApp, matchingPathname(['/tray', '/']));
};
