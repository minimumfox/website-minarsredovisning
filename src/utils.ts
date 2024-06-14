export const getDateToday = () => {
    return new Date().toISOString().slice(0, 10)
}

export const getDateXDaysFromNow = (days: number) => {
    const date = new Date()
    date.setDate(new Date().getDate() + days)
    return date.toISOString().slice(0, 10)
}
