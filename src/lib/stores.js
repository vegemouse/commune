import { writable } from 'svelte-local-storage-store'

export const initialized = writable('initialized', false);
export const notifications = writable(
    'notifications',
    ["You stumble upon an unclaimed patch of land. Around you lay trees, rocks, ore, and fresh berries."]
);
export const villagers = writable('villagers', []);
export const resources = writable('resources', {
    wood: 0,
    stone: 0,
    ore: 0,
    food: 0
});

export const countAmount = writable("countAmount", 0)

export const buildings = writable('buildings', {
    houses: 0
});