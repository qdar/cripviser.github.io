$(document).ready(function() {
  $("a.scrollto").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

$(document).ready(function(){
  $('.slider').slick({
    fade: true,
    slidesToShow: 1,
    draggable: true,
    arrows: true,
  });
});
$(function () {
  $("#contactform").validate({
    rules: {
      user_name: {
          required: true,
          normalizer: function (value) {
              return $.trim(value);
          }
      },
      user_company: {
          required: true,
          normalizer: function (value) {
              return $.trim(value);
          }
      },
      user_phone: {
          required: true,
          normalizer: function (value) {
              return $.trim(value);
          }
      },
      user_mail: {
          required: true,
          email: true,
          normalizer: function (value) {
              return $.trim(value);
          }
      },
      user_message: {
          required: true,
          normalizer: function (value) {
              return $.trim(value);
          }
      },
    },
    submitHandler: function (form) {
      $.ajax({
          type: "POST",
          url: 'sendmail.php',
          data: {
              user_name: $('#name').val(),
              user_company: $('#company').val(),
              user_mail: $('#mail').val(),
              user_phone: $('#phone').val(),
              user_message: $('#msg').val()
          },
          success: function (response) {
              $('#contactform').hide();
              $('#contactform-success').show();
          },
          dataType: 'text'
      })
    }
  });
});