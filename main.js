






  
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
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


 
 // $(".main-navigation a[href*=\\#]:not([href=\\#])").on("click",function()
   //{if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var t=$(this.hash);
     //if(t=t.length?t:$("[name="+this.hash.slice(1)+"]"),t.length)return $("html,body").animate({scrollTop:t.offset().top},500),!1}}),
     
     
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


