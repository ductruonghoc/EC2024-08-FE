const DateObject = (dateString) => {
    const dateParts = dateString.split("/"); // Split the string into parts
    const month = parseInt(dateParts[1]) - 1; // Months are zero-based (January is 0)
    const day = parseInt(dateParts[0]);
    const year = parseInt(dateParts[2]);

    return new Date(year, month, day);
}

export default DateObject;