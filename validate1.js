$.validator.addMethod("valueNotEquals", function(value, element, arg){
    return arg !== value;
   },
);
$(document).ready(function(){
        $(".text-infor").validate({
            rules: {
                firstname: "required",
                lastname: "required",
                birthday: "required",
                guardian_name: {
                    required: true,
                    minlength: 3
                },
                guardian_contact: "required",
                select_form: {
                    valueNotEquals: "- Select -"
                },
            },
            messages: {
                firstname: "Nhập cái tên vào",
                lastname: "Nhập cái họ vào",
                birthday: "Mày đẻ ngày nào?",
                guardian_name: {
                    required: "Nhập tên người giám hộ",
                    minlength: "Nhập cho đủ 3 chữ đê"
                },
                guardian_contact: "Nhập vào",
                select_form: {
                    valueNotEquals: "Chọn section"
                },
            }
        })
});
