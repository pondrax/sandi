<script>
import { createEventDispatcher } from 'svelte';
import { AlertCircleIcon, CheckCircleIcon, HelpCircleIcon, XCircleIcon } from 'svelte-feather-icons';

const dispatch = createEventDispatcher();

/* alert styles */
export let info = false;
export let success = false;
export let warning = false;
export let error = false;
export let closable = false;

export let sm=false;
export let md=false;
let el;
</script>

<div
  bind:this={el}
	class:alert={1}
	class:alert-info={info}
	class:alert-success={success}
	class:alert-warning={warning}
	class:alert-error={error}
  class:relative={1}
>
{#if closable}
  <div class="absolute top-2 right-3">
    <button on:click={()=>el.parentNode.removeChild(el)}>&times;</button>
    <!-- <button on:click={()=>dispatch('close')}>&times;</button> -->
  </div>
  {/if}
	<div class="gap-6">
    {#if info}
      <HelpCircleIcon size="24"/>
      {:else if success}
        <CheckCircleIcon size="24"/>
      {:else if warning}
        <AlertCircleIcon size="24"/>
      {:else if error}
        <XCircleIcon size="24"/>
    {/if}
    <div class="min-w-64"
      class:w-64={sm}
      class:w-96={md}

    >
      <slot />
    </div>
	</div>
</div>
