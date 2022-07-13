<script>
import { Select } from '$lib/ui';

let options = [
  {label:'longghasgavhasgh', value:1},
  {label:'2longghasgavhasgh', value:2}
]
</script>

<div id="main" class="p-6">
  <Select options={options} placeholder="select" primary small></Select>
  <Select options={options} placeholder="select" multiple primary small></Select>
</div>