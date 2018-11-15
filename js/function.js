const warriors = [
    {
        name: 'bob',
        type: 'none',
        weapons: 'nothing',
    },
    {
        name: '2',
        type: 'none2',
        weapons: 'nothing2',
    },
    {
        name: '3',
        type: 'none3',
        weapons: 'nothing3',
    }
]

const workingOut = () => {
    warriors.map((warrior) => {
        if (warrior.name === 'bob') {
            let testing = warrior.name;
            console.log(`oh no ${testing} is ${warrior.type}`);
        }
    }
    )// map function is like foreach, but for faster changing and altering data, it creates a new array with the results of calling a provided function on every element in the calling array.
    //Which mean it call a provided function on every element in the array. Also utilizes return values and actually returns a new Array of the same size. 
        //EG let doubled = arr.map(num => {
            // return num * 2;
        //}); the result will be the new array double will have arr result but double.
        // Eg 2 let arr = [1, 2, 3, 4, 5]; 
        //let arr2 = arr.map(num => num * 2).filter(num => num > 5); result will be arr2 = [6, 8, 10]
        //this function mean it get the arr array use map function to change it, double it and then filter throguht the array and only save the number greateer than 5 than save it to arr2. 
}

workingOut();