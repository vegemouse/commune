<script>
    import { villagers, hire, fire, villagerCount, maxEmployees, jobToBuilding } from "./../villagers";
    import { buildings } from "./../buildings";
    import Button from "./Button.svelte";

    $: homeless =
        villagerCount() - $buildings.house * 5 > 0
            ? villagerCount() - $buildings.house * 5
            : 0;

    function getMaxWorkers(job) {
        const jobBuilding = jobToBuilding[job];
        const currentBuildings = $buildings[jobBuilding];
        return currentBuildings * (maxEmployees[jobBuilding]);
    }
</script>

<h6 class="header">Villagers | {villagerCount()}</h6>
<div class="villagers card">
    <span class="heading">Jobs</span>
    <div>
        <div>Unemployed: {$villagers.unemployed}</div>
        {#if $buildings.farm > 0}
            <div class="job">
                Farmer: {$villagers.farmer} / {$buildings && getMaxWorkers("farmer")}
                <span class="actions">
                    <Button action={() => hire("farmer")} style="small">+</Button>
                    <Button action={() => fire("farmer")} style="small">-</Button>
                </span>
            </div>
        {/if}
        {#if $buildings.loggingCamp > 0}
            <div class="job">
                Loggers: {$villagers.logger} / {$buildings && getMaxWorkers("logger")}
                <span class="actions">
                    <Button action={() => hire("logger")} style="small">+</Button>
                    <Button action={() => fire("logger")} style="small">-</Button>
                </span>
            </div>
        {/if}
        {#if $buildings.mine > 0}
            <div class="job">
                Miner: {$villagers.miner} / {$buildings && getMaxWorkers("miner")}
                <span class="actions">
                    <Button action={() => hire("miner")} style="small">+</Button>
                    <Button action={() => fire("miner")} style="small">-</Button>
                </span>
            </div>
        {/if}
        </div>
    <hr />
    <div>Homeless: {homeless}</div>
</div>

<style>
    .heading {
        font-weight: bold;
        padding-bottom: 8px;
        font-size: 1.1em;
    }
    
    .job {
        height: 32px;
    }

    hr {
        margin: 16px 0;
    }
</style>
