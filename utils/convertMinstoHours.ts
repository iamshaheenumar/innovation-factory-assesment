function convertMinstoHours(totalMinutes: number) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return `${hours} hour and ${minutes} minutes`
}

export default convertMinstoHours