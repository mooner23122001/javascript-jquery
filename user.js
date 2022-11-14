$(".form-add-user").validate({
    rules: {
        firstname: "required",
        lastname: "required",
        age: "required",
    },
    messages: {
        firstname: "Nhập họ",
        lastname: "Nhập tên",
        age: "Nhập số tuổi",
    }
})
$("#sign-up").click(function (e) {
    e.preventDefault();
    const action = $("#action").val();
    if (action == "add") {
        if ($(".form-add-user").valid()) {
            html = '';
            fetch('https://dummyjson.com/users/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({
                    firstName: $("#first-name").val(),
                    lastName: $("#last-name").val(),
                    age: $("#your-age").val()
                })
            })
                .then(res => res.json())
                .then(res => {
                    console.log(res)
                    html += `<tr>
                    <th scope="row">${res.id}</th>;
                    <td>${res.firstName}</td>;
                    <td><button class="border-0" onclick = "fix(this)">chỉnh sửa</button></td>;
                    <td><button class="border-0" onclick ="deleteUser(this)">x</button></td>;
                  </tr>`
                    $("#show-infor").append(html);
                });
        }
    }
    else {
        if ($(".form-add-user").valid()) {
            const id = $("#check-id").val()
            fetch(`https://dummyjson.com/users/${id}`, {
                method: 'PUT', /* or PATCH */
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    firstName: $("#first-name").val(),
                    lastName: $("#last-name").val(),
                    age: $("#your-age").val()
                })
            })
                .then(res => res.json())
                .then(res => console.log(res));
        }
    }
})
let html = '';
fetch('https://dummyjson.com/users')
    .then(res => res.json())
    .then(res => {
        res.users.forEach((val, index) => {
            html += `<tr>
            <th scope="row">${index + 1}</th>
            <td>${val.firstName}</td>
            <td><button class="border-0" id="${val.id}" onclick = "fix(this)">chỉnh sửa</button></td>
            <td><button class="border-0" id="delete_${val.id}" onclick ="deleteUser(this)">x</button></td>
          </tr>`
        })
        $("#show-infor").empty();
        $("#show-infor").append(html);
    }
    )

function fix(e) {
    $("#action").val("edit");
    $("#check-id").val(e.id);
    $("#sign-up").html("Update");
    $("#exampleModalLabel").html("Update user")
    // console.log(e.id)
    // console.log($("#action").val());
    fetch(`https://dummyjson.com/users/${e.id}`)
        .then(res => res.json())
        .then(res => {
            // console.log(res)
            $("#first-name").val(res.firstName);
            $("#last-name").val(res.lastName);
            $("#your-age").val(res.age);
            $("#Add-user-modal").modal("show");
        })
}
$("#modal-add").click(function () {
    $("#action").val("add");
    // console.log($("#action").val());
    $("#sign-up").html("Add");
    $("#exampleModalLabel").html("Add a user")
})
function deleteUser(e) {
    const id = e.id.slice(7)
    fetch(`https://dummyjson.com/users/${id}`, {
        method: 'DELETE',
    })
        .then(res => res.json())
        .then(res => console.log(res));
}
$("#search-input").keypress(function(e){
    html = '';
    fetch(`https://dummyjson.com/users/search?q=${this.value}`)
    .then(res => res.json())
    .then(res =>{
        console.log(res)
        res.users.forEach((val, index) => {
            html += `<tr>
            <th scope="row">${index + 1}</th>;
            <td>${val.firstName}</td>;
            <td><button class="border-0" id="${val.id}" onclick = "fix(this)">chỉnh sửa</button></td>;
            <td><button class="border-0" id="delete_${val.id}" onclick ="deleteUser(this)">x</button></td>;
          </tr>`
        })
        $("#show-infor").empty();
        $("#show-infor").append(html);
    });
})