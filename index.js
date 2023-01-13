//Code your solution in this file!
const returnFirstTwoDrivers = (function (drivers) {
    return drivers.slice(0, 2)
})
returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

const returnLastTwoDrivers = (function (scoberDrivers) {
    return scoberDrivers.slice(-2)
})
returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (multiplier) {
    return function (fare) {
        return fare * multiplier
    }
}
// const fare = createFareMultiplier(3)
// console.log(fare(5))

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, lastFirstDrivers) {
    return lastFirstDrivers(drivers)
}






