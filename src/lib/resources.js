import { writable } from 'svelte-local-storage-store';
import { get } from 'svelte/store'

export const resources = writable(
    'resources',
    {
        wood: 50,
        stone: 50,
        food: 500
    }
);

export function updateResource(resource, amount) {
    get(resources)[resource] += amount; 
    resources.set(get(resources));
}

