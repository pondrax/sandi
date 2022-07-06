<script>
  import {onMount} from 'svelte';
  import axios from 'axios';
  import Pusher from 'pusher-js';
  import {MockupCode} from '$ui'

  let msg = 'No msg';
  let responseData = {};
  // Pusher.logToConsole = true;
    
  var pusher = new Pusher('c74de4efb08087148359', {
    cluster: 'ap1'
  });
    
  var channel = pusher.subscribe('my-channel');
  channel.bind('my-event', function(message) {
    msg = message.message;
    responseData = message.data;
    console.log(message, responseData);
  });
  
  onMount(()=>{
    window.axios = axios;
  })
</script>

<div>Hello World</div>
<h1>{msg}</h1>
<MockupCode open tiny highlight='js' data={responseData}/>