<script>
import { createEventDispatcher } from 'svelte'
import { Button } from '$lib/ui';
import { icurrency, imask} from './action'

const dispatch=createEventDispatcher()

let el;

export let value = '';
export let rawValue = '';
export let type = 'text';

/* Input styles */
export let group = (Object.keys($$slots).length > 0) | ['password', 'number'].includes(type);
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
export let currency = null;
export let mask = null;

const handleInput=(ev)=>{
  value = ev.target.value;
  rawValue = ev.target.dataset.unmask
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
    <input 
      bind:this={el}
      use:imask={mask}
      use:icurrency={currency}
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
      class:py-1={type=='file'}
      class:px-5={type=='file'}
    >
    
		{#if type == 'password'}
    <Button on:click={() => (show = !show)}>
      {show ? 'HIDE' : 'SHOW'}
    </Button>
    {/if}
    

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
