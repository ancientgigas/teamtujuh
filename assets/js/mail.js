var maxLength1 = 16;
$("#inputSomeone").keyup(function(){
    var textlen = maxLength1 - $(this).val().length;
    $("#nchars1").text(textlen);
})

var maxLength2 = 60;
$("#inputSubject").keyup(function(){
    var textlen = maxLength2 - $(this).val().length;
    $("#nchars2").text(textlen);
})

var maxLength3 = 260;
$("#inputMessage").keyup(function(){
    var textlen = maxLength3 - $(this).val().length;
    $("#nchars3").text(textlen);
})