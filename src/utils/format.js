export const formatDate = (date) => {
    let month;
    switch (date.getMonth()) {
        case 0:
            month = "Jan";
            break;
        case 1:
            month = "Feb";
            break;
        case 2:
            month = "Mar";
            break;
        case 3:
            month = "Apr";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "Jun";
            break;
        case 6:
            month = "Jul";
            break;
        case 7:
            month = "Aug";
            break;
        case 8:
            month = "Sep";
            break;
        case 9:
            month = "Oct";
            break;
        case 10:
            month = "Nov";
            break;
        case 11:
            month = "Dec";
            break;    
        default:
            break;
    }
    const formatedDate = `${month} ${date.getDate()}`;
    return formatedDate;
}

export const formatDateForInput = (date) => {
    const format = (dateToFormat) => (dateToFormat > 10) ? dateToFormat : `0${dateToFormat}`;

    const formatedDate = `${date.getFullYear()}-${format(date.getMonth()+1)}-${format(date.getDate())}`;
    return formatedDate;
};
