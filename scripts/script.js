$(document).mousemove( function(e) {

    var $width = ($(document).width())/255;
    var $height = ($(document).height())/255;
    var pageX = parseInt(e.pageX / $width,10);
    var pageY = parseInt(e.pageY / $height,10);


    if (state_movenames) {
        $("#background").css("background-size", (102 + (.005 * (pageY / $height))) + "%");
        $("#background").css("background-position", (.5 * (pageX / $width)) + "% " + (3 + (.006 * (pageY / $height))) + "%");
        $("#firstName").css("left", (-.02 * (pageX / $width)) + "%");
        $("#firstName").css("padding-top", (.0005 * (pageY / $height)) + "em");
        $("#firstName").css("letter-spacing", (.132 + (.0001 * (pageX / $width))) + "em");
        $("#lastName").css("left", (35 - (.02 * (pageX / $width))) + "%");
        $("#lastName").css("top", (40 + (.002 * (pageY / $height))) + "%");
        $("#lastName").css("letter-spacing", (.132 + (.0002 * (pageX / $width))) + "em");
    }
});

var state_movenames = true;

$(function() {
    $(".navButton").click(function(e) {
        state_movenames = !state_movenames;
        e.preventDefault();
        $(this).removeClass("hoveron").css("background-color", "black").css("opacity", ".6");
        $("#background").animate({
            "opacity": ".2",
            "background-size": "104%",
            "left": "-.2%"
        }, 4000);
        $("#navBackground, .hoveron").delay(900).animate({
            "left": "100%",
            "opacity": "0"
        }, 1000);

        $(this).animate({
            "margin-top": "-15em",
            "opacity": "1.0"
          }, 1000, function() {
            $(this).delay(50).animate({
                "margin-left": "-31em",
            }, 850);
            $("#bodycontent").css('display', 'inline')
            .delay(800).animate({
                opacity: 1
            }, 2000);
        });
        $("#name").delay(350).animate({
            "left": "2%",
            "top": "85%"
        }, 2600);
        $("#lastName").delay(100).animate({
            "left": "100%",
            "top": "0%"
        }, 1900);
    });
});