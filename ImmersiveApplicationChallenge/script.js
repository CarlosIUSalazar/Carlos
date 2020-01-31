const myName =['Yasuhiko','Nara'];
​
// function join(array, separator = ' '){
// 	if (!Array.isArray(array)){return ''}
// 	// confirm array is Array, and return ''(empty string) if is not Array
	
//     array = array.map(function(value){
//         return (value == null || value.length === 0) ? '' : value;
//     });
// 	// element inside array is converted to '' if it is [], null or undefined
	
//     if (array.length > 0){
// 		//return '' if array is []
		
//         let result = array[0];
//         for (let i = 1; i < array.length; i++){
//             result += separator + array[i]
//         }
//         return result;
//     } else return ''
// }
​

function join(arr, separator = ' '){
    result = '';
    if (arr === [] || arr === undefined){
            return '';
    } else {
            for (let i=0; i<arr.length; i++){
                if (i != arr.length - 1){
                  result += arr[i] + separator;
                } else {
                    result += arr[i];
                }    
            }
            return result;
    }
}

function createProfile(name){
    return {
        name: join(name),
        email: 'narayasuhiko3@gmail.com'
    }
}
const myProfile = createProfile(myName);
console.log(myProfile);

