
$("#add-btn").on("click", function(event) {
    event.preventDefault();
    var newGuest = {
        customer: $("#customer").val().trim(),
        id: $("#id").val().trim(),
        email: $("#email").val().trim(),
        phone: $("#phone").val().trim()
    };

    $.post("/api/newguest", newGuest)
    .then(function(data) {
        console.log(data);
        alert("Adding guest...");
    });
});

$("#search-btn").on("click", function() {
    
    $.get("/api/", function(data) {
      console.log(data);

        data.forEach(function () {
            
            guestdiv = $("<div>");
            
            customerdiv = $("<div>");
            iddiv = $("<div>");
            emaildiv = $("<div>");
            phonediv = $("<div>");

            customerdiv.text(data.customer);
            iddiv.text(data.id);
            emaildiv.text(data.id);
            phonediv.text(data.phone);
        });
    });
});
