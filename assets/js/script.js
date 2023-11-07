// JavaScript For Dropdown Menu

$(document).ready(function () {
  $(".sub-btn").click(function () {
    $(this).next(".sub-menu").slideToggle();
    $(this).toggleClass("active");
    $(this).find(".dropdown").toggleClass("rotate");
  });
});
