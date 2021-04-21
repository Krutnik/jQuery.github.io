$(function() {
    $("#btn1").click(function() {
        $(this).css('background-color', 'blue');
        $("div").append("<h2>hello<?h2>");
    });
});