const dateFormatted = (reviewDate: string): string => {
  let returnDate = '';
  if (reviewDate === 'Present') {
    returnDate = reviewDate;
  } else {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const truncDate = reviewDate.substring(0, 10);
    const splitDate = truncDate.split('-');
    const reviewYear = splitDate[0];
    const reviewMonth = monthNames[splitDate[1] - 1];
    let reviewDay = splitDate[2].substring(0, 2);

    if (reviewDay.substring(0, 1) === 0) {
      reviewDay = reviewDay.substring(1, 2);
    }
    returnDate = `${reviewMonth} ${reviewYear}`;
  }

  return returnDate;
};

export default dateFormatted
