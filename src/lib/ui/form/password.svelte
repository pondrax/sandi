<script>
import { createEventDispatcher } from 'svelte'
import { Button } from '$lib/ui';

const dispatch=createEventDispatcher()

let el;

export let value = '';
export let type = 'password';

/* Input styles */
export let group = true;
export let label = '';

/* Type password Only */
let show = false;

export let primary = null;
export let secondary = null;
export let accent = null;
export let info = null;
export let success = null;
export let warning = null;
export let error = null;
export let ghost = null;

/* Input sizes */
export let small = false;
export let large = false;
export let tiny = false;

/* input display */
export let border = true;

const handleInput=(ev)=>{
  value = ev.target.value;
  dispatch('input',value)
}
</script>

<div class="form-control">
  {#if label}
    <label for={el} class="label">
      <span class="label-text">{label}</span>
    </label>
  {/if}
  <label
    class="flex"
    class:input-group={group}
    class:input-group-xs={tiny}
    class:input-group-sm={small}
    class:input-group-lg={large}
  >
    <slot name="prefix" />
    <input 
      bind:this={el}        
      on:input={handleInput}

      {value}
      type={show ? 'text' : type}
      
      {...$$restProps}
      class:w-full={1}
      class:input={1}
      class:input-primary={primary}
      class:input-secondary={secondary}
      class:input-accent={accent}
      class:input-info={info}
      class:input-succes={success}
      class:input-warning={warning}
      class:input-error={error}
      class:input-ghost={ghost}
      class:input-xs={tiny}
      class:input-sm={small}
      class:input-lg={large}
      class:input-bordered={border}
    >
    
    <Button on:click={() => (show = !show)}>
      {show ? 'HIDE' : 'SHOW'}
    </Button>    

    <slot name="suffix" />
  </label>
  <div class="label text-error-content text-xs">
    {#if error}
      {#each error as e}
        <div >{e}</div>
      {/each}
      {/if}
  </div>
</div>
