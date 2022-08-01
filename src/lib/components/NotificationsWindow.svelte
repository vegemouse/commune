<script>
    import { notifications } from "./../notifications.js";
</script>

<h6 class="header">Notifications</h6>
<div class="notifications card">
    <ul>
        {#each $notifications as notification}
            <li>{notification}</li>
        {/each}
    </ul>
</div>

<style>
    .notifications {
        max-height: 30vh;
        overflow-y: scroll;
    }

    .notifications ul {
        list-style-type: none;
    }

    .notifications li {
        color: #777777;
        margin-bottom: 0;
    }

    .notifications li:first-of-type {
        color: black;
        font-weight: bold;
    }
</style>
