function validateForm() {
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const birthdate = document.getElementById('birthdate').value;
  const email = document.getElementById('email').value;
  const confirmEmail = document.getElementById('confirmEmail').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const mobile = document.getElementById('mobile').value;

  const errorContainer = document.getElementById('errorContainer');
  errorContainer.innerHTML = '';

  // Check name has just letters
  const nameRegex = /^[A-Za-z]+$/;
  if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
    errorContainer.innerHTML = 'First name and last name should contain only letters.';
    return false;
  }
  

  // Check birth date
  const birthdateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!birthdateRegex.test(birthdate)) {
    errorContainer.innerHTML = 'Please enter a valid birth date in the format yyyy-mm-dd.';
    return false;
  }

  // Check email structure
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errorContainer.innerHTML = 'Please enter a valid email address.';
    return false;
  }

  // Check if emails match
  if (email !== confirmEmail) {
    errorContainer.innerHTML = 'Emails do not match.';
    return false;
  }

  // Check password criteria
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d{2,})(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,32}$/;
  if (!passwordRegex.test(password)) {
    errorContainer.innerHTML = 'Password must start with a capital letter, have at least two numbers, and one special character.';
    return false;
  }

  // Check if passwords match
  if (password !== confirmPassword) {
    errorContainer.innerHTML = 'Passwords do not match.';
    return false;
  }

  // Check mobile number
  const mobileRegex = /^\d{10}$/;
  if (!mobileRegex.test(mobile)) {
    errorContainer.innerHTML = 'Mobile number should contain 10 digits.';
    return false;
  }

  // If all validations pass, form can be submitted
  return true;
}

// localStorage
function validateForm() {
  // ... (Existing validation code, as shown in the previous response) ...

  // If all validations pass, form can be submitted
  saveFormDataToLocalStorage();
  return true;
}


function saveFormDataToLocalStorage() {
  const formData = {
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    birthdate: document.getElementById('birthdate').value,
    email: document.getElementById('email').value,
    password: document.getElementById('password').value,
    mobile: document.getElementById('mobile').value,
  };

  // Convert the form data to JSON and store it in local storage
  localStorage.setItem('formData', JSON.stringify(formData));
}

function getFormDataFromLocalStorage() {
  const formDataJSON = localStorage.getItem('formData');
  if (formDataJSON) {
    return JSON.parse(formDataJSON);
  }
  return null;
}