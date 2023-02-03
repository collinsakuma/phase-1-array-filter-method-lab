// Code your solution here


// function findMatching(drivers, driver) {
//     function isDriver(name) {
//         return(name.toLowerCase() == driver.toLowerCase());
//     }
//     return drivers.filter(isDriver);
// }


function findMatching(drivers, driver) {
    return drivers.filter(name => name.toLowerCase() === driver.toLowerCase())
}

// function fuzzyMatch(drivers, driver) {
//     function isDriver(name) {
//         return (`${name[0]}${name[1]}` === driver);
//     }
//     return drivers.filter(isDriver);
// }
function fuzzyMatch(drivers,driver) {
    return drivers.filter(name => `${name[0]}${name[1]}` === driver);
}

function matchName(drivers, input) {
    return drivers.filter(driver => driver.name === input)
}

