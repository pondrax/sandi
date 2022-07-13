<script>
	import { Button, Checkbox, Radio, Range, Toggle, Textarea } from '$ui';

	/* Input values properties */
	export let name = null;
	export let label = null;
	export let value = '';
	export let rawValue = '';
	export let prop = '';

	export let options = [];
	export let selected = options.length == 0 ? '' : [];
  export let error = [];

	/* Input styles */
	export let type = 'text';
</script>

<div class="form-control">
	{#if label}
		<label for="input" class="label">
			<span class="label-text">{label}</span>
		</label>
	{/if}
	{#if type == 'checkbox'}
		<Checkbox bind:selected bind:options {...$$restProps} />
	{:else if type == 'toggle'}
		<Toggle bind:selected bind:options {...$$restProps} />
	{:else if type == 'radio'}
		<Radio bind:selected bind:options name={name || prop} {...$$restProps} />
	{:else if type == 'range'}
		<Range bind:value {...$$restProps} />
	{:else if type == 'textarea'}
		<Textarea bind:value {...$$restProps} />
	{:else}
		<!-- <Imask bind:value bind:type bind:rawValue {...$$restProps} /> -->
	{/if}
  <div class="label text-error-content text-xs">
    {#if error}
      {#each error as e}
        <div >{e}</div>
      {/each}
    {/if}
    <!-- <span class="label-text-alt">Alt label</span> -->
  </div>
</div>
