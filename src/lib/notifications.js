import { writable } from 'svelte-local-storage-store';
import { get } from 'svelte/store'

const startingNotification = "You stumble upon an unclaimed patch of land. Around you lay trees, rocks, ore, and fresh berries."
const maxNotifications = 25;

export const notifications = writable(
    'notifications',
    [startingNotification]
);

export function addNotification(string) {
    const oldNotifications = get(notifications).slice(0, maxNotifications);
    notifications.set([string, ...oldNotifications]);
};