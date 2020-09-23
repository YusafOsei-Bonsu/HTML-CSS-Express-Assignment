import * as validator from './validator.js';
console.log("Welcome to Express Assignment!");

// All form input fields
const DOMElements = {
    title: {
        element: document.getElementById('title'),
        error: 'Please select a valid title from the list',
      },
    forename: {
      element: document.getElementById('first-name'),
      error: 'First name should only include alphabetical characters',
    },
    lastname: {
      element: document.getElementById('surname'),
      error: 'First name should only include alphabetical characters',
    },
    dob: {
      element: document.getElementById('date-of-birth'),
      error: 'You must be aged 18 or over to register',
    },
    telephone: {
      element: document.getElementById('telephone'),
      error: 'Please enter a valid UK telephone number',
    },
    email: {
      element: document.getElementById('email'),
      error: 'Please enter a valid email address',
    },
}

// The surrounding form
const form = document.getElementById('personal-details');

// Clears UI of all red errors
const removeErrors = () => {
    const errors = document.querySelectorAll('.error');
    errors.forEach((err) => {
        err.remove();
    })
}

// form.addEventListener('submit', (evt) => {
//     evt.preventDefault();
//     removeErrors();

//     const validatedFields = validator.validate(DOMElements);

//     // Checks if all the data is valid
//     const allValid = validatedFields.every((item) => item === true);

//     if (allValid === false) {
//       alert("ERROR: At least one of the input fields are incorrect!")
//     }
// });