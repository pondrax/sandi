<script>
	import env from '$lib/variables';
	import { HomeIcon, MenuIcon } from 'svelte-feather-icons';
	import { Button, Drawer } from '$ui';

	export let openSidebar = false;
  let title = 'Kite UI'
</script>

<svelte:head>
	<title>{title}</title>
  <base href="/dev" />
</svelte:head>

<Drawer bind:open={openSidebar} mobile class="">
  <div class="p-2 h-screen">
    <div class="relative h-full bg-base-200 rounded-box overflow-auto">
      <div class="p-2">
        <Button ghost on:click={() => (openSidebar = !openSidebar)} class="btn lg:hidden">
          <MenuIcon size="24" />
        </Button>
      </div>
      <slot />
    </div>
	</div>
	<div slot="menu" class="flex flex-col h-screen py-4 w-72">
      <a href="/" class="px-4 flex gap-2 py-2 text-base-800 text-2xl font-bold mb-5">
        <img src="/favicon.png" alt="icon" class="h-8" />
        { title }
      </a>
      <div class="px-3 overflow-y-auto">
        <ul class=" menu menu-compact">
          <li><a href="/dev/">Components</a></li>
          <!-- <li><a href="/dev/"><HomeIcon size="24" /> Dashboard</a></li> -->
        
          <li></li>
          <li class="menu-title">
            <span>Actions</span>
          </li>
          <li><a href="/dev/components/button">Button</a></li>
          <li><a href="/dev/components/dropdown">Dropdown</a></li>
          <li><a href="/dev/components/modal">Modal</a></li>
          <li><a href="/dev/components/swap">Swap</a></li>
          
          <li></li>
          <li class="menu-title">
            <span>Data Display</span>
          </li>
          <li><a href="/dev/components/alert">Alert</a></li>
          <li><a href="/dev/components/avatar">Avatar</a></li>
          <li><a href="/dev/components/badge">Badge</a></li>
          <li><a href="/dev/components/card">Card</a></li>
          <li><a href="/dev/components/carousel">Carousel</a></li>
          <li><a href="/dev/components/collapse">Collapse</a></li>
          <li><a href="/dev/components/countdown">Countdown</a></li>
          <li><a href="/dev/components/progress">Progress</a></li>
          <li><a href="/dev/components/stat">Stat</a></li>
          <li><a href="/dev/components/table">Table</a></li>
          <li><a href="/dev/components/tooltip">Tooltip</a></li>
          
          <li></li>
          <li class="menu-title">
            <span>Data Input</span>
          </li>
          <li><a href="/dev/components/form">Form</a></li>
          <li><a href="/dev/components/input">Input</a></li>
          <li><a href="/dev/components/number">Number</a></li>
          <li><a href="/dev/components/datepicker">Date Picker</a></li>
          <li><a href="/dev/components/checkbox">Checkbox</a></li>
          <li><a href="/dev/components/radio">Radio</a></li>
          <li><a href="/dev/components/range">Range</a></li>
          <li><a href="/dev/components/rating">Rating</a></li>
          <li><a href="/dev/components/select">Select</a></li>
          <li><a href="/dev/components/textarea">Textarea</a></li>
          <li><a href="/dev/components/texteditor">Texteditor</a></li>
          <li><a href="/dev/components/toggle">Toggle</a></li>
          
          <li></li>
          <li class="menu-title">
            <span>Layout</span>
          </li>
          <li><a href="/dev/components/artboard">Artboard</a></li>
          <li><a href="/dev/components/divider">Divider</a></li>
          <li><a href="/dev/components/drawer">Drawer</a></li>
          <li><a href="/dev/components/footer">Footer</a></li>
          <li><a href="/dev/components/hero">Hero</a></li>
          <li><a href="/dev/components/indicator">Indicator</a></li>
          <li><a href="/dev/components/mask">Mask</a></li>
          <li><a href="/dev/components/stack">Stack</a></li>
          
          <li></li>
          <li class="menu-title">
            <span>Navigation</span>
          </li>
          <li><a href="/dev/components/breadcrumbs">Breadcrumbs</a></li>
          <li><a href="/dev/components/link">Link</a></li>
          <li><a href="/dev/components/menu">Menu</a></li>
          <li><a href="/dev/components/navbar">Navbar</a></li>
          <li><a href="/dev/components/pagination">Pagination</a></li>
          <li><a href="/dev/components/steps">Steps</a></li>
          <li><a href="/dev/components/tab">Tab</a></li>

          <li></li>
          <li class="menu-title">
            <span>Mockup</span>
          </li>
          <li><a href="/dev/components/code">Code</a></li>
          <li><a href="/dev/components/phone">Phone</a></li>
          <li><a href="/dev/components/window">Window</a></li>
        </ul>
      </div>
    </div>
</Drawer>
