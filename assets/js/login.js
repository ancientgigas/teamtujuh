//Validation
$(function(){
    //Event When Submit Clicked
    $('#btnSub').click(function(){
        //Get value
        var email = $('#inputEmail').val()
        var pass = $('#inputPassword').val()

        //Validation when Null
        if((email=='') || (pass=='')){
            alert('Input Email & Password First')
        }else{
            //Validation when Correct
            if((email=='user@mail.com') && (pass=='password')){
                //Redirect
                alert('Hi! User', confirm)
                window.location.href='index-in.html'
                return false
            }else{
                alert('Email or Password Invalid')
            }
        }
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