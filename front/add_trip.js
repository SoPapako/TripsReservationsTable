function addTrip() {
    var settings = {
      "url": "http://localhost:8080/addTrip",
      "method": "POST",
      "timeout": 0,
      "headers": {
        "Content-Type": "application/json"
      },
      "data": JSON.stringify({
        
        "departureLocation": document.getElementById("deploc").value,
        "arrivalLocation": document.getElementById("arlocation").value,
        "departureDate": document.getElementById("depdate").value,
        "arrivalDate": document.getElementById("ardate").value,
        "maxLimit": document.getElementById("maxlim").value,
        
      }),
    };
  
    $.ajax(settings).done(function (response) {
      // You can handle the response as needed (e.g., show a success message, reload data, etc.)
      console.log("Trip added successfully");
      // Optionally, you can clear the form fields after submission
      clearForm();
    });
  }
  
  function clearForm() {
    // Clear the values in the form fields
    
    document.getElementById("deploc").value = "";
    document.getElementById("arlocation").value = "";
    document.getElementById("depdate").value = "";
    document.getElementById("ardate").value = "";
    document.getElementById("maxlim").value = "";
    
  }
  