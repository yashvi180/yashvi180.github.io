const form = document.querySelector('form');
const errorMessages = document.querySelectorAll('.error-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = form.elements[0].value;
  const lastName = form.elements[1].value;
  const email = form.elements[2].value;
  const password = form.elements[3].value;

  let isValid = true;

  // Clear previous error messages
  errorMessages.forEach(message => message.textContent = '');

  // Validate each field
  if (name === '') {
    errorMessages[0].textContent = 'Please enter your name.';
    isValid = false;
  }
  if (lastName === '') {
    errorMessages[1].textContent = 'Please enter your last name.';
    isValid = false;
  }
  if (email === '') {
    errorMessages[2].textContent = 'Please enter your email.';
    isValid = false;
  } else if (!email.includes('@')) {
    errorMessages[2].textContent = 'Invalid email address.';
    isValid = false;
  }
  if (password === '') {
    errorMessages[3].textContent = 'Please enter your password.';
    isValid = false;
  }

  if (isValid) {
    alert('Form submitted successfully!');
  }
});



