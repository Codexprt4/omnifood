$(document).ready(function () {
  /* Sticky Nav-bar */

  $(".js--section-features").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "60px;",
    }
  );

  $(".js--scroll-to-plans").click(function (e) {
    $("html, body").animate(
      { scrollTop: $(".js--section-plans").offset().top },
      1000
    );
  });
  $(".js--show-me-more").click(function (e) {
    $("html, body").animate(
      { scrollTop: $(".js--section-features").offset().top },
      1000
    );
  });
  /* Jquery Smooth Scrolling Snippet  */
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000,
            function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });
  /* Animation to scroll*/
  $('.js--wp-fade-in').waypoint(function (direction) {
    $('.js--wp-fade-in').addClass('animate__animated animate__fadeIn');
  }, { offset: '50%' });

  $('.js--wp-fade-inUp').waypoint(function (direction) {
    $('.js--wp-fade-inUp').addClass('animate__animated animate__fadeInUp');
  }, { offset: '50%' });

  $('.js--wp-fade-cities').waypoint(function (direction) {
    $('.js--wp-fade-cities').addClass('animate__animated animate__fadeIn');
  }, { offset: '50%' });

  $('.js--wp-fade-plans').waypoint(function (direction) {
    $('.js--wp-fade-plans').addClass('animate__animated animate__pulse');
  }, { offset: '50%' });

  /* Mobile Nav-Bar */
  $('.js--nav-icon').click(function () {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');
    nav.slideToggle(200);

    if (icon.hasClass('ion-navicon-round')) {
      // icon.removeClass('icon-navicon-round');
      $(".js--nav-icon i").attr("class", "ion-close-round");
      // alert(icon.attr("class"));        
      // icon.addClass('icon-close-round');

    } else {

      $(".js--nav-icon i").attr("class", "ion-navicon-round");

    }
  });


  /* GMAP Plugin */
  var map = new GMaps({
    div: '.map',
    lat: 38.7476014,
    lng: -9.05,
    zoom: 12
  });

  map.addMarker({
    lat: 38.72673382384241,
    lng: -9.147159732446225,
    title: 'Lima',
    infoWindow: {
      content: '<p>Lisbon, Our HQ</p>'
    }
  });
  map.drawOverlay({
    lat: 38.7476014,
    lng: -9.05,
    content: '<div class="overlay">Lisbon</div>'
  });


});

/*var waypoints = $('#handler-first').waypoint(function(direction) {
   notify(this.element.id + ' hit 25% from top of window')
  }, {
     offset: '25%'
   })

   var waypoint = new Waypoint({
    element: document.getElementById('direction-waypoint'),
    handler: function(direction) {
      notify('Direction: ' + direction)
    }
  })*/
