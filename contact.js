// Function to validate the contact form
function validateForm() {
    // Clear previous error messages
    clearErrors();
  
    let valid = true;
  
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    // Validate Name
    if (name === "") {
      valid = false;
      document.getElementById('nameError').innerText = "Name is required.";
      document.getElementById('nameError').style.display = "block";
    }
  
    // Validate Email
    if (email === "") {
      valid = false;
      document.getElementById('emailError').innerText = "Email is required.";
      document.getElementById('emailError').style.display = "block";
    } else if (!validateEmail(email)) {
      valid = false;
      document.getElementById('emailError').innerText = "Please enter a valid email address.";
      document.getElementById('emailError').style.display = "block";
    }
  
    // Validate Message
    if (message === "") {
      valid = false;
      document.getElementById('messageError').innerText = "Message cannot be empty.";
      document.getElementById('messageError').style.display = "block";
    }
  
    return valid;
  }
  
  // Helper function to validate email format
  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  }
  
  // Function to clear error messages
  function clearErrors() {
    document.getElementById('nameError').style.display = "none";
    document.getElementById('emailError').style.display = "none";
    document.getElementById('messageError').style.display = "none";
  }
  