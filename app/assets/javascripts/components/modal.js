
$(document).on('turbolinks:load', function () {
  // MODAL *****************************
  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the button that opens the modal
  var buttons = document.getElementsByClassName('modal-btn');

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close");

  // When the user clicks on one of the dropdown buttons, open the modal 
  for (var i = 0, len = buttons.length; i < len; i++) {
    buttons[i].onclick = function () {
      modal.style.display = "flex";
    }
  }

  // When the user clicks on <span> (x), close the modal
  for (var i = 0, len = span.length; i < len; i++) {
    span[i].onclick = function () {
      modal.style.display = "none";
    }
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }


  /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
  document.getElementById('icon').onclick = function () {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

});