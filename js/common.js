$(window).on('scroll', function() {
  var y = $(window).scrollTop(),
    topBar = $('header');
  if (y > 1) {
    topBar.addClass('sticky');
  }
  else {
    topBar.removeClass('sticky');
  }
});

$('.smoothscroll').on('click', function (e) {
e.preventDefault();
var target = this.hash,
  $target = $(target);
  $('html, body').stop().animate({
    'scrollTop': $target.offset().top
  }, 800, 'swing', function () {
    window.location.hash = target;
  });
});

var sections = $("section"),
navigation_links = $(".menu li a");  
sections.waypoint( {
    handler: function(direction) {
    var active_section;
    active_section = $('section#' + this.element.id);
    if (direction === "up") active_section = active_section.prev();
    var active_link = $('.menu a[href="#' + active_section.attr("id") + '"]');     
      navigation_links.parent().removeClass("active");
    active_link.parent().addClass("active");
  }, 
  offset: '50%'
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
  $(".mainmenu").on('click',function(){
    $(this).find(".hamberger").toggleClass("open");
  });
})
$('.add_panel').click(function(){
  $("body").toggleClass("open_panel");
});
$('.add_lang').click(function(){
  $("body").toggleClass("open_lang");
});

$(document).ready(function(){
  $('.slider').slick({
    fade: true,
    slidesToShow: 1,
    draggable: true,
    arrows: true,
    dots: true,
    speed: 1000,
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

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var modal = document.getElementById("myModal_a");
var btn = document.getElementById("myBtn_a");
var span = document.getElementsByClassName("close_a")[0];

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var modal = document.getElementById("myModal_b");
var btn = document.getElementById("myBtn_b");
var span = document.getElementsByClassName("close_b")[0];

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
