/*eslint-disable*/
const validateTask = (task) => {
    if (task === '') return false;
    return true;
}

// var num = "12.34";
// alert(num.match(/^\d+\.\d+$/ig)); // 12.34, дробь!

//regexp только цифры, без - и .
const validateFullfilment = (fullfilment) => {
    console.log(fullfilment);
    // debugger;
    if (fullfilment < 0 || fullfilment > 100) return false;
    return true;
}

const validateDate = (date) => {
    console.log(date);
    if (date) return false;
    return true;
}

const validateInput = (name, value) => {
    // debugger;
    switch (name) {
        case "task":
            return validateTask(value);
        case "fullfilment":
            return validateFullfilment(value);
        case "dueDate":
            return validateDate(value);
        default:
            break;
    }
}

export default validateInput;


