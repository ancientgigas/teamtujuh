$('#creation').show();
$('#album').hide();
$('#profile').hide();

$('#btnCreation').click(function(){
    $('#creation').show();
    $('#album').hide();
    $('#profile').hide();
})

$('#btnAlbum').click(function(){
    $('#creation').hide();
    $('#album').show();
    $('#profile').hide();
})

$('#btnProfile').click(function(){
    $('#creation').hide();
    $('#album').hide();
    $('#profile').show();
})