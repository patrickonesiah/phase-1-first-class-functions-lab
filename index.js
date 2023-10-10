// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = (names) => names.slice(0, 2)

const returnLastTwoDrivers = (names) => names.slice(2, 4)


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (value) => (fare) => value * fare;

const fareDoubler = createFareMultiplier(2); 
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (arrayOfDrivers,selectScuberDrivers) => selectScuberDrivers(arrayOfDrivers); // Code your solution in this file!