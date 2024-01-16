let selectedPaymentOption = ''; // Variable to store the selected payment option

// Function to handle payment option selection
function selectPaymentOption(option) {
  selectedPaymentOption = option;
  // Update UI to show selection (for example, changing button colors)
  // You can add your own visual indication here
}

// Function to complete payment and proceed to Receipt page
function completePayment() {
  if (selectedPaymentOption === '') {
    alert('Please select a payment option.');
    return;
  }

  // Perform payment processing (simulate for demonstration)
  // You might want to integrate with a payment gateway in a real scenario

  // Redirect to receipt.html or handle payment success flow
  window.location.href = 'receipt.html';
}
