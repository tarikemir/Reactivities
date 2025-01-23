let data : number | string = 42;

data = "42";

export interface Duck {
    name : string,
    numLegs : number,
    makeSound : ( sound : string) => void
}

const duck1 : Duck = {
    name:"huey",
    numLegs: 2,
    makeSound: (sound : string) => console.log(sound)
}

const duck2 : Duck = {
    name:"duey",
    numLegs: 2,
    makeSound: ( sound : string) => console.log(sound)
}

duck1.makeSound("vak")
duck2.makeSound("quack");

export const ducks = [ duck1, duck2]