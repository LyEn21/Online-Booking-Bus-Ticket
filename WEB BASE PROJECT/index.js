function redirectToBusRoutes() {
    // Get selected destinations and date from form
    // Redirect to bus_routes.html with selected data
    // Example:
    const fromDestinationSelect = document.getElementById('fromDestination');
    const selectedDate = document.getElementById('travelDate').value;
  
    // Redirect with query parameters (you'll need to implement this)
    window.location.href = `BusRoutes.html?from=${fromDestination}&to=${toDestination}&date=${selectedDate}`;

  }
  