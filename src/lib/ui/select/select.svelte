<script>
	import { Button, Checkbox, Radio, Range, Toggle, Imask, Textarea } from '$ui';

	/* select values properties */
	export let label = null;
	export let value = '';

	export let options = [];
	export let group = null;
  export let keyValue = 'value';
  export let keyLabel = 'label';

	export let primary = null;
	export let secondary = null;
	export let accent = null;
	export let info = null;
	export let success = null;
	export let warning = null;
	export let error = null;
	export let ghost = null;

	/* Select sizes */
	export let small = false;
	export let large = false;
	export let tiny = false;

	/* Select display */
	export let border = true;
</script>

<div class="form-control">
	{#if label}
		<label for="input" class="label">
			<span class="label-text">{label}</span>
		</label>
	{/if}
  <label
		class="flex"
		class:select-group={group}
		class:select-group-xs={tiny}
		class:select-group-sm={small}
		class:select-group-lg={large}
	>
		<slot name="prefix" />
		<select
			bind:value
			{...$$restProps}
			class:w-full={1}
			class:select={1}
			class:select-primary={primary}
			class:select-secondary={secondary}
			class:select-accent={accent}
			class:select-info={info}
			class:select-succes={success}
			class:select-warning={warning}
			class:select-error={error}
			class:select-ghost={ghost}
			class:select-xs={tiny}
			class:select-sm={small}
			class:select-lg={large}
			class:select-bordered={border}
		>
    {#each options as opt}
      <option value={opt[keyValue]} selected={opt.selected} disabled={opt.disabled}>
        <slot opt={opt}>
          {opt[keyLabel]}
        </slot>

      </option>
    {/each}
    </select>
		<slot name="suffix" />
	</label>
  
  <div class="label text-error-content text-xs">
    {#if error}
      {#each error as e}
        <div >{e}</div>
      {/each}
    {/if}
    <!-- <span class="label-text-alt">Alt label</span> -->
  </div>
</div>
