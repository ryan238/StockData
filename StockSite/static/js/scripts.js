$(document).ready(function() {

  $("form[name=login_form").submit(function(e) {
      e.preventDefault();
      var $form = $(this);
      var $error = $form.find(".error");
      var data = $form.serialize();
    
      $.ajax({
        url: "/user/login/",
        type: 'POST',
        data: data,
        dataType: "json",
        success: function(resp) {
          window.location = "/dashboard/";
          },
         error: function(resp) {
          $error.text(resp.responseJSON.error).removeClass("error--hidden");
        }
      });
      e.preventDefault();
    });
  }); 
  
  








$(document).ready(function() {

$("form[name=signup_form").submit(function(e) {
    e.preventDefault();
    var $form = $(this);
    var $error = $form.find(".error");
    var data = $form.serialize();
  
    $.ajax({
      url: "/user/signup/",
      type: "POST",
      data: data,
      dataType: "json",
      success: function(resp) {
        window.location = "/dashboard/";
        },
       error: function(resp) {
        $error.text(resp.responseJSON.error).removeClass("error--hidden");
      }
    });
    e.preventDefault();
  });
}); 
