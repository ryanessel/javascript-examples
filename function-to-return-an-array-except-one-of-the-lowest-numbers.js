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


// rolls 4d6
// you can run this as a callback in the removeLowestValOnce(arr) since it poops out an array.
// it might be good to console log the array too so that it can be seen that 4 rolls are being done and that
// it's just the smallest number that is being removed.
// other wise its digging a hole just to fill it back up

    function createArray(){

        const randD6Res = () => {return Math.ceil(Math.random()* 6)}

        const test = {
            res1: randD6Res(),
            res2: randD6Res(),
            res3: randD6Res(),
            res4: randD6Res()
        }
        
    const T4d6T = [test.res1, test.res2, test.res3, test.res4]
    // like this we can see what was rolled then what was kept.
    //bretty cool
    console.log(T4d6T);
    return T4d6T;
    
    }