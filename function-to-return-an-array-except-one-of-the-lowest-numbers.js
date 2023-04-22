// this is useful for getting dnd stats when you make a character
//this will remove only 1 instance of the lowest number but leave the remainder.
// again the bit below makes sene for dnd
function removeLowestValeOnce(arr){

    for (let i = 0; i < arr.length; i++){
    
        console.log(arr[i]);
    
        const min = Math.min(...arr);
        const minIndex = arr.indexOf(min)
        return arr.filter((_, e) => e !== minIndex)
        
    }
    
    }