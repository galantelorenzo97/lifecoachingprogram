//This function was ripped off from ChatGPT
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(date.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
}

function formatCurrentDate() {
    return formatDate(new Date());
}

function objLength(obj) {
    return Object.keys(obj).length;
}

module.exports = {formatDate, formatCurrentDate, objLength}