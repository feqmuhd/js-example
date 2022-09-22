// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
function logDairy() {
    for (prop of Object.keys(dairy)) {
        console.log(dairy[prop]);
    }
}
// Task 2
function birdCan() {
const animal = {
canJump: true
    };
const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;
    for (prop of Object.keys(bird)) {
        console.log(`${prop}: ${bird[prop]}`)
    }
}
// Task 3
function animalCan() {
    const animal = {
        canJump: true
    };
    const bird = Object.create(animal);
    bird.canFly = true;
    bird.hasFeathers = true;

    for (prop in bird) {
        console.log(`${prop}: ${bird[prop]}`)
    }   
}


