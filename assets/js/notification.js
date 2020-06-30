//TAB 1
$('#c-0-1').hide();
$('#c-0-2').hide();
$('#c-0-3').hide();
$('#c-0-4').hide();

$('#b-0-1').click(function(){
    $('#c-0-1').toggle();
    $('#c-0-2').hide();
    $('#c-0-3').hide();
    $('#c-0-4').hide();
})

$('#b-0-2').click(function(){
    $('#c-0-1').hide();
    $('#c-0-2').toggle();
    $('#c-0-3').hide();
    $('#c-0-4').hide();
})

$('#b-0-3').click(function(){
    $('#c-0-1').hide();
    $('#c-0-2').hide();
    $('#c-0-3').toggle();
    $('#c-0-4').hide();
})

$('#b-0-4').click(function(){
    $('#c-0-1').hide();
    $('#c-0-2').hide();
    $('#c-0-3').hide();
    $('#c-0-4').toggle();
})

//TAB 2
$('#c-1-1').hide();

$('#b-1-1').click(function(){
    $('#c-1-1').toggle();
})

//TAB 3
$('#c-2-1').hide();

$('#b-2-1').click(function(){
    $('#c-2-1').toggle();
})