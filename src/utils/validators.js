/*eslint-disable*/
//     case 'email':
// emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
// fieldValidationErrors.email = emailValid ? '' : ' is invalid';
// break;
//     case 'password':
// passwordValid = value.length >= 6;
// fieldValidationErrors.password = passwordValid ? '' : ' is too short';
// break;

const validatePassword = (password) => {
    const result = password.length < 6 
    ? {
        validationPassed: false,
        error: 'Password is two short'
    }
    : {
        validationPassed: true,
        error: ''
    }
    return result;
}

const validateLogin = (email) => {
    const result = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(email)
        ? {
            validationPassed: true,
            error: ''
        }
        : {
            validationPassed: false,
            error: 'Login should be an email'
        }
    return result;
}

const validateName = (name) => {
    const result = name === ""
        ? {
            validationPassed: false,
            error: 'Please enter name'
        }
        : {
            validationPassed: true,
            error: ''
        }
    return result;
}

const validateTask = (task) => {
    if (task === '') return false;
    return true;
}

const validateFullfilment = (fullfilment) => {
    if (!/^\d{1,3}$/.test(fullfilment)) return false;
    if (fullfilment < 0 || fullfilment > 100) return false;
    return true;
}

const validateDate = (dateString) => {
    const parsedDate = new Date(dateString);
    const year = parsedDate.getFullYear();
    return (!(isNaN(year) || year < 2000 || year > 2100));
};

const validateFields = (name, value) => {
    switch (name) {
        case "login":
            return validateLogin(value);
        case "password":
            return validatePassword(value);
        case "name":
            return validateName(value);
        case "task":
            return validateTask(value);
        case "fullfilment":
            return validateFullfilment(value);
        case "dueDate":
            return validateDate(value);
        default:
            return true;
    }
}

export default validateFields;


