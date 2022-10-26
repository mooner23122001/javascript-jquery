// $(document).ready(()=>{
//     $(".submit-admission").click((function(){
//         if(!($("#first-name").val())){
//             $(".error").html("This field is required");
//             $("#first-name").css("border","1px solid red");
//         }
//     }))
// });

function foul(key,value,error){
    if(key.val() == value){
      error.html("This field is required");
      key.css("border","1px solid red");
    }
}
function blur_event(key2,error2){
    if(key2.val()){
        error2.html("");
        key2.css("border","1px solid black");
      }
  }
$(document).ready(()=>{
    $(".submit-admission").click(function(){
        foul($("#first-name"),"",$("#error-first-name"));
        foul($("#last-name"),"",$("#error-last-name"));
        foul($("#birth-date-form"),"",$("#error-birth-date"));
        foul($("#guardian-name"),"",$("#error-guardian-name"));
        foul($("#guardian-contact"),"",$("#error-guardian-contact"));
    })
    $(".form-control").blur(function(){
        blur_event($("#first-name"),$("#error-first-name"));
        blur_event($("#last-name"),$("#error-last-name"));
        blur_event($("#birth-date-form"),$("#error-birth-date"));
        blur_event($("#guardian-name"),$("#error-guardian-name"));
        blur_event($("#guardian-contact"),$("#error-guardian-contact"));
    })
});