<script>
import { fade, fly } from 'svelte/transition';
import { Button, Checkbox, Radio, Range, Toggle, Textarea } from '$ui';
import { away } from '$lib/utils'

let el;
/* select values properties */
export let label = null;

let focus=false;

let search = '';
let index = -1;

export let value = '';
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
$: selectedAll = rawSelected.length == filtered.length;

const previewSelected=()=>{
  if(multiple){
    value = rawSelected.map(sel=>sel[keyValue]).join(',');
    el.innerText = ''
  }else{
    value = rawSelected[0][keyValue];
    el.innerText = rawSelected[0][keyLabel];
  }
}
const handleKeyDown = (ev)=>{
  let specialKeys = ['ArrowUp','ArrowDown','Enter'];
  if(ev.key=='Tab'){
    focus=false;
  }
  if(specialKeys.includes(ev.key)){
    ev.preventDefault()
    if(ev.key=='ArrowUp'){
      if(index==-1)return;
      index--;
    }
    if(ev.key=='ArrowDown'){
      if(index==filtered.length)return;
      index++;
    }
    if(ev.key=='Enter'){
      if(filtered[index]){
        handleSelect(filtered[index],index)
      }
    }
  }
}
const handleSelect = (opt,i)=>{  
  index=i;
  if(rawSelected.includes(opt)){
    handleRemoveSelect(opt);
  }else{
    handleAddSelect(opt);
  }
  focus = el === document.activeElement;
}
const handleAllSelect = ()=>{
  if(selectedAll){
    rawSelected = []
  }else{
    rawSelected = filtered
  }
  focus = false;
  previewSelected()
}
const handleAddSelect = (opt)=>{
  if(!multiple){
    rawSelected = [opt]
  }else{
    rawSelected.push(opt);
    rawSelected = rawSelected;
  }
  previewSelected()
}
const handleRemoveSelect = (opt)=>{
  if(rawSelected.includes(opt)){
    let i = rawSelected.indexOf(opt);
    rawSelected.splice(i,1)
    rawSelected = rawSelected;
  }
  previewSelected()
}
const handleInput=(e)=>{
  search = el.innerText
}
</script>

<div class="form-control"
  use:away
  on:away={()=>focus=false}
  on:keydown={handleKeyDown}
>
	{#if label}
		<label for="input" class="label">
			<span class="label-text">{label}</span>
		</label>
	{/if}
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
      <div class="flex flex-wrap gap-2 py-2">
        {#each rawSelected as sel}        
          <div class="badge badge-primary">
            <slot name="selection" sel={sel}>
              {sel[keyLabel]}
            </slot>
            <div class="btn btn-xs btn-ghost ml-2 -mr-2" on:click={()=>handleRemoveSelect(sel)}>&times;</div>
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
      <div class="absolute top-1 z-40" transition:fade={{duration:100}}>        
        <ul class="menu menu-compact bg-base-100 w-56 min-w-0 rounded-box shadow overflow-y-auto max-h-64">
          {#if filtered.length>0}
            {#each filtered as opt,i}
              <li>
                <div  
                  on:click={()=>handleSelect(opt,i)}
                  class:bg-base-300={i==index}
                  class:hover:bg-base-300={1}
                  class:bg-base-200={rawSelected.includes(opt)}
                  >
                  <slot opt={opt}>
                    {opt[keyLabel]}
                  </slot>
                </div>
              </li>
            {/each}
            {#if multiple}
              <li class="sticky bottom-0">
                <div class="bg-base-300" on:click={handleAllSelect}>
                  { selectedAll? 'Hapus Semua': 'Pilih Semua' }
                </div>
              </li>
            {/if}
          {:else}          
            <li>
              <div class="bg-base-100">Tidak ada pilihan</div>
            </li>
          {/if}
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