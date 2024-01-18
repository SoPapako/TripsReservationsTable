$(document).ready(function() {
    showTrip();
  });
  
  function showTrip() {
    var settings = {
      "url": "http://localhost:8080/trips",
      "method": "GET",
      "timeout": 0,
      "processData": false,
      "mimeType": "multipart/form-data",
      "contentType": false
    };
  
    $.ajax(settings)
      .done(function(response) {
        displayTravelData(response);
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
        console.error('Error fetching data:', textStatus, errorThrown);
      });
  }
  
  function displayTravelData(json) {
    var travelData = JSON.parse(json);
    var tableBody = $('#tripTableBody');
    tableBody.empty(); // Clear previous data
  
    if (travelData.length === 0) {
      tableBody.append('<tr><td colspan="7">No travel data found.</td></tr>');
      return;
    }
  
    $.each(travelData, function(index, item) {
      var row = $('<tr>');
      row.append($('<td>').text(item.travelId));
      row.append($('<td>').text(item.departureLocation));
      row.append($('<td>').text(item.arrivalLocation));
      row.append($('<td>').text(formatDate(item.departureDate)));
      row.append($('<td>').text(formatDate(item.arrivalDate)));
      row.append($('<td>').text(item.maxLimit));
      var agencyName = item.agency && item.agency.name ? item.agency.name : "";// To bring back the agency
      row.append($('<td>').text(agencyName));
      tableBody.append(row);
    });
  }
  
  // Helper function to format date
  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  }
  