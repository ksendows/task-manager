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
    const result = task === ""
        ? {
            validationPassed: false,
            error: 'Please enter task'
        }
        : {
            validationPassed: true,
            error: ''
        }
    return result;
}

const validateFullfilment = (fullfilment) => {
    const test = /^\d{1,3}$/.test(fullfilment);
    const result = test && fullfilment >= 0 && fullfilment <= 100
        ? {
            validationPassed: true,
            error: ''
        }
        : {
            validationPassed: false,
            error: 'Fullfilment should be an integer number from 0 to 100'
        }
    return result;
}

const validateDate = (dateString) => {
    const parsedDate = new Date(dateString);
    const year = parsedDate.getFullYear();
    const result = (!isNaN(year) && year >= 2000 && year <= 2100)
        ? {
            validationPassed: true,
            error: ''
        }
        : {
            validationPassed: false,
            error: 'Invalid date'
        }
    return result;
}

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


