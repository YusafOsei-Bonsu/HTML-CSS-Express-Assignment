import * as validator from './validator.js';
console.log("Welcome to Express Assignment!");

// document.getElementById('submit').disabled = true;

const DOMElements = {
    title: {
      element: document.getElementById('title'),
      error: 'Please select a valid title from the list',
      validCheck: false,
      disableBtn: true,
    },
    forename: {
      element: document.getElementById('first-name'),
      error: 'First name should only include alphabetical characters',
      validCheck: false,
      disableBtn: true,
    },
    surname: {
      element: document.getElementById('surname'),
      error: 'Surname should only include alphabetical characters',
      validCheck: false,
      disableBtn: true,
    },
    dob: {
      element: document.getElementById('date-of-birth'),
      error: 'You must be aged 18 or over to register',
      validCheck: false,
      disableBtn: true,
    },
    telephone: {
      element: document.getElementById('telephone'),
      error: 'Please enter a valid UK telephone number',
      validCheck: false,
      disableBtn: true,
    },
    email: {
      element: document.getElementById('email'),
      error: 'Please enter a valid email address',
      validCheck: false,
      disableBtn: true,
    },
}

// Enables submit button after all data is valid
const enableSubmitBtn = () => {
  const enableBtn = Object.keys(DOMElements).every(field => DOMElements[field].disableBtn === true);
  return enableBtn;
}

// Displays an error in response to invalid data
const validation = (field, id, errorMsg) => {
  if (!DOMElements[field].validCheck) {
    document.getElementById(id).innerHTML = errorMsg;
    DOMElements[field].disableBtn = true;
  } else {
    document.getElementById(id).innerHTML = '';
    DOMElements[field].disableBtn = false;
  }

  document.getElementById('submit').disabled = enableSubmitBtn();
}

// Validates the title whilst the title is being selected
DOMElements.title.element.addEventListener('change', (evt) => {
  const title = evt.target.value;
  DOMElements.title.validCheck = validator.validateTitle(title) ? true : false;

  // If the title is invalid, an error message is displayed 
  validation("title", "title-error", DOMElements.title.error);
});

// Checks the validity of the forename whilst it's being entered
DOMElements.forename.element.addEventListener('change', (evt) => {
  const forename = evt.target.value;
  DOMElements.forename.validCheck = validator.validateName(forename) ? true : false;

  // If the firstname is invalid, an error message is displayed 
  validation("forename", "forename-error", DOMElements.forename.error);
});

// Checks the validity of the surname whilst it's being entered
DOMElements.surname.element.addEventListener('change', (evt) => {
  const lastname = evt.target.value;
  DOMElements.surname.validCheck = validator.validateName(lastname) ? true : false;

  // If the surname is invalid, an error message is displayed 
  validation("surname", "surname-error", DOMElements.surname.error);
});

// Checks the validity of the date-of-birth whilst it's being entered
DOMElements.dob.element.addEventListener('change', (evt) => {
  const dob = evt.target.value;
  DOMElements.dob.validCheck = validator.validateDOB(dob) ? true : false;

  // If the date-of-birth is invalid, an error message is displayed 
  validation("dob", "dob-error", DOMElements.dob.error);
});

// Checks the validity of the telephone whilst it's being entered
DOMElements.telephone.element.addEventListener('change', (evt) => {
  const phone = evt.target.value;
  DOMElements.telephone.validCheck = validator.validatePhone(phone) ? true : false;

  // If the telephone is invalid, an error message is displayed 
  validation("telephone", "telephone-error", DOMElements.telephone.error);
});

// Checks the validity of the email whilst it's being entered
DOMElements.email.element.addEventListener('change', (evt) => {
  const email = evt.target.value;
  DOMElements.email.validCheck = validator.validateEmail(email) ? true : false;

  // If the email is invalid, an error message is displayed 
  validation("email", "email-error", DOMElements.email.error);
});