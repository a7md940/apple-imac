// basic variables === >
let wWidth = $(window).width();
let wHeight = $(window).height();
let ws = $(window).scrollTop();

// media screens - responsive width
const mobile = $(window).innerWidth() < 768;
const midScreen = $(window).innerWidth() > 768 & $(window).innerWidth() < 1200;
const lgScreen = $(window).innerWidth() > 1200;
// =======================

$(document).ready(function(){

// navbar animation on mobile screen
if( $(window).innerWidth() < 768 ){

    // clear overlay on mobile screen
    $('.overlay').css({display: 'none'});

    // nav button toggler
    $('#nav-toggle').on('click', function(){

        $('nav > ul li:last-child a').on('click',function(e){
            e.preventDefault();
        });

        if( ! $(this).hasClass('active')){ // ======== > SHOW Nav

            $(this).addClass('active');

            $('#second-nav').css({zIndex: -1});

            $('header nav > ul').animate({
                paddingTop: '39px',
                paddingBottom: '20px',
                height: '100vh',
                opacity: 1,
            },500).css({background: 'black'});

            $('#nav-toggle span:first-child').css({
                transform: 'rotate(40deg) translate(1px, 0px)',
            });
    
            $('#nav-toggle span:last-child').css({
                transform: 'rotate(-40deg) translate(4px,-3px)'
            });

           
        }
        else if( $(this).hasClass('active') ){

            $('header nav > ul').animate({ // =========> HIDE Nav
                paddingTop: '0px',
                paddingBottom: '0px',
                height: '0px',
                
            },500,function(){
                $('#second-nav').css({zIndex: 9999});
            });

            $(this).removeClass('active');
            
            $('#nav-toggle span:first-child').css({
                transform: 'rotate(0deg) translate(0px,0px)',
            });
    
            $('#nav-toggle span:last-child').css({
                transform: 'rotate(0deg) translate(0px,0px)'
            });
        }


    });

    // Search input on click event
    $('header nav > ul > li:last-child form input').on('click', function(e){

        if ( ! $(this).hasClass('active') ){

            $(this).addClass('active');

            $('header nav ul li:last-child form input').animate({
                width: '80%'
            },300);
            $('#nav-toggle').animate({top:'-39px'},200);
            $('#logo').animate({top:'-39px'},200);
            $('header nav ul').animate({marginTop: '-30px'},200);
            $('.drop-down').fadeIn();
            $('header nav > ul > li:last-child form button').css({zIndex: 3});

            // show the drop down search
            $('header nav > ul > li:not(:last-child)').animate({
                opacity: 0
            },function(){
                $('.drop-down').animate({
                    height: '70vh'
                }, function(){
                    $('.drop-down ul li').each(function(i){
                        $('.drop-down ul li').eq(i).animate({top: '0px', opacity: 1}, 300 * (i+1));
                    });
                });
            });
            

        }
        else if( $(this).hasClass('active')){

                $(this).removeClass('active');  

                $('header nav ul li:last-child form input').animate({
                    width: '100%'
                },300);
                $('#nav-toggle').animate({top:'0px'},200);
                $('#logo').animate({top:'0px'},200);
                $('header nav ul').animate({marginTop: '0px'},200);
                $('header nav > ul > li:last-child form button').css({zIndex: -1});
                
                
           
        }
        
    });

    // hide the input search drop down on ESC clicked
    $('header nav > ul > li:last-child form input').keyup(function(e){
        if(e.keyCode === 27){
            $('header nav > ul > li:last-child form input').toggleClass('active');
            

            $('header nav ul li:last-child form input').animate({
                width: '100%'
            },300);
            $('#nav-toggle').animate({top:'0px'},200);
            $('#logo').animate({top:'0px'},200);
            $('header nav ul').animate({marginTop: '0px'},200);
            $('header nav > ul > li:last-child form button').css({zIndex: -1});

            // hide the drop down search
            $('.drop-down').fadeOut(function(){
                 // Show the navbar
                 $('header nav > ul > li:not(:last-child)').animate({
                    opacity: 1
                },function(){
                    // set the dropdown search in its position
                    $('.drop-down ul li').each(function(i){
                        $('.drop-down ul li').eq(i).animate({
                            top: '500px',
                            opacity: 0
                        }, 10 * (i+1));
                    })
                });
            });

        }
    });

    // click on cancel button
    $('header nav > ul > li:last-child form button').click(function(e){
        $('header nav > ul > li:last-child form input').toggleClass('active');
            

            $('header nav ul li:last-child form input').animate({
                width: '100%'
            },300);
            $('#nav-toggle').animate({top:'0px'},200);
            $('#logo').animate({top:'0px'},200);
            $('header nav ul').animate({marginTop: '0px'},200);
            $('header nav > ul > li:last-child form button').css({zIndex: -1});

            // hide the drop down search
            $('.drop-down').fadeOut(function(){
                 // Show the navbar
                 $('header nav > ul > li:not(:last-child)').animate({
                    opacity: 1
                },function(){
                    // set the dropdown search in its position
                    $('.drop-down ul li').each(function(i){
                        $('.drop-down ul li').eq(i).animate({
                            top: '500px',
                            opacity: 0
                        }, 10 * (i+1));
                    })
                });
            });

           
    });

}


// animation search input in large screens
if ( $(window).innerWidth() > 768){
    const search = $('nav > ul li:last-child a');
    search.on('click', function(e){
        e.preventDefault();
    
        if( $(this).hasClass('active') ){
    
            // remove class active
            $(this).removeClass('active');
    
            // fadeout the dropdown menu of search
            $('.drop-down').fadeOut(function(){ // callback function after fadingOut
    
                // animate navbar links
                $('header .container nav > ul li:not(:last-child)').css({
                    transform: 'scale(1)',
                    
                },200);
    
                // show the overlay div
                $('.overlay').fadeOut();
    
                // set nav background and header background
                $('header nav').css({background: '#333333'});
                $('header').css({background: '#333333'});
    
                // Show the search input when click
                $('header nav > ul li a form input').css({
                    width: '0px',
                    left: '-400px',
                    padding: '13px 0px',
                    opacity: 0
                });
    
                $('header nav > ul li a form > i').animate({
                    opacity: 0
                },100); 
                
                
                $('.drop-down > ul li').animate({
                    opacity: 0,
                    right: '-200px'
                });
    
            });
            
    
           
        }
        else if( ! $(this).hasClass('actice') ){
            
            $(this).addClass('active');
            $('header .container nav > ul li:not(:last-child)').css({
                transform: 'scale(0)',
                
            },200);
            $('header nav').css({background: 'black'});
            $('header').css({background: 'black'});
    
    
            $('header nav > ul li a form input').animate({
                width: '300px',
                left: '-732px',
                padding: '13px 20px',
                opacity: 1
            },700); 
    
            $('header nav > ul li a form > i').animate({
                left: '-736px',
                opacity: 1
            },700); 
    
    
            $('header .overlay').fadeIn();
    
            $('header nav > ul li a form input').on('click', function(e){
                e.preventDefault();
                e.stopPropagation();
            });
    
            $('.drop-down').fadeIn();
            $('.drop-down > ul li').animate({
                opacity: 1,
                right: 0
            });
           
            $('header nav > ul li a form input').focus();
            
            
        }
        
    });
}


// animate Second navbar on mobile screen
if( $(window).innerWidth() < 768 ){
    
    // the ul of second nav
    const secondNav = $('#second-nav ul');
    const secondNavLi = $('#second-nav ul li');

    $('#second-nav i').click(function(){

        if( ! $(this).hasClass('active') ) // SHOOW
        {
            $(this).addClass('active');
            $('#second-nav').css({
                background: 'white'
            });
            secondNav.animate({
                height: '200px',
                padding: '25px 50px'
            },300,function(){
                $('#second-nav i').css({transform: 'rotate(180deg)'});
                secondNavLi.each(function(i){
                    secondNavLi.eq(((secondNavLi.length - 1 ) - i)).animate({
                        top: '0px',
                        opacity: 1
                    }, 200 * (1+i),function(){
                        $('.overlay').fadeIn();
                    });
                });
                
            });
        }
        else if( $(this).hasClass('active') ) // HIDE
        {
            $(this).removeClass('active');
            $('#second-nav').css({
                background: 'rgba(255,255,255,.8)'
            });
            secondNavLi.each(function(i){
                $('.overlay').fadeOut();
                secondNavLi.eq(((secondNavLi.length - 1 ) - i)).animate({top: '-20px',opacity:0},200 * (1+i)
                ,function(){
                    secondNav.animate({height: '0px',padding: '0px 50px'},
                function(){
                    $('#second-nav i').css({transform: 'rotate(0deg)'});
                });
                })
            });
        }
    });
}




$(window).on('scroll',function(){ // =====================> SCCROLL EVENT

// make seconde Nav at the top
    const sNavOffset = $('#second-nav').offset().top;

    if( $(window).scrollTop() >= sNavOffset  ){
        $('#second-nav .container').css({
            width:'100%',
        });
    }
});


$(window).scroll(function(){
    let retina = $('#retina');
    let retinaOffset = retina.offset().top;
    let img = $('#retina .screen-img');

    if( wWidth > 768){
        if($(window).scrollTop() > retina.offset().top){
            img.css({marginTop:  '-' + ($(window).scrollTop() - retina.offset().top ) / 2    + 'px'})
        }
    }else if (wWidth < 768){
        if($(window).scrollTop() >= retina.offset().top - ($(window).height())){
            img.css({marginTop: ( ($(window).scrollTop() - retina.offset().top ) * (-1) ) / 15    + 'px'})
        }
        if($(window).scrollTop() >= retina.offset().top ){
            img.css({marginTop:  '-' + ($(window).scrollTop() - retina.offset().top ) / 2    + 'px'})
        }
    }
});

// bag parllax effect
$(window).scroll(function(){
    let vr = $('#vr');
    let img = $('#vr #thebag');

        if($(window).scrollTop() > vr.offset().top){
            
            img.css({transform:  'translateY(-' + ($(window).scrollTop() - vr.offset().top ) / 1.9   + 'px)'})
        }
 
});
/*
// for performance image parallax effect
$('#performance-text').css({marginTop: '881px'});

// make the performance image section move up on scroll
$(window).on('scroll',function(){ // =====================> NEW SCROLL EVENT

// variables
let ws = $(window).scrollTop();
let midOfPerformace = $('#performance').offset().top + ($('#performance').innerHeight() / 2);

// parallax effect on performance section image on mobile screens
if(lgScreen){
    if(
        ws >=  $('#performance').offset().top + ($('#performance').innerHeight() - 700) // to start effect
        &
        ws <= $('#performance').offset().top + $('#performance').outerHeight(true) - 400 // to stop effect
      )
      {
          $('#performance-text').css({marginTop: (ws - midOfPerformace) * (-1) / 2 +'px'});
      }
}

// parallax effect on performance section image on midium screens
  if(midScreen){
    if(
        ws >=  $('#performance').offset().top + ($('#performance').innerHeight() - 700) // to start effect
        &
        ws <= $('#performance').offset().top + $('#performance').outerHeight(true) - 300 // to stop effect
      )
      {
          $('#performance-text').css({
              marginTop:(ws - midOfPerformace) * (-1) +'px'
          })
      }
  
  }
    // performance on mobile screen with smooth scroll and move
    if ($(window).innerWidth() < 768){
        if(
            ws >= $('#performance').offset().top + ($('#performance').innerHeight() - 700) // to start effect
            &
            ws <= $('#performance').offset().top + $('#performance').outerHeight(true) - 300 // tp stop effect
          )
            {
            $('#performance-text').css({
                marginTop: (ws - midOfPerformace + 200) * (-1) +'px'
            });
        }
    }
        

    // BAG Parallax Effect
    if(wWidth > 736){
        let bag = $('#thebag');
        let vr = $('#vr');
        if ( ws >= vr.offset().top + vr.outerHeight(true) - 1200 & ws <= vr.offset().top + vr.outerHeight(true)){
            bag.css({
                transform: 'translate3d(0,' + ( (ws - vr.offset().top - 600 ) * (-1)) / 20 + '%,0)'
            });
        }
    }

    // screen-img Parallax Effect

        let img = $('#retina.parent-parallax .screen-img img');
        let section = $('#retina');
        if ( ws >= section.offset().top - 200 & ws <= section.offset().top + section.outerHeight(true)){
            console.log('hiiii')
            img.css({
                transform: 'translate3d(0,' + ( (ws - section.offset().top ) * (-1) ) / 28 + '%,0)'
            });
        }

    
    

});
*/

});




