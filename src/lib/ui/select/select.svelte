<script>
import { Button, Checkbox, Radio, Range, Toggle, Textarea } from '$ui';
import { away } from '$lib/utils'

let el;
/* select values properties */
export let label = null;

let focus=false;

let search = '';
let index = -1;

export let selected = '';
export let rawSelected = [];

export let multiple = false;

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

$: filtered = options.filter(opt=>opt[keyLabel].includes(search));

// $: previewSelected = 

const preview=()=>{
  selected = rawSelected.map(sel=>sel[keyLabel]).join(',');
  el.innerText=multiple?'':selected
}
const handleKeyDown = (ev)=>{
  let specialKey = ['ArrowUp','ArrowDown'];
  if(ev.key=='ArrowUp'){
    index--;
  }
  if(ev.key=='ArrowDown'){
    index++;
  }
}
const handleSelect = (opt)=>{
  if(!multiple){
    rawSelected = [opt]
  }
  if(!rawSelected.includes(opt)){
    rawSelected.push(opt);
    rawSelected = rawSelected;
  }
  preview()
  // console.log(opt, rawSelected, previewSelected)
}
const handleRemoveSelect = (opt)=>{
  if(rawSelected.includes(opt)){
    let i = rawSelected.indexOf(opt);
    rawSelected.splice(i,1)
    rawSelected = rawSelected;
  }
  preview()
}
const handleInput=(e)=>{
  search = el.innerText
}
</script>

<div class="form-control"
  use:away
  on:away={()=>focus=false}>
	{#if label}
		<label for="input" class="label">
			<span class="label-text">{label}</span>
		</label>
	{/if}
  {search}
  {selected}
  <label
    for="select"
		class="flex"
		class:input-group={group}
		class:input-group-xs={tiny}
		class:input-group-sm={small}
		class:input-group-lg={large}
	>
		<slot name="prefix" />
    <div tabindex="0"
      bind:this={el}
      on:focus={()=>focus=true}
      on:keydown={handleKeyDown}
      on:input={handleInput}
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
      style="display:block;height:fit-content;font-weight:normal;min-width:10rem;padding-right:0.75rem"
      contenteditable
      >
    </div>
		<slot name="suffix" />
	</label>
  
  <div class="relative">
    {#if multiple}
      <div class="flex gap-2 py-2">
        {#each rawSelected as sel}        
          <div class="badge badge-primary badge-lg">
            {sel[keyLabel]}
            <div class="btn btn-xs ml-2" on:click={()=>handleRemoveSelect(sel)}>&times;</div>
          </div>
        {/each}
      </div>
    {/if}
    <div class="label text-error-content text-xs">
      {#if error}
        {#each error as e}
        <div >{e}</div>
        {/each}
      {/if}
    </div>
    {#if focus}
      <div class="absolute top-1 z-10">        
        <ul class="menu menu-compact bg-base-100 w-56 rounded-box shadow">
          {#each filtered as opt,i}
            <li>
              <div  
                on:click={()=>handleSelect(opt)}
                class:bg-base-200={i==index}
                class:bg-base-300={rawSelected.includes(opt)}
                >
                <slot opt={opt}>
                  {opt[keyLabel]}
                </slot>
              </div>
            </li>
          {/each}
        </ul>
      </div>
    {/if}
  </div>
</div>

<style>
[placeholder]:empty::before {
  content: attr(placeholder);
  color: #999; 
}

[placeholder]:empty:focus::before {
  content: "";
}
</style>