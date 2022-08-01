<script>
    import Button from "./Button.svelte";
    import { date, state, setSpeed } from "./../date.js";
</script>

<h6 class="header">Date</h6>
<div class="card date">
    {$date.season}, Year {$date.year}
    <div class="button-container">
        <Button action={() => setSpeed(0)} style={$state == 0 ? "dark" : null}>Pause</Button>
        <Button action={() => setSpeed(1)} style={$state == 1 ? "dark" : null}>Play</Button>
        <Button action={() => setSpeed(2)} style={$state == 2 ? "dark" : null}>Fast</Button>
        <Button action={() => setSpeed(3)} style={$state == 3 ? "dark" : null}>Faster</Button>
    </div>
</div>

<style>
    .date {
        text-align: center;
    }
    .button-container {
        margin-top: 8px;
    }
</style>