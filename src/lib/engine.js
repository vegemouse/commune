import { resources, updateResource } from './resources';
import { date } from './date';
import { villagers, villagerCount } from './villagers';
import { get } from 'svelte/store';

function getRandomAmount(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function updateWood() {
    const loggers = get(villagers).logger;
    for (let i = 0; i < loggers; i ++) {
        updateResource("wood", getRandomAmount(1, 3));
    }
}

function updateStone() {
    const miners = get(villagers).miner;
    for (let i = 0; i < miners; i ++) {
        updateResource("stone", getRandomAmount(1, 3));
    }
}

function updateFood() {
    const farmers = get(villagers).farmer;
    for (let i = 0; i < farmers; i ++) {
        updateResource("food", getRandomAmount(1, 3));
    }
}

function eatFood() {
    if (get(resources).food > 0) {
        const totalVillagers = villagerCount();
        updateResource("food", -totalVillagers);
    } else {
        daysWithoutFood ++;
    }
}

let daysWithoutFood = 0;

export function init() {
    date.subscribe($date => {
        updateWood();
        updateStone();
        updateFood();
        eatFood();
        if (daysWithoutFood > 1) {
            console.log("hungry!")
        } 
    });
}

// DEAL W/ HOMELESS
// DEAL W/ HUNGRY
// DEAL W/ SICK?

