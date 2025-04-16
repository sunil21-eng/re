$(document).ready(function(){

$("#reservation-form").validate({
    rules:{
        fname:{
            required:true,
            minlength:5,
        },
        lname:{
            required:true,
            minlength:5,
        },
        email:{
            required:true,
        },
        number:{
            required:true,
        },
        date:{
            required:true,
        },
        time:{
            required:true,
        },
        message:{
            required:true,
        },
        
    }

})

});