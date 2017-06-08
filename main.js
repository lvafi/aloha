$(function () {
  //initialized Flickity
  $('.product-list').flickity({
    cellAlign: 'left',
    percentPosition: !1,
    autoPlay: !0,
    imagesLoaded: !0,
    prevNextButtons: !1,
    contain: !0,
    contain: true
  });
  //Smooth Scrolling
  $('nav a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
  //alert box for email list
  $('form button').on('click',
    function (t) {
      t.preventDefault();
      var e = $("#your-email");
      0 !== e.val().length ? (alert("Thanks for subscribing!"),
        e.val("")) : alert("Please submit a valid email address.")
    })

});