function agencyRegister() {
    var settings = {
      "url": "http://localhost:8080/agency/register",
      "method": "POST",
      "timeout": 0,
      "headers": {
        "Content-Type": "application/json"
      },
      "data": JSON.stringify({
        
        "afm": document.getElementById("afm").value,
        "name": document.getElementById("name").value,
        "owner": document.getElementById("owner").value,
        "password": document.getElementById("password").value
        
      }),
    };
  
    $.ajax(settings).done(function (response) {
      alert("Agency added successfully");
      clearForm();
    });
  }
  
  function clearForm() {
    // Clear the values in the form fields
    
    document.getElementById("afm").value = "";
    document.getElementById("name").value = "";
    document.getElementById("owner").value = "";
    document.getElementById("password").value = "";
    
  }
  