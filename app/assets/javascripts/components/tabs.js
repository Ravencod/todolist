
$(document).on('turbolinks:load', function () {
  // Tabs
  $("#content div").hide(); // Initially hide all content
  $("#tabs li:first").attr("id", "current"); // Activate first tab
  $("#content div:first").fadeIn(); // Show first tab content
  $('#tabs li a').click(function (e) {
    e.preventDefault();
    if ($(this).attr("id") == "current") { //detection for current tab
      return
    }
    else {
      $("#content div").hide(); //Hide all content
      $("#tabs li").attr("id", ""); //Reset id's
      $(this).parent().attr("id", "current"); // Activate this
      $($(this).attr('href')).fadeIn(); // Show content for current tab
    }
  });

});