import * as validator from './validator.js';
console.log("Welcome to Express Assignment!");
let validChecks = { title: false, forename: false, surname: false, dob: false, telephone: false, email: false }
document.getElementById("submit").style.visibility = 'hidden';

const DOMElements = {
    title: {
        element: document.getElementById('title'),
        error: 'Please select a valid title from the list',
    },
    forename: {
      element: document.getElementById('first-name'),
      error: 'First name should only include alphabetical characters',
    },
    surname: {
      element: document.getElementById('surname'),
      error: 'Surname should only include alphabetical characters',
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

const errorDetection = (field, id, errorMsg) => {
  if (!validChecks[field]) {
    document.getElementById(id).innerHTML = errorMsg;
  } else {
    document.getElementById(id).innerHTML = '';
  }
}

// Validates the title whilst the title is being selected
DOMElements.title.element.addEventListener('change', (evt) => {
  const title = evt.target.value;
  validChecks.title = validator.validateTitle(title) ? true : false;
  console.log(`Title: ${validChecks.title}`);

  // If the title is invalid, an error message is displayed 
  errorDetection("title", "title-error", DOMElements.title.error);
});

// Checks the validity of the forename whilst it's being entered
DOMElements.forename.element.addEventListener('change', (evt) => {
  const forename = evt.target.value;
  validChecks.forename = validator.validateName(forename) ? true : false;
  console.log(`Forename: ${validChecks.forename}`);

  // If the firstname is invalid, an error message is displayed 
  errorDetection("forename", "forename-error", DOMElements.forename.error);
});

// Checks the validity of the surname whilst it's being entered
DOMElements.surname.element.addEventListener('change', (evt) => {
  const lastname = evt.target.value;
  validChecks.surname = validator.validateName(lastname) ? true : false;
  console.log(`Surname: ${validChecks.forename}`);

  // If the surname is invalid, an error message is displayed 
  errorDetection("surname", "surname-error", DOMElements.surname.error);
});

// Checks the validity of the date-of-birth whilst it's being entered
DOMElements.dob.element.addEventListener('change', (evt) => {
  const dob = evt.target.value;
  validChecks.dob = validator.validateDOB(dob) ? true : false;
  console.log(`Date-of-birth: ${validChecks.dob}`);

  // If the surname is invalid, an error message is displayed 
  errorDetection("dob", "dob-error", DOMElements.dob.error);
});

// Checks the validity of the telephone whilst it's being entered
DOMElements.telephone.element.addEventListener('change', (evt) => {
  const phone = evt.target.value;
  validChecks.telephone = validator.validatePhone(phone) ? true : false;
  console.log(`Telephone: ${validChecks.telephone}`);

  // If the surname is invalid, an error message is displayed 
  errorDetection("telephone", "telephone-error", DOMElements.telephone.error);
});

// Checks the validity of the email whilst it's being entered
DOMElements.email.element.addEventListener('change', (evt) => {
  const email = evt.target.value;
  validChecks.email = validator.validateEmail(email) ? true : false;
  console.log(validChecks.email);
});

/*
const removeErrors = () => {
    const errors = document.querySelectorAll('.error');
    errors.forEach((err) => {
        err.remove();
    })
}
*/

/* Validate individual form field
export const validateField = (field, validator) => {
    if (!validator(field.element.value)) {
        // Inserts an error that's next to the appropriate input field
        const errorMsg = `<span class="error">${field.error}</span>`; 
        field.element.insertAdjacentHTML('afterend', errorMsg);
        return false;
    }
    return true;
}
*/

/* Returns the result of validating each field
export const validate = user => {
    return [
        validateField(user.title, validateTitle),
        validateField(user.forename, validateName),
        validateField(user.lastname, validateName),
        validateField(user.email, validateEmail),
        validateField(user.dob, validateDOB),
        validateField(user.telephone, validatePhone),
    ];
}
*/