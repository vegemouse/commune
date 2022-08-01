import { writable } from 'svelte-local-storage-store';
import { get } from 'svelte/store'
import { addNotification } from './notifications';

export const state = writable('state', 1);
export const date = writable('date', {
    day: 1,
    season: "Early Spring",
    year: 1
});

const normalSpeed = 3000;
const fastSpeed = 1500;
const fasterSpeed = 500;

const seasons = [
    "Early Spring",
    "Spring",
    "Late Spring",
    "Early Summer",
    "Summer",
    "Late Summer",
    "Early Fall",
    "Fall",
    "Late Fall",
    "Early Winter",
    "Winter",
    "Late Winter"
];

let timeInterval;

function runTime() {
    let { day, season, year } = get(date);

    day++;
    if (day > 30) {
        day = 1;
        let seasonIndex = seasons.indexOf(season);
        if (seasonIndex >= 11) {
            seasonIndex = -1;
            year++;
        };
        season = seasons[seasonIndex + 1];
        addNotification(season + " has arrived.")
    }
    date.set({ day, season, year });
}

export function setSpeed(speed) {
    state.set(speed);

    switch (get(state)) {
        case 0:
            clearInterval(timeInterval);
            break;
        case 1:
            clearInterval(timeInterval);
            timeInterval = setInterval(runTime, normalSpeed);
            break;
        case 2:
            clearInterval(timeInterval);
            timeInterval = setInterval(runTime, fastSpeed);
            break;
        case 3:
            clearInterval(timeInterval);
            timeInterval = setInterval(runTime, fasterSpeed);
            break;
    }
}

setSpeed(1);