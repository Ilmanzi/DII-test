function getDatesBetween(startDate, endDate) {
    const dates = []
    let currentDate = startDate

    while (currentDate <= endDate) {
        dates.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1)
    }

    return dates
}

module.exports = getDatesBetween