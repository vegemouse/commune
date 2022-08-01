import { writable } from 'svelte-local-storage-store';
import { get } from 'svelte/store'

import { buildings } from './buildings';

export const startingVillagers = 10;

export const jobToBuilding = {
    farmer: "farm",
    miner: "mine",
    logger: "loggingCamp"
}

export const maxEmployees = {
    farm: 4,
    loggingCamp: 4,
    mine: 4
}

export const villagers = writable(
    'villagers',
    {
        unemployed: startingVillagers,
        farmer: 0,
        logger: 0,
        miner: 0,
        gatherer: 0
    }
);

export function hire(job) {
    const jobBuilding = jobToBuilding[job];
    const currentBuildings = get(buildings)[jobBuilding];
    if (currentBuildings * (maxEmployees[jobBuilding]) > get(villagers)[job]) {
        if (get(villagers).unemployed > 0) {
            get(villagers).unemployed --;
            get(villagers)[job] ++; 
            villagers.set(get(villagers));
        }
    }
    // const buildingType = get(buildings);
    
}

export function fire(job) {
    if (get(villagers)[job] > 0) {
        get(villagers)[job] --;
        get(villagers).unemployed ++;
        villagers.set(get(villagers));
    }
}

export function villagerCount() {
    return Object.values(get(villagers)).reduce((a, b) => a + b);
}