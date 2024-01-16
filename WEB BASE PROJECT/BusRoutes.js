// Function to handle bus selection
function selectBus(busName, time, price) {
    // Store selected bus details (you can use localStorage or session storage)
    // For example:
    localStorage.setItem('selectedBus', busName);
    localStorage.setItem('selectedTime', time);
    localStorage.setItem('selectedPrice', price);
  }
  
  // Redirect to Choose Seat page
  function redirectToChooseSeat() {
    // Redirect to choose_seat.html
    window.location.href = 'ChooseSeat.html';
  }
  