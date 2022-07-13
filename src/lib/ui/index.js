import { browser } from '$app/env';

import { ApexChart } from './chart/';

import { Alert } from './alert/';
import { Button, ButtonGroup } from './button/';
import { Carousel, CarouselItem } from './carousel/';
import { Drawer } from './drawer/';
import { Dropdown } from './dropdown/';
import { Checkbox, Input, Number, Password, Radio, Range, Textarea, Toggle } from './form/';
import { Tabs, Tab } from './tab/'
import { Table } from './table'
import { MockupCode } from './mockup/';
import { Select } from './select';
import { Portal } from './portal';


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

  Checkbox,
  Input,
  Number,
  Password,
  Radio,
  Range,
  Toggle,
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