$("#menuicon").click(function() {
    $( ".navlink" ).slideToggle( "slow", function() {
       
    });
  });
  

$("#wabtn").click(function(){
  $(".wamodal").show();
})


$("#closewamodal").click(function(){
  $(".wamodal").hide();
})




//logo slider

$('.logos-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  arrows: false,
  dots: false,
  pauseOnHover: false,
  responsive: [{
  breakpoint: 768,
  settings: {
  slidesToShow: 3
  }
  }, {
  breakpoint: 520,
  settings: {
  slidesToShow: 2
  }
  }]
  });