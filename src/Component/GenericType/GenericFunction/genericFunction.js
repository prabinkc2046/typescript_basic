


const mapMyArray = (array, callBack) => {
    return array.map(callBack)
}


const result = mapMyArray([{name: "prabin1", state: true}, {name: "prabin2", state: false}, {name: "prabin3", state: true}], (obj) => obj.state === true ? {...obj, name: obj.name + " "} : obj)

console.log(result)




const filterByCallback = (arr, callback) => {
    return arr.filter(callback)
}


const filtered = filterByCallback([1, 2, 3, 4, 5, 6, 7], item => item % 2 === 0)

console.log(filtered)

const filter1 = filterByCallback(["sdfds", "sffewrew", "fsdfdf"], str => str.length > 5)

console.log(filter1)


const fetchData = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    return data
}

// fetchData()
// .then(data => {
//     console.log(data.body)
// })
// .catch(error => {
//     console.log(error)
// })


const sortArray = (arr) => {
    return arr.sort((a, b) => {
        return b - a
    })
}

const result1 = sortArray([1,4, 3,1])

console.log("highest value", result1[0])
console.log("Lowest value", result1[result1.length - 1])
console.log(result1)

const sortStringArray = (arr) => {
    return arr.sort((a, b) => {
        return a.localeCompare(b)
    })
}
const result5 = sortStringArray(["abc","bcd", "xsy", "ccd"]);
console.log(result5)




const sortObject = (arr) => {
    return arr.sort((a, b) => {
        return a.id - b.id
    })
}

console.log(sortObject([{id: 2, name:"dfds"}, {id:1, name:"abc"}, {id: 3, name: "xyz"}]
));


const addNumber = (arr, cb) => {
    return arr.reduce(cb)
}


addNumber([1, 2, 3], (sum, item) => {
    return  sum + item
}, 0)





const reduceObject = (arr) => {
    return arr.reduce(
        (sum, item) => {
            return (item.price > 20 && item.name.startsWith("a")) ? (sum + item.price) : sum
        },
        0
    )
}

console.log(reduceObject([{id: 1, price: 25, name: 'pple'},{id: 1, price: 25, name: 'aeroplane'},{id: 1, price: 15, name:'mango'} ]))


const chainNumbers = (arr, mapper, filter, accumulate, initial) => {
    return arr.map(mapper)
    .filter(filter)
    .reduce(accumulate, initial)
}


console.log(chainNumbers([1, 2, 3, 4, 6], item => item * 2, item => item > 10, (sum, item) => {return sum + item}, 0))

class Chainable {
    constructor(array){
        this.array = array
    }

    map = (mapper) => {
        const newArray = this.array.map(mapper)
        return new Chainable(newArray)
    }

    filter = (filter) => {
        const newArray = this.array.filter(filter)
        return new Chainable(newArray)
    }

    reduce = (reduceArg) => {
        return this.array.reduce(reduceArg)
    }
    getValue = () => {
        return this.array
    }

}

const arr1 = new Chainable([1, 2, 6])
.map(num => num * 2)
.filter(num => num % 2 === 0)
.getValue()
.reduce((sum, num) => {
    return sum + num
}, 0)









