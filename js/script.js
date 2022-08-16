$(document).ready(()=>{
    $('#whitlist-form').submit((e)=>{
        e.preventDefault();
        var email = $('#email').val()
        
        $.ajax({
            type: 'POST',
            url: "js/saveFile.php",             
            dataType: "json",
            data:{
                email
            },
            success: function(response){
                if(response){
                    alert('We will whitelist your email soon');
                }else{
                     alert('There is some error');
                }
            },
            error: function(error){
                alert(error)
            }
        })
    })
})