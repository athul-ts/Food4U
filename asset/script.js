// document.addEventListener("DOMContentLoaded", function(){

//     el_autohide = document.querySelector('.autohide');
    
//     // add padding-top to bady (if necessary)
//     navbar_height = document.querySelector('.navbar').offsetHeight;
//     // document.body.style.paddingTop = navbar_height + 'px';
  
//     if(el_autohide){
//       var last_scroll_top = 0;
//       window.addEventListener('scroll', function() {
//             let scroll_top = window.scrollY;
//            if(scroll_top < last_scroll_top) {
//                 el_autohide.classList.remove('scrolled-down');
//                 el_autohide.classList.add('scrolled-up');
//                 // el_autohide.classList.add('bg-dark', 'shadow');
//             }
//             else {
//                 el_autohide.classList.remove('scrolled-up');
//                 el_autohide.classList.add('scrolled-down');
//                 // el_autohide.classList.remove('bg-dark', 'shadow');
//             }
//             last_scroll_top = scroll_top;
//       }); 
//       // window.addEventListener
//     }
//     // if
  
//   }); 
//   // DOMContentLoaded  end





  var nav = document.querySelector('.navbar');

      window.addEventListener('scroll', function () {
        if (window.pageYOffset > 100) {
          nav.classList.add('bg-white', 'shadow');
        } else {
          nav.classList.remove('bg-white', 'shadow');
        }
      });