






  
$(document).ready(function(){
  $("a").on('click', function(event) {

    
    if (this.hash !== "") {
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


 
 
     
     
 $(".newsletter").on("submit","form",
 function(t){t.preventDefault();var e=$("#your-email");
 0!==e.val().length?(alert("Thanks for subscribing!"),
 e.val("")):alert("Please submit a valid email address.")})
    

 $('.product-list').flickity({
  cellAlign: 'left',
  percentPosition:!1,
  autoPlay:!0,
  imagesLoaded:!0,
  prevNextButtons:!1,
  contain:!0,
  contain: true
});   

// Fix "Skip Link" Focus in Webkit
$(function() {
   $("a[href^='#']").not("a[href='#']").click(function() {
      $("#"+$(this).attr("href").slice(1)+"").focus();
   });
});


