<script>
    import { buildings, addBuilding, canBuild, requiredResources } from "./../buildings";
    import { addNotification } from "../notifications";
    import { resources } from "./../resources";
    import Button from "./Button.svelte";

    function getRequiredResourcesString(building) {
        let string = "";
        for (const resource in requiredResources[building]) {
            string += `${resource}: ${requiredResources[building][resource]} `;
        }
        return string;
    }

    function buildBuilding(building) {
        addBuilding(building);
        addNotification(`You build a ${building}.`);
    }

</script>

<h6 class="header">Buildings</h6>
<div class="buildings card">
    <span><strong>Houses: </strong>{$buildings.house}</span> |
    <span><strong>Logging camps: </strong>{$buildings.loggingCamp}</span> |
    <span><strong>Farms: </strong>{$buildings.farm}</span> |
    <span><strong>Mines: </strong>{$buildings.mine}</span>

    <div class="buildings-buttons">
        <div class="building-button">
            <Button action={() => buildBuilding("house")} isDisabled={$resources && !canBuild("house")} wait={2}>
                Build house
            </Button>
            {getRequiredResourcesString("house")}
        </div>
        <div class="building-button">
            <Button action={() => buildBuilding("farm")} isDisabled={$resources && !canBuild("farm")} wait={2}>
                Build farm
            </Button>
            {getRequiredResourcesString("farm")}
        </div>
        <div class="building-button">
            <Button action={() => buildBuilding("loggingCamp")} isDisabled={$resources && !canBuild("loggingCamp")} wait={2}>
                Build logging camp
            </Button>
            {getRequiredResourcesString("loggingCamp")}
        </div>
        <div class="building-button">
            <Button action={() => buildBuilding("mine")} isDisabled={$resources && !canBuild("mine")} wait={2}>
                Build mine
            </Button>
            {getRequiredResourcesString("mine")}
        </div>
    </div>
</div>

<style>
    .buildings-buttons {
        border-top: 1px solid black;
        margin-top: 16px;
        padding-top: 16px;
    }
    .building-button {
        margin-bottom: 8px;
    }
</style>
