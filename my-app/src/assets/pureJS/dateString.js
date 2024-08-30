const DateString = (date) => {
    console.log(date.getDate())
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

export default DateString;