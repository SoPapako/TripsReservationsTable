function showTrip() {
    var settings = {
        "url": "http://localhost:8080/trips",
        "method": "GET",
        "timeout": 0,
        "processData": false,
        "mimeType": "multipart/form-data",
        "contentType": false
    };
    $.ajax(settings).done(function (response) {
        displayTravelData(response);
    });
}

function displayTravelData(json) {
    var travelData = JSON.parse(json);
    var dataBody = $('#dataBody');
    dataBody.empty(); // Clear previous data

    if (travelData.length === 0) {
        dataBody.append('<tr><td colspan="7">No travel data found.</td></tr>');
        return;
    }

    $.each(travelData, function (index, item) {
        var row = $('<tr>');
        row.append($('<td>').text(item.travelId));
        row.append($('<td>').text(item.departureLocation));
        row.append($('<td>').text(item.arrivalLocation));
        row.append($('<td>').text(item.departureDate));
        row.append($('<td>').text(item.arrivalDate));
        row.append($('<td>').text(item.maxLimit));
        row.append($('<td>').text(item.agencyId));
        dataBody.append(row);
    });
}

function addTrip() {		
    var settings = {
      "url": "http://localhost:8080/addTrip",
      "method": "POST",
      "timeout": 0,
      "headers": {
        "Content-Type": "application/json"
      },
      "data": JSON.stringify({
        "travelId": document.getElementById("name").value,
        "departureLocation": document.getElementById("deploc").value,
        "arrivalLocation": document.getElementById("arlocation").value,
        "departureDate": document.getElementById("depdate").value,
        "arrivalDate": document.getElementById("ardate").value,
        "maxLimit": document.getElementById("maxlim").value,
        "agencyId": document.getElementById("agency").value
      }),
    };

    $.ajax(settings).done(function (response) {
        showTrip();
    });
}

function showHome(){
    var settings = {
        "url": "http://localhost:8080/",
        "method": "GET",
        "timeout": 0,
        "processData": false,
        "mimeType": "multipart/form-data",
        "contentType": false
    };
}