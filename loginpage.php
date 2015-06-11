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
  <div id = "loginbox">
    <input id="username" type = "text" placeholder = "username"/>
    <br>
    <input id="password" type = "password" placeholder = "password"/>
    <br>
    <button>Sign in</button>
  </div>

  <script type ="text/javascript">
  $("button").click(function(){
    var username = $("#username").val();
    var password = $("#password").val();

    $.ajax({
      type: 'POST',
      url: '',
      data: {
        'login':username,
        'password':password
      }
      success:{

      }
    })
  })
  </script>
</body>
</html>
