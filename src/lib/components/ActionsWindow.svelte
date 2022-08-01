<script>
    import { updateResource } from "../resources";
    import { addNotification } from "../notifications"
    import Button from "./Button.svelte";

    function getRandomAmount(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    function gatherResource(resource, amount) {
        updateResource(resource, amount);
        addNotification(`You gather ${amount} ${resource}.`);
    }

</script>

<h6 class="header">Actions</h6>
<div class="card">
    <Button action={() => gatherResource("wood", getRandomAmount(1, 3))} wait={3}>Chop wood</Button>
    <Button action={() => gatherResource("stone", getRandomAmount(1, 3))} wait={3}>Gather rocks</Button>
    <Button action={() => gatherResource("food", getRandomAmount(1, 3))} wait={3}>Forage for food</Button>
</div>

<style>
</style>
