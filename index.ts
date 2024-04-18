// Question 61
enum Vehicles {
    cars = "cars",
    trucks = "trucks",
    motorcycle = "motorcycle"
}

type Object = {
    price:number;
    vehicle : Vehicles
}

const obj1:Object = {
    price : 45000,
    vehicle : Vehicles.motorcycle
}

const obj2:Object = {
    price : 1450000,
    vehicle : Vehicles.cars
}

console.log(obj1);
console.log(obj2.vehicle);

// Question 62
interface StudentTemplate {
    name : string;
    age : number;
    courses : string[]
}

let student1:StudentTemplate = {
    name : "Maham",
    age : 19,
    courses : ["Html","CSS","Javascript"]
}

console.log(student1);

// Question 63
type ShapeFilter = {
    name : "Circle" | "Rectangle";
    diameter ?: number;
    width ?: number
}

let Shape1:ShapeFilter = {
    name : "Circle",
    diameter : 4.5
}

let Shape2:ShapeFilter = {
    name : "Rectangle",
    width : 5.5
}

console.log(Shape1);
console.log(Shape2);