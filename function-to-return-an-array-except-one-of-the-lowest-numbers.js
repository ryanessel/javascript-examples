// this is useful for getting dnd stats when you make a character

function removeLowestValeOnce(arr){

    for (let i = 0; i < arr.length; i++){
    
        console.log(arr[i]);
    
        const min = Math.min(...arr);
        const minIndex = arr.indexOf(min)
        return arr.filter((_, e) => e !== minIndex)
        
    }
    
    }