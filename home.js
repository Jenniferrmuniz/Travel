
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    $(".zoom img").css({
      transform: 'translate3d(-50%, -' + (scroll / 100) + '%, 0) scale(' + (100 + scroll / 5) / 100 + ')',
      //Blur suggestion from @janwagner: https://codepen.io/janwagner/ in comments
      //"-webkit-filter": "blur(" + (scroll/200) + "px)",
      //filter: "blur(" + (scroll/200) + "px)"
    });
  });
  
  
  
  
  
  
  
  
  // Wrap every letter in a span
  var textWrapper = document.querySelector('.ml2');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  
  anime.timeline({loop: true})
    .add({
      targets: '.ml2 .letter',
      scale: [4,1],
      opacity: [0,1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 3000,
      delay: (el, i) => 70*i
    }).add({
      targets: '.ml2',
      opacity: 0,
      duration: 3000,
      easing: "easeOutExpo",
      delay: 3000
    });
  
  
  
  