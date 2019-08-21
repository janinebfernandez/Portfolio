/*PROJECT POP UP*/

        $(window).load(function () {
            /*POP*/
            $(".trigger_popup_fricc").click(function(){
               $('.hover_bkgr_fricc').show();
            });
            $(".trigger_popup_fricc_2").click(function(){
                $('.hover_bkgr_fricc_2').show();
             });
             $(".trigger_popup_fricc_3").click(function(){
                $('.hover_bkgr_fricc_3').show();
             });
            /*CLOSE*/
            $('.popupCloseButton').click(function(){
                $('.hover_bkgr_fricc').hide();
            });
            $('.popupCloseButton').click(function(){
                $('.hover_bkgr_fricc_2').hide();
            });
            $('.popupCloseButton').click(function(){
                $('.hover_bkgr_fricc_3').hide();
            });
        });