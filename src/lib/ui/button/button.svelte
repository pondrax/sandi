<script>
	/* button styles */
	export let blank = false;
	export let submit = false;
	export let href = null;
	export let primary = false;
	export let secondary = false;
	export let accent = false;
	export let info = false;
	export let success = false;
	export let warning = false;
	export let error = false;
	export let ghost = false;
	export let link = false;
	export let outline = false;
	export let glass = false;

	/* Button sizes */
	export let small = false;
	export let large = false;
	export let tiny = false;

	/* button display */
	export let left = false;
	export let right = false;
	export let gap = false;
	export let wide = false;
	export let block = false;
	export let circle = false;
	export let square = false;

	/* button state */
	export let active = false;
	export let loading = false;
	export let disabled = false;
</script>

{#if !href}
	<button
    {submit}
		class="btn"
		class:gap-2={gap}
		class:justify-start={left}
		class:justify-end={right}
		class:btn-primary={primary}
		class:btn-secondary={secondary}
		class:btn-accent={accent}
		class:btn-info={info}
		class:btn-success={success}
		class:btn-warning={warning}
		class:btn-error={error}
		class:btn-ghost={ghost}
		class:btn-link={link}
		class:btn-outline={outline}
		class:glass
		class:btn-sm={small}
		class:btn-lg={large}
		class:btn-xs={tiny}
		class:btn-wide={wide}
		class:btn-block={block}
		class:btn-circle={circle}
		class:btn-square={square}
		class:btn-active={active}
		class:btn-disabled={disabled}
		class:loading
    {...$$restProps}
    on:click|stopPropagation
	>
		<slot />
	</button>
{:else}
	<a
		{href}
    target={blank?'_blank':''}
		class="btn"
		class:gap-2={gap}
		class:justify-start={left}
		class:justify-end={right}
		class:btn-primary={primary}
		class:btn-secondary={secondary}
		class:btn-accent={accent}
		class:btn-info={info}
		class:btn-success={success}
		class:btn-warning={warning}
		class:btn-error={error}
		class:btn-ghost={ghost}
		class:btn-link={link}
		class:btn-outline={outline}
		class:glass
		class:btn-sm={small}
		class:btn-lg={large}
		class:btn-xs={tiny}
		class:btn-wide={wide}
		class:btn-block={block}
		class:btn-circle={circle}
		class:btn-square={square}
		class:btn-active={active}
		class:btn-disabled={disabled}
		class:loading
    {...$$restProps}
		on:click
	>
		<slot />
	</a>
{/if}
