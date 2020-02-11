
let myName = ['Carlos','Salazar'];

function join(arr,separator){


    if (!separator){
        separator = " ";
    }


    if (arr.length === 0 || arr === "null"){
        return '';
    } 

    let returnString = '';

    for(let i = 0; i<arr.length; i++) {
        if (i === arr.length-1){
            returnString += arr[i];
        } else {
            returnString += arr[i];
            returnString += separator;
        }
    }

    return returnString;

}

function createProfile(name){
    let returnObject = {};

    returnObject["name"] = join(['Carlos','Salazar']);

    returnObject["email"] = "carlos@gmail.com"

    return returnObject;

}

let myProfile = createProfile("Carlos");
console.log(myProfile)