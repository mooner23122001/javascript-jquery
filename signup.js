$(".form-signup").validate({
    rules: {
        name: "required",
        email: "required",
        password: "required",
    },
    messages: {
        name: "Nhập tên",
        email: "Nhập email",
        password: "Nhập mật khẩu",
    }
})
$("#sign-up").click( function(e){
e.preventDefault();
 if( $(".form-signup").valid()){
const data = {
    name: $("#name").val(),
    email: $("#your-email").val(),
    password: $("#your-password").val()
}
console.log(data);
// $.ajax({
//     type: 'POST',
//     // headers: {  'Access-Control-Allow-Origin': 'http://restapi.adequateshop.com',
//     // 'Origin':'http://restapi.adequateshop.com',
//     // 'Content-Type':'application/json'
// //  },
//     url: 'http://restapi.adequateshop.com/api/authaccount/registration',
//     data,
//     success: function (data) {
//         console.log('data: ', data);
//     }
// });
fetch('https://dummyjson.com/users/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    data,
})
})
.then(res => res.json())
.then(console.log);
}
})
