import { writable } from 'svelte-local-storage-store';
import { get } from 'svelte/store'

import { resources, updateResource } from './resources';

export const buildings = writable(
    'buildings',
    {
        house: 0,
        farm: 0,
        loggingCamp: 0,
        mine: 0
    }
);

export const requiredResources = {
    house: {
        wood: 10,
        stone: 5
    },
    farm: {
        wood: 10
    },
    loggingCamp: {
        wood: 25
    },
    mine: {
        wood: 5,
        stone: 20
    }
};

export function canBuild(building) {
    const availableResources = get(resources);
    const resourcesNeeded = requiredResources[building];
    for (const amount in resourcesNeeded) {
        if (availableResources[amount] < resourcesNeeded[amount]) {
            return false;
        }
    }
    return true;
};

export function addBuilding(building) {
    if (canBuild(building)) {
        const resourcesNeeded = requiredResources[building];
        for (const [resource, amount] of Object.entries(resourcesNeeded)) {
            updateResource(resource, -amount)
        }
        get(buildings)[building]++;
        buildings.set(get(buildings));
    }
};