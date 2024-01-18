function addUser() {
    var settings = {
      "url": "http://localhost:8080/register",
      "method": "POST",
      "timeout": 0,
      "headers": {
        "Content-Type": "application/json"
      },
      "data": JSON.stringify({
        
        "afm": document.getElementById("afm").value,
        "firstName": document.getElementById("firstName").value,
        "lastName": document.getElementById("lastName").value,
        "email": document.getElementById("email").value,
        "password": document.getElementById("password").value
        
      }),
    };
  
    $.ajax(settings).done(function (response) {
      alert("User added");
      clearForm();
    });
  }
  
  function clearForm() {
    // Clear the values in the form fields
    
    document.getElementById("afm").value = "";
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    
  }
  