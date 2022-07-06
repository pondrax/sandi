<script>
  // src/components/Portal.svelte
  import { onMount, onDestroy } from 'svelte'
  import {browser } from '$app/env'

  export let to = null;
  let ref
  let portal
  
  onMount(() => {
    portal = document.createElement('div')
    portal.className = 'portal'
    if(to){
      document.querySelector(to).appendChild(portal)
    }else{
      document.body.appendChild(portal)
    }
    portal.appendChild(ref)
  })
  
  onDestroy(() => {
    if(browser){

      document.body.removeChild(portal)
    }
  })
  
  </script>
  
  <div class="portal-clone">
    <div bind:this={ref}>
      <slot></slot>
    </div>
  </div>
  <style>
    .portal-clone { display: none; }
  </style>