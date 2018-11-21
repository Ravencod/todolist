
$(document).on('turbolinks:load', function () {
  // ***************************************************
  // Carousel
  jQuery(function ($) {

    // settings
    var $slider = $('.slider'); // class or id of carousel slider
    var $slide = 'li'; // could also use 'img' if you're not using a ul
    var $transition_time = 500; // 0.5 second
    var $time_between_slides = 4500; // 4.5 seconds
    var $next = $("#btn-next");
    var $previous = $("#btn-previous");
    var $miniSlider = $('.ul-mini')
    var $miniSlide = ".mini-circle";

    function slides() {
      return $slider.find($slide);
    };
    // for miniatures
    function minis() {
      return $miniSlider.find($miniSlide);
    };

    slides().fadeOut();

    // set active classes
    minis().first().addClass('mini-active');
    slides().first().addClass('active');
    slides().first().fadeIn($transition_time);

    // Next image function
    $goNext = function () {
      var $i = $slider.find($slide + '.active').index();

      slides().eq($i).removeClass('active');
      slides().eq($i).fadeOut($transition_time);
      minis().eq($i).removeClass('mini-active');

      if (slides().length == $i + 1) $i = -1; // loop to start

      slides().eq($i + 1).fadeIn($transition_time);
      slides().eq($i + 1).addClass('active');
      minis().eq($i + 1).addClass('mini-active');
    };

    // Previous image function
    $goPrevious = function () {
      var $i = $slider.find($slide + '.active').index();

      slides().eq($i).removeClass('active');
      slides().eq($i).fadeOut($transition_time);
      minis().eq($i).removeClass('mini-active');

      if ($i == 0) $i = slides().length; // loop to start

      slides().eq($i - 1).fadeIn($transition_time);
      slides().eq($i - 1).addClass('active');
      minis().eq($i - 1).addClass('mini-active');
    };

    // auto scroll
    $interval = setInterval(
      $goNext
      , $transition_time + $time_between_slides
    );

    // Next button
    $next.on('click', $goNext);

    // Previous button
    $previous.on('click', $goPrevious);

    // clickable miniatures
    $miniSlider.on('click', function (event) {
      var $j = event.target.id;
      var $i = $slider.find($slide + '.active').index();

      slides().eq($i).removeClass('active');
      slides().eq($i).fadeOut($transition_time);
      minis().eq($i).removeClass('mini-active');

      slides().eq($j).fadeIn($transition_time);
      slides().eq($j).addClass('active');
      minis().eq($j).addClass('mini-active');
      $(event.target).removeClass('clicked');
    });
  });

});