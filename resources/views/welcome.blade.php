<html>
<head>
  <title>Test</title>
</head>
<body>
  <script src="https://unpkg.com/axios@0.26.1/dist/axios.min.js"></script>
  <script>
    axios.get('/sanctum/csrf-cookie').then(r=>{
      axios.post('/login');
    })
  </script>
</body>
</html>