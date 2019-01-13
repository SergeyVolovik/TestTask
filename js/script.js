"use strict"

$("#btnSubmit").on('click', function(event) {
    if (form.checkValidity() === false) {
        event.preventDefault(); // event won't do if form.checkValidity() === true
        $("#form").addClass('was-validated');// fetch form to apply custom Bootstrap validation
    } else {
        $("#form").on("submit", function(event) {
            event.preventDefault();
            $("#form").removeClass('was-validated')
        });
        let info = $("#form").serialize(); //convert form data to a string
        $.ajax({
            type: "POST", //request on server 
            url: "http://codeit.pro/codeitCandidates/serverFrontendTest/user/registration", //send on this url
            data: info, //data form
            success: function(data) {
                if (data.message === "User created" || data.status === "OK") {
                    setTimeout(function() {
                        $("#infoResult").empty().append("Success!").removeClass('text-danger').addClass('text-success');
                    }, 500);
                } else {
                    $("#infoResult").empty().append(data.message).addClass('text-danger');
                }
            },
            error: function() {
                alert("Error, try again later!");
                console.clear(); //cleaning the console
            }
        });
    }
});