$(function(){
    $('#btnSub').click(function(){
        alert('Sign Up Successful !', confirm)
        window.location.href='login.html'
        return false
    })
})

$(function(){
    $('#showPass').click(function(){
        if($(this).is(':checked')){
            $('#inputPassword').attr('type','text');
        }else{
            $('#inputPassword').attr('type','password');
        }
    })
})