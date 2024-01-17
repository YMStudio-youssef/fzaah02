$(document).ready(function() {
  // Function to toggle responsive menu
  function toggleMenu() {
    $(".responsive-menu").slideToggle();
  }

  // Event listener for menu icon click
  $(".menu-bar").click(function() {
    toggleMenu();
  });
});