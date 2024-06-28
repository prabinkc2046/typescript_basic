class Animal {
    name: string;

    constructor(name: string){
        this.name = name;
    }

    move (distanceMoved: number) {
        console.log(`${this.name} moved ${distanceMoved} m`)
    }
}

const cow = new Animal("cow");
cow.move(25)

// lets define a Dog which is a one type of animial
// dog share most of the properties of animal
// but dog also has its own things it does

class Dog extends Animal{
    bark (){
        console.log("Woff! Woff!")
    }
}


const percy = new Dog("Percy");

percy.move(33)
percy.bark();