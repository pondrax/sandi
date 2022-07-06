<script>
  setTimeout(()=>{
    location.href = '{{url("/auth/$provider")}}'
  },3000)
</script>

<h3>{{$message}}</h3>