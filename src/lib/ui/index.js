import ApexChart from './chart/';
import Alert from './alert/index.svelte';
import Button from './button/';
import ButtonGroup from './button/group.svelte';
import Carousel from './carousel/index.svelte';
import CarouselItem from './carousel/item.svelte';
import Drawer from './drawer/index.svelte';
import Dropdown from './dropdown/index.svelte';
import Input from './input/index.svelte';
import Number from './input/number.svelte';
import Checkbox from './input/checkbox.svelte';
import Radio from './input/radio.svelte';
import Range from './input/range.svelte';
import Toggle from './input/toggle.svelte';
import Imask from './input/input.svelte';
// import _Tab, { Item as _TabItem } from './tab/'
import { Tabs, Tab } from './tab/'
import { Table } from './table'
import Textarea from './input/textarea.svelte';
import MockupCode from './mockup/';
import Select from './select';
import {Portal} from './portal';
import { browser } from '$app/env';

const getTheme = () => {
	if (browser) {
		let name = localStorage.getItem('data-theme') || 'cupcake';
		document.querySelector('html').setAttribute('data-theme', name);
    return name;
	}
};
const setTheme = (name) => {
	if (browser) {
		localStorage.setItem('data-theme', name);
		document.querySelector('html').setAttribute('data-theme', name);
	}
};

getTheme();

export {
  ApexChart,
  Alert,
  Button,
  ButtonGroup,
  Carousel,
  CarouselItem,
  Drawer,
  Dropdown,
  Input,
  Number,
  Checkbox,
  Radio,
  Range,
  Toggle,
  Imask,
  Select,
  Tabs,
  Tab,
  Table,
  Textarea,
  MockupCode,
  Portal,
  setTheme,
  getTheme
}