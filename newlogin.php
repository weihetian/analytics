<html>
<head>
  <script type="text/javascript"></script>
  <title>AJAX TEST</title>
  <style type = "text/css">
  #loginbox{
    width: 240px;
    height: 140px;
    margin: 0px auto;
    margin-top: 300px;
  }
  </style>
</head>
<body>
  <form id = "loginbox" action="loginphp.php" method = "POST">
    <input id="username" name='username' type = "text" placeholder = "username"/>
    <br>
    <input id="password"  name='password' type = "password" placeholder = "password"/>
    <br>
    <button>Sign in</button>
  </form>
</body>
</html>
