  $(".form-signin").validate({
      rules: {
          email: "required",
          password: "required",
      },
      messages: {
          email: "Nhập email",
          password: "Nhập mật khẩu",
      }
  });
$("#login").click( function(e){
    e.preventDefault();
    if($(".form-signin").valid()){
      const data = {
        email: $("#your-email").val(),
        password: $("#your-password").val()
    }
    $.ajax({
      type: 'POST',
      url: 'http://restapi.adequateshop.com/api/authaccount/login',
      data,
      success: function (data) {
          console.log('data: ', data);
      }
    });
    }
   
})
