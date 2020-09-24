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
    let optimisedBday = date.replace(/-/g, '/');

    let birthday = new Date(optimisedBday);
    
    let currentDate = new Date().toJSON().slice(0,10)+' 01:00:00';

    let age = ~~((Date.now(currentDate) - birthday) / (31557600000));

    // Determining if the user is an adult by law
    let isAdult = age >= 18 ? true : false;
    return isAdult;
}

// Checks if the email address is a valid email address
export const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
}