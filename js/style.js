$(document).ready(function(){
        
    $('#banner-slider-1').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      items:1,
      dots:true,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      animateIn:"animate__fadeIn",
      animateOut:"animate__fadeOut"
    })

    $('#best-product-slider').owlCarousel({
      loop:false,
      margin:30,
      navText:['<i class="las la-angle-left"></i>','<i class="las la-angle-right"></i>'],

        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                dots:true
            },
            576:{
                items:2,
                dots:true
            },
            992:{
                items:3,
                dots:true
            },
            1200:{
                items:4,
                dots:true
            }
        }
    })

    $('#new-arrivals-slider').owlCarousel({
            loop:false,
            margin:20,
            navText:['<i class="las la-angle-left"></i>','<i class="las la-angle-right"></i>'],

            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    dots:true
                },
                576:{
                    items:2,
                    dots:true
                },
                992:{
                    items:3,
                    dots:true
                },
                1200:{
                    items:5,
                    dots:true
                }
            }
    })
    
    $('#related-products').owlCarousel({
    margin:30,
    nav:false,
    items:4,
    responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    dots:true
                },
                576:{
                    items:2,
                    dots:true
                },
                992:{
                    items:3,
                    dots:true
                },
                1200:{
                    items:4,
                    dots:true
                }
            }
    })  

    $('#our-team-member').owlCarousel({
        margin:30,
        nav:false,
        responsiveClass:true,
                responsive:{
                    0:{
                        items:1,
                        dots:true
                    },
                    576:{
                        items:2,
                        dots:true
                    },
                    992:{
                        items:3,
                        dots:true
                    },
                    1200:{
                        items:4,
                        dots:false
                    }
                }
    })

});

$(document).ready(function(){
    $('#single-product').owlCarousel({
        loop:false,
        margin:10,
        nav:false,
        dots:false,
        URLhashListener:true,
        mouseDrag:false,
        items:1
    })

    $('.thumbnail>a').click(function(){

        $('.thumbnail a').removeClass('active');
        $(this).addClass('active');

    })
    // $('.thumbnail>img').click(function(){

    //     $('.thumbnail img').removeClass('active');
    //     $(this).addClass('active');

    // })

});

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

 
// single-product
// start quantity-btn

function less(){
    let val = document.getElementById('number').value;
    val--;
    if (val >=1) {
       document.getElementById('number').value=val;    
    }
}

function add(){	
    let val = document.getElementById('number').value;
    val++;
    if (val >=1) {
        document.getElementById('number').value=val;    
    }
}

// end quantity-btn