class House {
    public address: string;
    public room: number;
    public isNearTrainStation: boolean;

    constructor(address: string, room: number, isNearTrainStation: boolean){
        this.address = address;
        this.room = room;
        this.isNearTrainStation = isNearTrainStation;
    }

    public describe () {
        console.log(`address: ${this.address} room number: ${this.room}`)
    }

    public changeLocation = (isFar: boolean) => {
        this.isNearTrainStation = isFar;
    }
}


const myHouse = new House('11 easton ct', 3, false);

myHouse.changeLocation(true)

