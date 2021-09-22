//task3
//Write a JavaScript function to get all possible subsets of given length of the given array.
//Assume that all elements in the array are unique.

function getAllPossibleSubsets(arr, length, result = []){
    let arr1 = [];
    if(arr.length === length){
        result.push(arr);
        return result;
    }
    for(let i = arr.length - 1; i >= length - 1; i--){
        for(let j = 0; j < length; j++){
            if(j < length-1);
                arr1.push(arr[j]);
            }
            arr1.push(arr[i]); 
        if(arr1.length === length){
            result.push(arr1)
            arr1 = [];
        }
    }
    arr.shift();
    getAllPossibleSubsets(arr, length,result);
    return result;
}
