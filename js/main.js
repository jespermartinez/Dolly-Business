
  /* MENU NAVBAR */  

      /* Animation Hamburger nav Process */
        $(document).ready(function(){

            $('.menu-toggle').click(function(){
                $(this).toggleClass('open');
            });

        });

/* Open NAV Process */
        $(document).ready(function(){

            $('.menu-toggle').click(function(){
                $('.menu_nav').toggleClass('active');
            });

        });

/* Active Header When it Scroll */
        $(window).on('scroll',function(){
            if($(window).scrollTop()){
                $('.header_case').addClass("active");
                $('.sec_arrow_up').addClass("active");
            }else{
                $('.header_case').removeClass("active");
                $('.sec_arrow_up').removeClass("active");
            }
        });
        
/* GO TO TOP PROCESS */        
        $(document).ready(function(){
            var scrollLink = $('.scroll');
            //smooth Scrolling
            scrollLink.click(function(e){
                e.preventDefault();
                // console.log(this.hash);
                $('body,html').animate({
                    scrollTop: $(this.hash).offset().top
                },1000);
            });
        });

/* Aos */  

        AOS.init({
            offset:60
        });
    