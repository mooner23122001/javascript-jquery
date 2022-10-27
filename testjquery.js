function foul_text(key,value,error){
    if(key.val() == value){
      error.html("This field is required");
      key.css("border","1px solid red");
    }
}
function foul_check(key1,label1,error1){
    if(key1.prop("checked")==false){
        label1.css("color","red");
        error1.html("This field is required");
    }
}
function blur_event(key2,error2){
    if(key2.val()){
        error2.html("");
        key2.css("border","1px solid black");
      }
  }
function onchange_event(key3,label3,error3){
    if(key3.prop("checked")==true){
        label3.css("color","black");
        error3.html("");
    }
}
$(document).ready(()=>{
    $(".submit-admission").click(function(){
        foul_text($("#first-name"),"",$("#error-first-name"));
        foul_text($("#last-name"),"",$("#error-last-name"));
        foul_text($("#birth-date-form"),"",$("#error-birth-date"));
        foul_text($("#inputGroupSelect01"),"- Select -",$("#error-select-section"));
        foul_text($("#guardian-name"),"",$("#error-guardian-name"));
        foul_text($("#guardian-contact"),"",$("#error-guardian-contact"));
        foul_check($(".check-box"),$(".label-checkbox"),$("#error-gender"));
        foul_check($(".check-radio"),$(".label-radio"),$("#error-applyclass"));
    })
    $(".form-control").blur(function(){
        blur_event($("#first-name"),$("#error-first-name"));
        blur_event($("#last-name"),$("#error-last-name"));
        blur_event($("#birth-date-form"),$("#error-birth-date"));
        blur_event($("#guardian-name"),$("#error-guardian-name"));
        blur_event($("#guardian-contact"),$("#error-guardian-contact"));
    })
    $(".form-check-input").change(function(){
        onchange_event($(".check-box"),$(".label-checkbox"),$("#error-gender"));
        onchange_event($(".check-radio"),$(".label-radio"),$("#error-applyclass"));
    })
    $("#inputGroupSelect01").change(function(){
        if($("#inputGroupSelect01").val()!="- Select -"){
            $("#inputGroupSelect01").css("border","1px solid black");
            $("#error-select-section").html("");
        }
    })
});


