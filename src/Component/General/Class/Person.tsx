// I am defining a person object which can do: greet
// with the defined property

class Person {
    // define a property a person can have
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.age = age;
        this.name = name;
    }

    greet(){
        console.log(`My name is ${this.name}  and I am ${this.age} years old`)
    }
}

export const Alice = new Person("Alice", 33);
export const Em = new Person("Em", 25);

