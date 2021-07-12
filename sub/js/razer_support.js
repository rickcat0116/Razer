;(function(window,document,$,undefined){

    let t=0;
    let razor = {
        init:function(){
            this.supportFn();
            this.footerFn();
        },
            supportFn:function(){
                let cols = 4;
                let winW = $('.support').width();
                let n = $('.support li').length;
                let rows = Math.ceil(n/cols);
                let hRate = 285 / 292.5;
                let imgW = winW/cols;
                let imgH = imgW * hRate;
                let imgT = 0;
                let imgL = 0;

                let s = [0, 1, 2, 3, 4, 5, 6, 7];

                $('.support li').eq(0).css({ top:(imgH*0), left:(imgW*0), width:imgW, height:imgH })
                $('.support li').eq(1).css({ top:(imgH*0), left:(imgW*1), width:imgW, height:imgH })
                $('.support li').eq(2).css({ top:(imgH*0), left:(imgW*2), width:imgW, height:imgH })
                $('.support li').eq(3).css({ top:(imgH*0), left:(imgW*3), width:imgW, height:imgH })
                $('.support li').eq(4).css({ top:(imgH*1), left:(imgW*0), width:imgW, height:imgH })
                $('.support li').eq(5).css({ top:(imgH*1), left:(imgW*1), width:imgW, height:imgH })
                $('.support li').eq(6).css({ top:(imgH*1), left:(imgW*2), width:imgW, height:imgH })
                $('.support li').eq(7).css({ top:(imgH*1), left:(imgW*3), width:imgW, height:imgH })

                setTimeout(supportFn, 100);

                    function supportFn(){

                        winW = $('.support').width();
                        if(winW > 980) {
                            cols = 4;
                        } else if(winW <= 980 && winW > 760){
                            cols = 2;
                        } else if(winW <= 760 && winW >= 0){
                            cols = 1;
                        }

                        n = s.length;
                        rows = Math.ceil(n/cols);
                        hRate = 285 / 292.5;

                        imgW = winW/cols;
                        imgH = imgW * hRate;
                        imgT = 0;
                        imgL = 0;

                        $('.support').css({ height:imgH*rows });

                        let cnt = -1;

                        for(let i=0; i < rows; i++){
                            for(let j=0; j < cols; j++){
                                cnt++;
                                if(cnt > s.length-1)
                                break;
                                $('.support li').eq(s[cnt]).stop().animate({ top:(imgH*i), left:(imgW*j), width:imgW, height:imgH }, 300, function(){
                                });
                            }
                        }
                    }

                    $(window).resize(function(){
                        supportFn();
                    });
            
            },

            footerFn:function(){
                headerWinW = $(window).width();

                $(window).resize(function(){
                    headerWinW = $(window).width();
                    if( headerWinW > 760 ){
                        $(".fSub").slideUp(300);
                        $(".footer-btn").removeClass('addSelect');
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
            
            }
    
        };

    razor.init();

})(window,document,jQuery);