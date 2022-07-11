"use strict";
exports.__esModule = true;
// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
var SpaceLocation_1 = require("./SpaceLocation");
// Part 1: Declare (5) Variables With Type
var spacecraftName = 'Determination';
var speedMPH = 17500;
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
var milesPerKilometer = 0.621;
// Part 2: Print Days to Mars
var milesToMars = kilometersToMars * milesPerKilometer;
var hoursToMars = milesToMars / speedMPH;
var daysToMars = hoursToMars / 24;
// Code an output statement here (use a template literal):
//console.log(`${spacecraftName} will reach the red planet in ${daysToMars} days`);
// Part 3: Create a Function ("getDaysToLocation")
// function getDaysToLocation(kilometersAway:number): number{
//     let milesAway:number = kilometersAway * milesPerKilometer;
//     let hoursAway:number = milesAway / speedMPH;
//     let daysAway:number = hoursAway / 24;
//     return daysAway; 
// }
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
// console.log(`${spacecraftName} will reach Mars in ${getDaysToLocation(kilometersToMars)} days`);
// console.log(`${spacecraftName} will reach the moon in ${getDaysToLocation(kilometersToTheMoon)} days`);
// Part 4: Create a Spacecraft Class
var Spacecraft = /** @class */ (function () {
    function Spacecraft(craftName, craftSpeed) {
        milesPerKilometer = 0.621;
        this.name = craftName;
        this.speedMPH = craftSpeed;
    }
    Spacecraft.prototype.getDaysToLocation = function (kilometersAway) {
        var milesAway = kilometersAway * milesPerKilometer;
        var hoursAway = milesAway / speedMPH;
        var daysAway = hoursAway / 24;
        return daysAway;
    };
    Spacecraft.prototype.printDaysToLocation = function (location) {
        console.log("".concat(this.name, " would take ").concat(this.getDaysToLocation(location.kilometersAway), " days to get to ").concat(location.name, "."));
    };
    return Spacecraft;
}());
// Create an instance of the class here:
var spaceShuttle = new Spacecraft("Determination", 17500);
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
// console.log(`${spaceShuttle.name} will reach Mars in ${spaceShuttle.getDaysToLocation(kilometersToMars)} days`);
// console.log(`${spaceShuttle.name} will reach the moon in ${spaceShuttle.getDaysToLocation(kilometersToTheMoon)} days`);
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('the Moon', kilometersToTheMoon));