/*
$('#thebag').css({
    transform: 'translate3d(0,' + ( (ws - $('#vr').offset().top ) * (-1) ) / 2 + 'px,0)'
});

let img = $('#retina.parent-parallax .screen-img img');
let section = $('#retina');
img.css({
    transform: 'translate3d(0,' + ( (ws - section.offset().top ) * (-1) ) / 28 + '%,0)'
});
 */


// parallax effects by Rellax.js library

var rellax = new Rellax('.rellax');


















parallaxEffect('#thunderbolt','#thunderbolt .img img',3,3.5);
parallaxEffect('#billion','#billion .img img',3,2);









function parallaxEffect (section,element,speedLgScreen,speedSmScreen){
    $(window).scroll(function(){
        let retina = $(section);
        let retinaOffset = retina.offset().top;
        let img = $(element);
        

        if( wWidth > 768){
            if($(window).scrollTop() > retina.offset().top){
                img.css({transform:  'translateY(-' + ($(window).scrollTop() - retina.offset().top ) / speedLgScreen + 'px)'})
            }
        }else if (wWidth < 768){
            if($(window).scrollTop() >= retina.offset().top - ($(window).height())){
                img.css({transform: 'translateY(' + ( ($(window).scrollTop() - retina.offset().top ) * (-1) ) / 10    + 'px)'})
            }
            if($(window).scrollTop() >= retina.offset().top ){
                img.css({transform:  'translateY(-' + ($(window).scrollTop() - retina.offset().top ) / speedSmScreen    + 'px)'})
            }
        }
    });
}



//$('#apple-accessories .pics img').attr('data-aos-offset', $('#apple-accessories').offset().top);