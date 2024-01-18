function signIn() {
    // Retrieve values from the input fields
    var afm = document.getElementById("afm").value;
    var password = document.getElementById("password").value;
  
    // Check if both email and password are provided
    if (!afm || !password) {
      alert("Please enter both afm and password");
      return;
    }
  
    // Perform the sign-in functionality (you can replace this with your actual sign-in logic)
    var settings = {
        "url": "http://localhost:8080/agency/signin",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "data": {
          "afm": afm,
          "password": password
        },
        "contentType": "application/x-www-form-urlencoded"
      };
  
    $.ajax(settings)
      .done(function(response) {
        // Handle the sign-in success as needed
        alert("Sign-in successful");
        // Optionally, you can redirect the user to another page or perform additional actions
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
        // Handle the sign-in failure as needed
        console.error("Sign-in failed:", textStatus, errorThrown);
        alert("Sign-in failed. Please check your email and password.");
      });
  }
  