;(function(window,document,$,undefined){

    let t=0;
    let razor = {
        init:function(){
            this.headerFn();
            this.modalFn();
        },
        headerFn:function(){
            headerWinW = $(window).width();
            url = null;

            $(window).resize(function(){
                headerWinW = $(window).width();
                if( headerWinW > 990 ){
                    $('.mobile-btn').removeClass('addClose');
                    $('.mobile-menu').stop().slideUp(0);
                } else if ( headerWinW > 760){
                    $(".fSub").slideUp(300);
                    $(".footer-btn").removeClass('addSelect');
                }
            });
            
            $('.mobile-btn').on({
                click:  function(event){
                    event.preventDefault();
                    $(this).toggleClass('addClose');
                    $('.mobile-menu').stop().slideToggle(300);
                }
            });

            $(".main-btn").on({
                click:function(){ 
                    $(".sub").removeClass('addSub');
                    $(this).next().addClass('addSub');
                },
                focusin:function(){
                    $(".sub").removeClass('addSub');
                    $(this).next().addClass('addSub');  
                },
            });

            $("#header").on({
                mouseleave: function(){
                    $(".sub").removeClass('addSub');
                }
            });

            $(".mobile-menu-btn").on({
                click:function(){
                    $(".mobile-menu-btn").removeClass('addClick');
                    $(this).addClass('addClick');
                    $('.mSub').slideUp(300);
                    $(this).next().stop().slideToggle(300);
                }
            });

            $(".mobile-menu").on({
                mouseleave: function(){
                    $('.mSub').slideUp(300);
                    
                }
            });

            $(".footer-btn").on({
                click:function(){
                    $(".footer-btn").removeClass('addClick');
                    $(this).addClass('addClick');
                    $(".fSub").slideUp(300);
                    $(this).next().stop().slideToggle(300);
                    $(this).toggleClass('addSelect');
                },
                focusout:function(){
                    $(".footer-btn").removeClass('addSelect');

                }


            });

            $(".mobile-footer-menu").on({
                mouseleave: function(){
                    $(".footer-btn").removeClass('addSelect');
                    $(".fSub").slideUp(300);
                    
                }
            })
       },

        modalFn:function(){
            let fileName = null;
            let endNum = null;
            let fileNum = null;
            let winH = 0;

            setTimeout(resizeFn,100);

            function resizeFn(){
                winH = $(window).innerHeight();
                $('.modal-img-wrap').css({ lineHeight:winH+'px'});
            }

            $(window).resize(function(){
                resizeFn();
            });

            $('.modal-btn').on({
                click: function(e){
                    e.preventDefault();

                    modalSlideFn();
                }
            });

            function modalSlideFn(){
                $('.modal').stop().fadeIn(300);
                $('.modal-img-wrap img').stop().fadeOut(0).attr('src', './img/modal-store.png').fadeIn(1000);
            }
            $('.modal-close-btn, .modal-img-wrap').on({
                click: function(){
                    $('.modal').stop().fadeOut(300);
                }
            });
         
        }
    }
    razor.init();

})(window,document,jQuery);