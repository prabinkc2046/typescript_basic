class Person {
    private name: string;
    private age: number;
    private salary: number;
    private address: string;

    constructor(name: string, age: number, salary: number, address: string){
        this.name = name;
        this.age = age;
        this.address = address;
        this.salary = salary;
    }

    public increaseSalary = (amount: number) => {
        this.salary += amount;
    }

    public getSalary = () => {
        console.log(`Current salary is: ${this.salary}`)
    }

    public getAddress = () => {
        console.log(`Current address is: ${this.address}`)
    }

    public changeAddress = (newAddress: string) => {
        this.address = newAddress;
    }
}


const prabin = new Person('prabin', 33, 70000, '500 davis st')

prabin.getAddress()
prabin.changeAddress('dandenong, australia')
prabin.getAddress()
prabin.getSalary()
prabin.increaseSalary(5000)
prabin.getSalary()

