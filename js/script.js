$(window).on("load", function () {

    $(".loader .inner").fadeOut(200, function () {
        $(".loader").fadeOut(450);
    });

    var $container = $('.items');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });

})

$(document).ready(function () {

    $('#slides').superslides({
        animation: 'fade',
        play: 2500,
        pagination: false
    });

    var typed = new Typed(".typed", {
        strings: ["Python developer", "Web developer","Logo designer"],
        typeSpeed: 50,
        loop: true,
        startDelay: 400,
        showCursor: false

    });

    var skillsTopOffset = $(".skillsSection").offset().top;
    var statsTopOffset = $(".statsSection").offset().top;
    var countUpFinished = false;

    $(window).scroll(function () {

        if (!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
            $(".counter").each(function () {
                var element = $(this);
                var endVal = parseInt(element.text());

                element.countup(endVal);
            })

            countUpFinished = true;


        }


    });

    $("[data-fancybox]").fancybox();

    $("#filters a").click(function () {
        $('#filters .current').removeClass('current');
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");

        var $container = $('.items');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });

        return false;
    });

    $("#navigation li a").click(function (e) {
        e.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({ scrollTop: targetPosition - 80 }, "slow");

    });

    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation() {

        var body = $("body");

        if ($(window).scrollTop() >= navTop) {
            body.css("padding-top", nav.outerHeight() + "px");
            body.addClass("fixedNav");
        }
        else {
            body.css("padding-top", 0);
            body.removeClass("fixedNav");
        }




    }

});
document.querySelector('#now').addEventListener('click', () => {
    document.querySelector('#ex').classList.remove('exp');
});

document.querySelector('#now').addEventListener('click', () => {
    document.querySelector('#pr').classList.add('exp');
});
document.querySelector('#now1').addEventListener('click', () => {
    document.querySelector('#pr').classList.remove('exp');
});

document.querySelector('#now1').addEventListener('click', () => {
    document.querySelector('#ex').classList.add('exp');
});






document.querySelector('#now').addEventListener('click', () => {
    document.querySelector('#now1').classList.remove('current');
});

document.querySelector('#now').addEventListener('click', () => {
    document.querySelector('#now').classList.add('current');
});
 
document.querySelector('#now1').addEventListener('click', () => {
    document.querySelector('#now').classList.remove('current');
});

document.querySelector('#now1').addEventListener('click', () => {
    document.querySelector('#now1').classList.add('current');
});

document.querySelector('#image').addEventListener('click', () => {
    document.querySelector('#foo').classList.add('myClass');
});

$(document).ready(function(){
    $("#image").hover(function(){
      $("#foo").css("border", "2px dashed red");
      }, function(){
      $("#foo").css("border", "2px dashed black");
    });
  });
  $(document).ready(function(){
    $("#about").hover(function(){
      $("#foo").css("border", "2px dashed red");
      }, function(){
      $("#foo").css("border", "2px dashed black");
    });
  });

  document.querySelector('#image1').addEventListener('click', () => {
    document.querySelector('#skills1').classList.add('myClass');
});
  $(document).ready(function(){
    $("#image1").hover(function(){
      $("#skills1").css("border", "2px dashed red");
      }, function(){
      $("#skills1").css("border", "2px dashed black");
    });
  });
  $(document).ready(function(){
    $("#skhd").hover(function(){
      $("#skills1").css("border", "2px dashed red");
      }, function(){
      $("#skills1").css("border", "2px dashed black");
    });
  });

  document.querySelector('#image2').addEventListener('click', () => {
    document.querySelector('#stat').classList.add('myClass');
});
$(document).ready(function(){
    $("#image2").hover(function(){
      $("#stat").css("border", "2px dashed red");
      }, function(){
      $("#stat").css("border", "2px dashed black");
    });
  });
  $(document).ready(function(){
    $("#stats").hover(function(){
      $("#stat").css("border", "2px dashed red");
      }, function(){
      $("#stat").css("border", "2px dashed black");
    });
  });
  document.querySelector('#image3').addEventListener('click', () => {
    document.querySelector('#cont').classList.add('myClass');
});
$(document).ready(function(){
    $("#image3").hover(function(){
      $("#cont").css("border", "2px dashed red");
      }, function(){
      $("#cont").css("border", "2px dashed black");
    });
  });
  $(document).ready(function(){
    $("#contact").hover(function(){
      $("#cont").css("border", "2px dashed red");
      }, function(){
      $("#cont").css("border", "2px dashed black");
    });
  });


  function copyToClipboard(element) {
    $(element).select();
    document.execCommand("copy");
}