// Basic types
let myname: string = "prabin";
let isDone: boolean = true;
let myList: string[] = ["dfd","dfdf"];
let myNumbers: number[] = [1, 2, 3];


// Enums

export enum actionTypes {
    ADD_ITEM = 'ADD_ITEM',
    REMOVE_ITEM = 'REMOVE_ITEM',
    UPDATE_ITEM = 'UPDATE-ITEM',
    GET_TOTAL = 'GET_TOTAL',
    DO_SOMETHING = 'DO_SOMETHING',
    ADD_ITEM_CHAR = 'ADD-ITEM_CHAR',
    REMOVE_ITEMS = 'REMOVE-ITEMS',
}

enum Age {
    TEN=10,
    TWENTY = 20,
    ELEVEN= 11,
    TWENTY_ONE= 21
}


export const classifyAge = (age: number) => {
    if(age < Age.TEN){
        console.log('You are less than  10')
    }

    else if (age > Age.ELEVEN &&  age < Age.TWENTY){
        console.log('You are between 10 and 20')
    }
    
    else if (age > Age.TWENTY_ONE){
        console.log("You are older than 20")
    }
}










