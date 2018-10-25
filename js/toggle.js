/*Toggle JS*/
$(document).ready(function(){
    $("#aboutme_button").click(function(){
        $("#aboutme_des").toggle();
    });
    $("#close_about").click(function(){
        $("#aboutme_des").toggle();
    });
    $("#contactme_button").click(function(){
        $("#contactme_des").toggle();
    });
    $("#close_contact").click(function(){
        $("#contactme_des").toggle();
    });
});