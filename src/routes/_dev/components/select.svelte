<script>
import { 
  Select, 
  MockupCode,
  Tabs,
  Tab,
} from '$ui'

let options = [
  {label:'coba', value:1},
  {label:'testing', value:2},
  {label:'panjang', value:2},
  {label:'pendek', value:2},
  {label:'atas', value:2},
  {label:'bawah', value:2},
  {label:'bawah', value:2},
  {label:'bawah', value:2},
  {label:'bawah', value:2},
  {label:'bawah', value:2},
]
let tabs = Array(5).fill('preview');
let form = {
  select :'',
  select2: ''
}
</script>

<main class="p-6 mb-96">
	<h1 class="text-2xl text-center uppercase">SELECT COMPONENTS</h1>
  
	<section class="">
		<!-- SELECT -->
    <section class="bg-base-100 my-5 p-5 card shadow overflow-visible">
      <div class="flex justify-between">
        <h3># Basic Select</h3>
        <Tabs bind:active={tabs[0]}>
          <Tab name=preview>Preview</Tab>
          <Tab name=code>Code</Tab>
        </Tabs>
      </div>
      {#if tabs[0] == 'code' }
        <MockupCode open tiny highlight='html' data={`  
<Select 
  bind:selected={form.select} 
  options={options}
  label="Basic select" 
  placeholder="Basic select" 
  small
></Select>

<Select 
  bind:selected={form.select2}
  options={options} 
  label="Multi Select"
  placeholder="Multi Select"
  multiple
  small
></Select>
        `}/>
      {:else}
        <div class="grid md:grid-cols-3 gap-5 bg-dot p-4">
          <Select 
            bind:selected={form.select} 
            options={options}
            label="Basic select" 
            placeholder="Basic select" 
            small
          ></Select>
      
          <Select 
            bind:selected={form.select2}
            options={options} 
            label="Multi Select"
            placeholder="Multi Select"
            multiple
            small
          ></Select>
        </div>
      {/if}
    </section>

    
		<!-- SELECT SLOT-->
    <section class="bg-base-100 my-5 p-5 card shadow overflow-visible">
      <div class="flex justify-between">
        <h3># Slot Select</h3>
        <Tabs bind:active={tabs[1]}>
          <Tab name=preview>Preview</Tab>
          <Tab name=code>Code</Tab>
        </Tabs>
      </div>
      {#if tabs[1] == 'code' }
        <MockupCode open tiny highlight='html' data={`        
<Select 
  let:opt={opt}
  let:sel={sel}
  options={options} 
  label="Slot Select" 
  placeholder="Slot Select" 
  multiple 
  primary 
  small
>
  <span >
    {JSON.stringify(opt)}
  </span>
  <span slot="selection">
    {JSON.stringify(sel)}
  </span>
</Select>
        `}/>
      {:else}        
        <div class="grid gap-5 bg-dot p-4">      
          <Select 
            let:opt={opt}
            let:sel={sel}
            options={options} 
            label="Slot Select" 
            placeholder="Slot Select" 
            multiple 
            primary 
            small
          >
            <span >
              {JSON.stringify(opt)}
            </span>
            <span slot="selection">
              {JSON.stringify(sel)}
            </span>
          </Select>
        </div>
      {/if}
    </section>
  </section>
</main>
