$("#login").click( function(e){
    e.preventDefault();
    const data = {
        email: $("#your-email").val(),
        password: $("#your-password").val()
    }
    console.log(data);
    $.ajax({
        type: 'POST',
        url: 'http://restapi.adequateshop.com/api/authaccount/login',
        dataType: "jsonp",
        crossDomain: true,
        contentType: "application/json", 
        success: function (data) {
          console.log('data: ', data);
        }
      });
})
