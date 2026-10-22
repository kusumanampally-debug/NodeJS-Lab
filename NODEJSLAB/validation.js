function validateRegisterForm() {
    // Get form inputs
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmpassword").value.trim();
    const mobileNumber = document.getElementById("number").value.trim();
    const age = document.getElementById("age").value.trim();
  
    // Validation rules
    if (username === "") {
      alert("Username is required.");
      return false;
    }
  
    if (email === "" || !email.includes("@")) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    if (password === "" || password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return false;
    }
  
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return false;
    }
  
    if (mobileNumber === "" || isNaN(mobileNumber) || mobileNumber.length !== 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return false;
    }
  
    if (age !== "" && (isNaN(age) || age < 0 || age > 120)) {
      alert("Please enter a valid age.");
      return false;
    }
  
    // If all validations pass
    alert("Registration successful!");
    return true;
  }