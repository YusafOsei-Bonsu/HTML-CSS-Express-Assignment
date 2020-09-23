// Validates the title
export const validateTitle = (title) => {
    const possibleTitles = ['Mr', 'Mrs', 'Ms', 'Miss', 'Dr', 'Sir', 'Reverend', 'Dame', 'Lady', 'Lord', 'Professor']; 
    return possibleTitles.includes(title);
}

// Validates the first and surname
export const validateName = (name) => {
    const regex = /^[a-zA-Z -]+$/;
    return regex.test(name);
}

// Checks if the inputted number is a valid telephone number
export const validatePhone = (number) => {
    const regex = /^0([1-6][0-9]{8,10}|7[0-9]{9})$/;
    return regex.test(number)
}

// Checks if the user is at least 18 years of age
export const validateDOB = (date) => {
    const today = new Date();
    const DOB = new Date(date);
    const age = today.getFullYear() - DOB.getFullYear();

    return age >= 18;
}

// Checks if the email address is a valid email address
export const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
}

// Validate individual form field
export const validateField = (field, validator) => {
    if (!validator(field.element.value)) {
        // Inserts an error that's next to the appropriate input field
        const errorMsg = `<span class="error">${field.error}</span>`; 
        field.element.insertAdjacentHTML('afterend', errorMsg);
        return false;
    }
    return true;
}

// Returns the result of validating each field
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