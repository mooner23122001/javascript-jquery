
let first_name = document.getElementById("first-name");
let last_name = document.getElementById("last-name");
let birth_date = document.getElementById("birth-date-form");
let gender_male = document.getElementById("male");
let gender_female = document.getElementById("female");
let gender_others = document.getElementById("others");
let select_section = document.getElementById("inputGroupSelect01");
let o_radio = document.getElementById("o-radio");
let a_radio = document.getElementById("a-radio");
let guardian_name = document.getElementById("guardian-name");
let guardian_contact = document.getElementById("guardian-contact");
let error_first_name = document.getElementById("error-first-name");
let error_last_name = document.getElementById("error-last-name");
let error_birth_date = document.getElementById("error-birth-date");
let error_gender = document.getElementById("error-gender");
let error_select_section = document.getElementById("error-select-section");
let error_apply_class = document.getElementById("error-apply-class");
let error_guardian_name = document.getElementById("error-guardian-name");
let error_guardian_contact = document.getElementById("error-guardian-contact");
document.getElementsByClassName("button-submit")[0].onclick =
    function () {
        if (first_name.value == "") {
            error_first_name.style.display = "block";
            first_name.style.border = "1px solid red";
        }
        if (!last_name.value) {
            error_last_name.style.display = "block";
            last_name.style.border = "1px solid red";
        }
        if (!birth_date.value) {
            error_birth_date.style.display = "block";
            birth_date.style.border = "1px solid red";
        }
        if (select_section.value == "- Select -") {
            select_section.style.border = "1px solid red";
            error_select_section.style.display = "block";
        }
        if (!guardian_name.value) {
            guardian_name.style.border = "1px solid red";
            error_guardian_name.style.display = "block";
        }
        if (!guardian_contact.value) {
            guardian_contact.style.border = "1px solid red";
            error_guardian_contact.style.display = "block";
        }
        if (!(gender_male.checked || gender_female.checked || gender_others.checked)) {

            document.getElementsByClassName("form-check-label")[0].style.color = "red";
            document.getElementsByClassName("form-check-label")[1].style.color = "red";
            document.getElementsByClassName("form-check-label")[2].style.color = "red";
            error_gender.style.display = "block";
        }       
        if (!(o_radio.checked || a_radio.checked)) {
            document.getElementsByClassName("form-check-label")[3].style.color = "red";
            document.getElementsByClassName("form-check-label")[4].style.color = "red";
            error_apply_class.style.display = "block";
        }
        // if (!(customfile.files.length>2)||!(customfile.files.length<=10)) {
        //     error_custom_file.style.display = "block";
        // }
        // if (!customfile.files.length) {
        //     error_custom_file.style.display = "block";
        // }
    }
function valid_firstname() {
    if (first_name.value) {
        first_name.style.border = "1px solid gray";
        error_first_name.style.display = "none";
    }
}
function valid_lastname() {
    if (last_name.value) {
        last_name.style.border = "1px solid gray";
        error_last_name.style.display = "none";
    }
}
function valid_birthdate() {
    if (birth_date.value) {
        birth_date.style.border = "1px solid gray";
        error_birth_date.style.display = "none";
    }
}
function valid_select() {
    if (select_section.value != "- Select -") {
        select_section.style.border = "1px solid gray";
        error_select_section.style.display = "none";
    }
}
function valid_guardian_name() {
    if (guardian_name.value) {
        guardian_name.style.border = "1px solid gray";
        error_guardian_name.style.display = "none";
    }
}
function valid_guardian_contact() {
    if (guardian_contact.value) {
        guardian_contact.style.border = "1px solid gray";
        error_guardian_contact.style.display = "none";
    }
}


function valid_o_radio() {
    if (o_radio.checked) {
        document.getElementsByClassName("form-check-label")[3].style.color = "black";
        document.getElementsByClassName("form-check-label")[4].style.color = "black";
        error_apply_class.style.display = "none";
    }
}
function valid_a_radio() {
    if (a_radio.checked) {
        document.getElementsByClassName("form-check-label")[3].style.color = "black";
        document.getElementsByClassName("form-check-label")[4].style.color = "black";
        error_apply_class.style.display = "none";
    }
}


// Array.prototype.forEach.call(document.getElementsByClassName("check-box"),function (element ) {
//         element.onchange =
//     function(){
//         if(element.checked) {
//             document.getElementsByClassName("form-check-label")[0].style.color = "black";
//             document.getElementsByClassName("form-check-label")[1].style.color = "black";
//             document.getElementsByClassName("form-check-label")[2].style.color = "black";
//             error_gender.style.display = "none";
//         }}
        
//     });
    
    let gender_by_checkbox = document.getElementsByClassName("check-box")
    for (let i=0; i<gender_by_checkbox.length; i++){
    gender_by_checkbox[i].onchange =
    function(){
        if(gender_by_checkbox[i].checked) {
            document.getElementsByClassName("form-check-label")[0].style.color = "black";
            document.getElementsByClassName("form-check-label")[1].style.color = "black";
            document.getElementsByClassName("form-check-label")[2].style.color = "black";
            error_gender.style.display = "none";
        }
}  
}
let arr=[];
let chooseFile = document.getElementById("choose-file");
let list_file = document.getElementById("list-file");

function show_list(arr){
    arr.forEach(function(value,index){
        const div_element = document.createElement("div");
        const stt = document.createElement("p");
        const file_name = document.createElement("p");
        const file_size = document.createElement("p");
        const button_delete = document.createElement("button");
        div_element.className="d-flex";
        stt.className="px-3";
        file_name.className="px-3";
        file_size.className="px-3";
        button_delete.setAttribute("onclick","delete_file(" + index + ")");
        stt.innerHTML = index+1 +".";
        file_name.innerHTML = "File Name: "+ value.name;
        if((value.size/1024).toFixed()>100){
            div_element.className="d-flex text-danger";
        }
        file_size.innerHTML = "Size: "+ (value.size/1024).toFixed() +" (kb)";
        button_delete.innerHTML = "x";
        list_file.append(div_element)
        div_element.append(stt, file_name, file_size, button_delete)
    })
}
chooseFile.onchange =
    function (){
        if(chooseFile.files.length !=0){
            arr.push(chooseFile.files[0])
            console.log(arr)
        }
        delete_allfile(list_file);
        show_list(arr);

        // while(list_file.hasChildNodes()){
        //     list_file.removeChild(list_file.firstChild);
        // }
        // arr.forEach(function(value,index){
        //     const div_element = document.createElement("div");
        //     const stt = document.createElement("p");
        //     const file_name = document.createElement("p");
        //     const file_size = document.createElement("p");
        //     const button_delete = document.createElement("button");
        //     div_element.className="d-flex";
        //     stt.className="px-3";
        //     file_name.className="px-3";
        //     file_size.className="px-3";
        //     button_delete.setAttribute("onclick","delete_file(" + index + ")");
        //     stt.innerHTML = index+1 +".";
        //     file_name.innerHTML = "File Name: "+ value.name;
        //     if((value.size/1024).toFixed()>100){
        //         div_element.className="d-flex text-danger";
        //     }
        //     file_size.innerHTML = "Size: "+ (value.size/1024).toFixed() +" (kb)";
        //     button_delete.innerHTML = "x";
        //     list_file.append(div_element)
        //     div_element.append(stt, file_name, file_size, button_delete)
        // })
    }
function delete_file(kt){
    arr.splice(kt,1)
    delete_allfile(list_file);
    show_list(arr);
}
function delete_allfile(list_file){
    while(list_file.hasChildNodes()){
        list_file.removeChild(list_file.firstChild);
    }
}
