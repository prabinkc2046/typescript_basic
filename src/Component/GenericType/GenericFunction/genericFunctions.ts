// a function that takes one arguement
// a arguement could be of any type

import { faL } from "@fortawesome/free-solid-svg-icons"


const identity = <T>(arg: T): T => {
    return arg
}


identity("prabin")
identity(34343423)
identity(["sdfdf","dfdsfds", 34343])


// a function that reverse the array

const reverseArray = <T>(...array: T[]) => {
    return array.reverse()
}

reverseArray("prabin", "hari", "shyam")
const names = ["hari", "shyam", "manoj"]
const numbers = [1, 2, 3, 4]
const items = [{id: 1}, {id: 2}, "hello"] 
reverseArray(...names)
reverseArray(...numbers)
reverseArray(...items)


const anyArrayMapper = <T, U>(array: T[], callBack: (item: T) => U): U[] => {
    return array.map(callBack)
}

anyArrayMapper([1, 2, 3], (num) => num * 2)

anyArrayMapper(["sdffds", "sdfdfsd"], (str) => str.length )

anyArrayMapper([{state: false},{state: true},{state: true}], (obj) => obj.state === true ? {...obj, name: "true learner"} : obj)

type inputObject = {
    id: number;
    state: boolean
}

type OutputObject = inputObject & {
    name: string;
}

const objectArrayMapper = (arr: inputObject [], cb: (item: inputObject) => inputObject | OutputObject): (inputObject | OutputObject)[] => {
    return arr.map(cb)
}


objectArrayMapper([{id:1, state: true}, {id: 2, state: false}], (member) => member.state === true ? {...member, name: "true learner"}: member)




const strArrayMapper = (arr: string[], cb: (item: string) => number): number[] => {
    return arr.map(cb);
}

strArrayMapper(["dfdsf", "sdfdf", "dsffs"], (str) => str.length)


const filterByNumberCallback = (arr: number[], cb: (item: number) => boolean): number[] => {
    return arr.filter(cb);
}
filterByNumberCallback([1, 2, 3, 4, 5, 6], (num) => num % 2 === 0 )


const filterByAnything = <T>(arr: T [], filterFn: (item: T) => boolean): T[] => {
    return arr.filter(filterFn)
}

filterByAnything([{name:"prabin", age: 23}, {name:"Rachel", age: 17}, {name:"Mimi", age: 11}], (person) => person.age > 20)





    interface Serializable {
        serialize(): string;
    }
    
    function serialize<T extends Serializable>(obj: T): string {
        return obj.serialize();
    }
    
    class Person implements Serializable {
        constructor(private name: string, private age: number) {}
    
        serialize(): string {
            return JSON.stringify({ name: this.name, age: this.age });
        }
    }
    
    let person = new Person("Alice", 30);
    let serialized = serialize(person);
    console.log(serialized); // Output: '{"name":"Alice","age":30}'


class KeyValuePair <k, v>{
    key: k;
    value: v;

    constructor(key: k, value: v){
        this.key = key;
        this.value = value;
    }

    getKey = (): k => {
        return this.key
    }

    getValue = (): v => {
        return this.value
    }
}

const p1 = new KeyValuePair("name", "prabin")
const p2 = new KeyValuePair(1, "Prabin")
const p3 = new KeyValuePair(true, 1)
p1.getKey()
p1.getValue()
    
const fetchData = async <T>(url: string): Promise<T> => {
    const response = await fetch(url);
    const data = await response.json();
    return data as T;
}


interface Post {
    userId: number;
    id: number;
    title: string;
    body: string
}


fetchData<Post>("https://jsonplaceholder.typicode.com/posts/1")
.then(data => {
    console.log(data.body)
})
.catch(error => {
    console.log(error)
})

const sortNumber = (arr: number[], cb: (a: number, b: number) => number): number[] => {
    return arr.sort(cb);
}

console.log(sortNumber([1, 5, 2, 3], (x, y) => {return x -y} ))


const sortString = (arr: string[], cb: (a: string, b: string) => number): string[] => {
    return arr.sort(cb);
}

sortString(["abc","cda", "xyz", "bdc"], (a, b) => {return a.localeCompare(b)})


const sortObject = (arr: {id: number, name: string}[], cb: (obj1:{id: number, name: string}, obj2: {id: number, name: string}) => number): {id: number, name: string}[] => {
    return arr.sort(cb);
}


sortObject([{id: 2, name:"dfds"}, {id:1, name:"abc"}, {id: 3, name: "xyz"}], (a, b) => {return a.name.localeCompare(b.name)})


sortObject([{id: 345435435543543, name:"dfds"}, {id:3034032843432, name:"abc"}, {id: 39677777666666, name: "xyz"}], (f, g) => {return f.id - g.id} )


const sortAny = <T>(arr: T[], callback: (a: T, b: T) => number): T[] => {
    return arr.sort(callback)
}


sortAny(["dsfds","dfdsfds","disdfsdfds"], (a, b) => {return a.localeCompare(b)})
sortAny([1, 5, 1,1, 4,4,4,7,7,3,3,3,3,3,3,3], (x, y) => {return x - y})
const list = [{id: 345435435543543, name:"dfds"}, {id:3034032843432, name:"abc"}, {id: 39677777666666, name: "xyz"}]
sortAny(list, (a, b) => {return a.id - b.id})
sortAny(list, (a, b) => {return a.name.localeCompare(b.name)})



const reduceNumbers = (arr:number[], cb: (acc: number, currentItem: number) => number, initialValue: number): number => {
    return arr.reduce(cb, initialValue)
}

reduceNumbers([1, 2], (sum, i) => { return sum + i}, 0);


const reduceString = (
    arr: string[],
    cb: (acc: string, currentItem: string) => string,
    initialString: string
): string => {
    return arr.reduce(cb, initialString)
}


reduceString(
    ["a", "b", "c"],
    (str, item) => {
        return str + item
    },
    ""
)


const reduceObject = (
    arr: {
        id: number,
        name:  string,
        price: number
    }[],

    callback: (
        total: number,

        obj: {
            id: number,
            name:  string,
            price: number
        }

    ) => number,

    initalTotal: number
) => {
    // body of function
    return arr.reduce(callback, initalTotal)
}


const myItems = [{id: 1, price: 25, name: 'apple'},{id: 1, price: 25, name: 'aeroplane'},{id: 1, price: 15, name:'mango'}]
reduceObject(myItems, (total, obj) => {
    return (obj.price > 20 && obj.name.startsWith("a")) ? (total + obj.price) : total
}, 0)

const genericReducer = <T, U>(arr: T [], callback: (acc: U, item: T) => U, initialValue: U): U => {
    return arr.reduce(callback, initialValue)
}


genericReducer([1, 2, 3], (sum, num) => { return sum + num}, 0)

genericReducer(["a", "b"], (string, item) => {
    return string + item
},"")

const myObject = [{id: 1, price: 25, name: 'pple'},{id: 1, price: 25, name: 'aeroplane'},{id: 1, price: 15, name:'mango'}]
genericReducer(myObject, (sum, item) => {
    return (item.price > 20 && item.name.startsWith('a') ? (item.price + sum) : sum) 
}, 0 )



const chainNumberArray = (arr: number[],
    mapper: (item: number) => number,
    filter: (item: number) => boolean,
    reducer: (acc: number, item: number) => number,
    initialValue: number
): number => {
    return arr.map(mapper)
    .filter(filter)
    .reduce(reducer, initialValue)
}

chainNumberArray([1, 2, 3],
    num => num * 3,
    num => num > 5,
    (sum, item) => {
        return sum + item
    },
    0
)










