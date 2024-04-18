// Question 61
var Vehicles;
(function (Vehicles) {
    Vehicles["cars"] = "cars";
    Vehicles["trucks"] = "trucks";
    Vehicles["motorcycle"] = "motorcycle";
})(Vehicles || (Vehicles = {}));
const obj1 = {
    price: 45000,
    vehicle: Vehicles.motorcycle
};
const obj2 = {
    price: 1450000,
    vehicle: Vehicles.cars
};
console.log(obj1);
console.log(obj2.vehicle);

// Question 62
let student1 = {
    name: "Maham",
    age: 19,
    courses: ["Html", "CSS", "Javascript"]
};
console.log(student1);
// Question 63
let Shape1 = {
    name: "Circle",
    diameter: 4.5
};
let Shape2 = {
    name: "Rectangle",
    width: 5.5
};
console.log(Shape1);
console.log(Shape2);
export {};
