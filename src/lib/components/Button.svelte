<script>
    export let action = null;
    // export let text;
    export let style = "light";
    export let isDisabled = false;
    // wait = seconds, not ms.
    export let wait = 0;

    wait = wait * 1000;

    let inProgress = false;
    let progressPercent = 0;

    function performAction() {
        if (wait > 0) {
            inProgress = true;
            progressPercent = 0;
            let timeElapsed = 0;
            const timer = setInterval(() => {
                timeElapsed += 100;
                progressPercent = Math.floor((timeElapsed / wait) * 100);
                if (timeElapsed >= wait) {
                    inProgress = false;
                    action();
                    clearInterval(timer);
                }
            }, 100);
        } else {
            action();
        }
    }
</script>

<!-- If disabled by default-->
{#if isDisabled}
    <button disabled class={style} on:click={performAction}>
        <div class="progress-bar" style="width: 100%" />
        <slot />
    </button>
    <!-- If disabled due to cooldown -->
{:else if inProgress}
    <button disabled class={style} on:click={performAction}>
        <div class="progress-bar" style="width: {100 - progressPercent}%" />
        <slot />
    </button>
{:else}
    <button class={style} on:click={performAction}><slot /></button>
{/if}

<style>
    button {
        border: 1px solid black;
        border-radius: 0;
        box-sizing: border-box;
        padding: 0 10px;
        text-transform: none;
        position: relative;
    }

    button:disabled {
        cursor: not-allowed;
        position: relative;
    }

    .progress-bar {
        z-index: -1;
        position: absolute;
        top: 0;
        left: 0;
        box-sizing: border-box;
        height: 100%;
        width: 59%;
        background-color: #cccccc;
        transition: width 100ms;
    }

    .dark {
        background-color: black;
        color: white;
    }

    .small {
        height: auto;
        line-height: 100%;
        padding: 8px;
    }
</style>
