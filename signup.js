$("#sign-up").click( function(e){
    e.preventDefault();
    const data = {
        name: $("#name").val(),
        email: $("#your-email").val(),
        password: $("#your-password").val()
    }
    console.log(data);
    $.ajax({
        type: 'POST',
        url: 'http://restapi.adequateshop.com/api/authaccount/registration',
        dataType: "jsonp",
        crossDomain: true,
        contentType: "application/json", 
        success: function (data) {
          console.log('data: ', data);
        }
      });
})
$(document).ready(function(){
    $(".form-signup").validate({
        rules: {
            name: "required",
            email: "required",
            password: "required"
        },
        messages: {
            name: "Nhập tên",
            email: "Nhập email",
            password: "Nhập mật khẩu"
        }
    })
});