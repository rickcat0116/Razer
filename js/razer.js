;(function(window,document,$,undefined){

    let t=0;
    let razor = {
        init:function(){
            this.headerFn();
            this.section01Fn();
            this.section02Fn();
            this.section03Fn();
            this.section04Fn();
            this.section04GalleryFn();
            this.section05Fn();
            this.goTopFn();
        },
        headerFn:function(){
             headerWinW = $(window).width();
             url = null;

            $('.smooth-btn').on({
                click:function(){
                    url = $(this).attr('href');
                        $('html,body').stop().animate({scrollTop: $( url ).offset().top  }, 600);
                        $('.mobile-menu').hide();
                        $('.mobile-btn').removeClass('addClose');      

                }
            });

            $(window).scroll(function(){
                if($(window).scrollTop() >= 30 ) {
                    $('#header').addClass('addMobile');
                    $('.goTop').addClass('addGoTop');
                } 
                else {
                    $('#header').removeClass('addMobile');
                    $('.goTop').removeClass('addGoTop');
                }
            });

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
                    $('.mobile-sub').slideUp(300);
                    $(this).next().stop().slideToggle(300);
                }
            });

            $(".mobile-menu").on({
                mouseleave: function(){
                    $('.mobile-sub').slideUp(300);
                    
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
            section01Fn:function(){
                let cnt=0;
                let n=$('.slide').length-1;
                let setId = 0;
                let setId2 = 0;

                let p = null;

                setTimeout(initTimerFn, 100);

                function mainNextSlideFn(){
                    $('.slide').css({zIndex:1});
                    if(p !== null){
                        $('.slide').eq(p).css({zIndex:4});
                    } else {
                        $('.slide').eq(cnt==0?n:cnt-1).css({zIndex:4});
                    }
                    $('.slide').eq(cnt).css({zIndex:5}).animate({opacity:0},0).animate({opacity:1},1000); 
                    pageBtnFn(cnt);
                }

                function mainPrevSlideFn(){
                    $('.slide').css({zIndex:1}).animate({opacity:1},0); 
                    $('.slide').eq(cnt).css({zIndex:4});
                    if(p !== null){
                        $('.slide').eq(p).css({zIndex:5}).animate({opacity:1},0).animate({opacity:0},1000);
                    } else {
                        $('.slide').eq(cnt==n?0:cnt+1).css({zIndex:5}).animate({opacity:1},0).animate({opacity:0},1000);
                    }
                   
                    pageBtnFn(cnt);
                }

                //다음 카운트 함수
                function nextCountFn(){
                    cnt++;
                    if(cnt>n){cnt=0;}
                    mainNextSlideFn();
                }
                //이전 카운트 함수
                function prevCountFn(){
                    cnt--; 
                    if(cnt<0){cnt=n;}
                    mainPrevSlideFn();
                }
                $('#section01').swipe({
                    swipeLeft:  function(event){
                        event.preventDefault();
                        if( !$('.slide').is(':animated') ){
                            nextCountFn(); //다음카운트
                        }
                        timerControlFn();
                    },
                    swipeRight: function(event){
                        event.preventDefault();
                        if( !$('.slide').is(':animated') ){
                            prevCountFn(); //이전카운트
                        }
                        timerControlFn();
                    }
                });

                function timerControlFn(){

                    clearInterval(setId);  //버튼 클릭시 타이머 중지
                    clearInterval(setId2); //카운트 타이머 중지
        
                    var cnt2 = 0;
                    setId2 = setInterval(function(){
                        cnt2++;
                        if(cnt2>5){
                            p = null;
                            clearInterval(setId);
                            clearInterval(setId2);
                            nextCountFn(); //다음슬라이드 즉시 실행
                            initTimerFn();  //3초후 다음 슬라이드 실행
                        }
                    },1000);
        
                } 

                function initTimerFn(){
                    setId = setInterval(nextCountFn,4000);
                }

                function pageBtnFn(){ 
                    $('.slider-bar').removeClass('current');
                    $('.slider-bar').eq(cnt).addClass('current');
                }

                $('.slider-bar').each(function(index){
                    $(this).on({
                        click:  function(){
                            p = cnt;
                            cnt=index;    
                            clearInterval(setId); 

                            if (p < index ) {
                                mainNextSlideFn();
                            } else if ( p > index) {
                                mainPrevSlideFn();
                            }
                            timerControlFn();
        
                        }
                    });
                });
            },

            section02Fn:function(){
                setTimeout(init, 100);

                function init(){
                    $('.section02-left') .stop().animate({left: -1000},1000, function(){
                        $('.section02-left') .stop().animate({left:0},2000);
                    });
                    $('.section02-right').stop().animate({right:-1000},1000, function(){
                        $('.section02-right').stop().animate({right:-0},2000);
                    });
                }
            
                function s5AnimationFormatFn(){
                    $('.section02-left') .stop().animate({left: -1000},1000);
                    $('.section02-right').stop().animate({right:-1000},1000);
                }
            
                function s5AnimationFn(){
                    $('.section02-left') .stop().animate({left:0},2000);
                    $('.section02-right').stop().animate({right:0},2000);
                }
            
                $(window).scroll(function(){
                    if( $(this).scrollTop() < 400 ){
                        if(t==1){
                            t=0; 
                            s5AnimationFormatFn();
                        }
                    }
            
                    if( $(this).scrollTop() >=400 ){
                        if(t==0){ 
                            t=1; 
                            s5AnimationFn();
                        }               
                    }
                });
            },

            section03Fn:function(){
                function isElementUnderBottom(elem, triggerDiff) {
                    const { top } = elem.getBoundingClientRect();
                    const { innerHeight } = window;
                    return top > innerHeight + (triggerDiff || 0);
                  }
                  
                  function handleScroll() {
                    const elems = document.querySelectorAll('.up-on-scroll');
                    elems.forEach(elem => {
                      if (isElementUnderBottom(elem, -20)) {
                        elem.style.opacity = "0";
                        elem.style.transform = 'translateY(-80px)';
                      } else {
                        elem.style.opacity = "1";
                        elem.style.transform = 'translateY(0px)';
                      }
                    })
                    
                  }
                  
                  window.addEventListener('scroll', handleScroll);
            },

            section04Fn:function(){
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

                    $('.gallery-img-btn').on({
                        click: function(e){
                            e.preventDefault();

                            fileName = $(this).find('img').attr('src');
                            endNum = fileName.indexOf('.jpg');
                            fileNum = Number(fileName.slice(endNum-2, endNum));

                            modalSlideFn();
                        }
                    });

                    function modalSlideFn(){
                        $('.modal').stop().fadeIn(300);
                        $('.modal-img-wrap img').stop().fadeOut(0).attr('src', './img/modal-'+ fileNum + '.png').fadeIn(1000);
                    }
                    $('.modal-close-btn, .modal-img-wrap').on({
                        click: function(){
                            $('.modal').stop().fadeOut(300);
                        }
                    });

                    $('.modal-arrow-right-btn, .modal-img-btn').on({
                        click: function(e){
                            e.stopPropagation();

                            fileNum++;
                            if(fileNum>20){
                                fileNum=11;
                            }
                            modalSlideFn();
                        }  
                    })

                    $('.modal-arrow-left-btn').on({
                        click: function(){
                            fileNum--;
                            if(fileNum<11){
                                fileNum=20;
                            }
                            modalSlideFn();
                        }
                    })
                 
            },
            section04GalleryFn:function(){
                let cols = 5;
                let winW = $(window).innerWidth();
                let n = $('.gallery li').length;
                let rows = Math.ceil(n/cols);
                let hRate = 600/800;
                let imgW = winW/cols;
                let imgH = imgW * hRate;
                let imgT = 0;
                let imgL = 0;

                let h = [];
                let s = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

                $('.gallery li').eq(0).css({ top:(imgH*0), left:(imgW*0), width:imgW, height:imgH })
                $('.gallery li').eq(1).css({ top:(imgH*0), left:(imgW*1), width:imgW, height:imgH })
                $('.gallery li').eq(2).css({ top:(imgH*0), left:(imgW*2), width:imgW, height:imgH })
                $('.gallery li').eq(3).css({ top:(imgH*0), left:(imgW*3), width:imgW, height:imgH })
                $('.gallery li').eq(4).css({ top:(imgH*0), left:(imgW*4), width:imgW, height:imgH })
                $('.gallery li').eq(5).css({ top:(imgH*1), left:(imgW*0), width:imgW, height:imgH })
                $('.gallery li').eq(6).css({ top:(imgH*1), left:(imgW*1), width:imgW, height:imgH })
                $('.gallery li').eq(7).css({ top:(imgH*1), left:(imgW*2), width:imgW, height:imgH })
                $('.gallery li').eq(8).css({ top:(imgH*1), left:(imgW*3), width:imgW, height:imgH })
                $('.gallery li').eq(9).css({ top:(imgH*1), left:(imgW*4), width:imgW, height:imgH })

                setTimeout(galleryFn, 100);

                    function galleryFn(){

                        winW = $(window).innerWidth();
                        if(winW > 1200) {
                            cols = 5;
                        } else if(winW <= 1200 && winW > 980){
                            cols = 3;
                        } else if(winW <= 980 && winW > 760){
                            cols = 2;
                        } else if(winW <= 760 && winW >= 0){
                            cols = 1;
                        }

                        n = s.length;
                        rows = Math.ceil(n/cols);
                        hRate = 600 / 800;

                        imgW = winW / cols;
                        imgH = imgW * hRate;
                        imgT = 0;
                        imgL = 0;

                        $('.gallery').css({ height:imgH*rows });
                        $('.gallery').removeClass('addZoom');

                        for(let i=0; i<h.length; i++){
                            $('.gallery li').eq(h[i]).hide();
                        }

                        let cnt = -1;

                        for(let i=0; i < rows; i++){
                            for(let j=0; j < cols; j++){
                                cnt++;
                                if(cnt > s.length-1)
                                break;
                                $('.gallery li').eq(s[cnt]).show().stop().animate({ top:(imgH*i), left:(imgW*j), width:imgW, height:imgH }, 300, function(){
                                $('.gallery li').addClass('addZoom2');
                                });
                            }
                        }

                        $('.gallery').addClass('addZoom');
                    }

                    $(window).resize(function(){
                        galleryFn();
                    });
                
                $('.gallery-btn').each(function(index){
                    $(this).on({
                        click: function(e){
                            e.preventDefault();

                            $('.gallery-btn').removeClass('addNav');
                            $(this).addClass('addNav');

                            switch(index){
                                case 0:
                                h = [];
                                s = [0,1,2,3,4,5,6,7,8,9];
                                break;
                                case 1:
                                h = [2,3,4,5,6,7,9];
                                s = [0,1,7,8];
                                break;
                                case 2:
                                h = [0,1,3,4,6,7,8];
                                s = [2,5,7,9];
                                break;
                                case 3:
                                h = [0,1,2,3,5,8,9];
                                s = [4,6,7];
                                break;
                                default:
                                h = [0,1,2,4,5,6,8,9];
                                s = [3,7];    
                            }
                            galleryFn();
                        }
                    });
                });
            },

            section05Fn:function(){
                    const second = 1000;
                    const minute = second * 60;
                    const hour = minute * 60;
                    const day = hour * 24;
                
                    let countDay = "Jan 01, 2022 18:30";
                    let countDown = new Date(countDay).getTime();
                    let x = setInterval(function(){
                        let now = new Date().getTime();
                        let distance = countDown - now;

                        document.getElementById("days").innerText = Math.floor(distance / (day)),
                        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

                    if (distance < 0) {
                        let headline = document.getElementById("headline");
                        let zero = document.getElementById("zero")

                        headline.innerText = "Thank you for Waiting";
                        headline2.innerText = "Let's Go Buy the Holiday Edition.";
                        days.style.display = "none";
                        hours.style.display = "none";
                        minutes.style.display = "none";
                        seconds.style.display = "none";
                        zero.style.display = "none";

                        clearInterval(x);
                      }
                }, 0)
        },
            goTopFn:function(){
                var Scroll;
                var lastScrollTop = 0;
                var delta = 5; // 동작 구현이 시작되는 위치
                var navbarHeight = $('#menu-nav').outerHeight(); //영향을 받을 선택 요소
                    //스크롤 시 사용자에게 스크롤 했다는 것을 알림
                    $(window).scroll(function(event){
                        Scroll = true;
                    });
                    //hasScrolled()를 실행하고 Scroll 상태를 초기화.
                    setInterval(function() {
                        if (Scroll) {
                            hasScrolled();
                            Scroll = false;
                        }
                    }, 250)
            
                // 페럴렉스 스크롤링 헤더, 고탑 버튼 동작 구현
                    function hasScrolled() {
            
                        var st = $(this).scrollTop(); // 현재 스크롤 위치 저장
            
                        if (Math.abs(lastScrollTop - st) <= delta) // 지정한 delta값보다 더 스크롤되었는지 확인.
                        
                        return;
            
                        if (st > lastScrollTop && st > navbarHeight){ // 헤더의 높이보다 더 스크롤 되었는지 확인하고, 스크롤 방향 위아래인지 확인 후 조건 실행
                            $('.goTop').removeClass('nav-up');
                        } else {
                            if (st + $(window).height() < $(document).height()) {
                                $('.goTop').addClass('nav-up');
                            }
                        }
            
                        if( $(this).scrollTop() <= 110 ){
                            $('.goTop').removeClass('nav-up');
                        }
                        
                        lastScrollTop = st; // 현재 스크롤 위치 저장
            
                        $('.goTop-btn').on({
                            click:  function(){
                                $('html,body').stop().animate({scrollTop:0},1000,'easeOutExpo');
                            }
                        });
                    }
            }
    
        };

    razor.init();

})(window,document,jQuery);