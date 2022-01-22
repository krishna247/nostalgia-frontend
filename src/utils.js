function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
export const compareYear = (row,yearsVal) => {

    const minYear = yearsVal[0]
    const maxYear = yearsVal[1]
    let currentYear = "2" + new Date(Number(row['addedAt'])).getYear() -100
    return currentYear >= minYear && currentYear <= maxYear
};

export const modifyRows = (row) => {
    console.log('modify rows')
    row['addedAt'] = new Date(Number(row['addedAt']))
    return row
}

export const checkIsLocal = () => {
    return ! window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
        }


export default {getCookie, compareYear, modifyRows,checkIsLocal};