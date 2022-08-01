<script>
  import { init } from './lib/engine';

  import NotificationsWindow from "./lib/components/NotificationsWindow.svelte";
  import DateWindow from "./lib/components/DateWindow.svelte";
  import VillagersWindow from "./lib/components/VillagersWindow.svelte";
  import BuildingsWindow from "./lib/components/BuildingsWindow.svelte";
  import ResourcesWindow from "./lib/components/ResourcesWindow.svelte";
  import ActionsWindow from "./lib/components/ActionsWindow.svelte";
  import Button from "./lib/components/Button.svelte";

  function reset() {
    localStorage.clear();
    location.reload();
  }

  init();
</script>

<main class="container">
  <div class="row">
    <div class="ten columns">
      <h1>Commune.</h1>
    </div>
    <div class="two columns">
      <div class="links">
        <Button action={reset}>Reset</Button>
        <Button action={null} style="dark">Save</Button>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="four columns">
      <DateWindow />
      <NotificationsWindow />
    </div>
    <div class="five columns">
      <ResourcesWindow />
      <BuildingsWindow />
      <ActionsWindow />
    </div>
    <div class="three columns">
      <VillagersWindow />
    </div>
  </div>
</main>
