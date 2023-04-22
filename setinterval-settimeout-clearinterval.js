


function start2() {
    let test2 =  setInterval(() => {
  
         console.log({response2: "zoot"});
     }, 3000)
  
  
  setTimeout(() => {
  
  clearInterval(test2);
      
  }, 24000)
      
      
  }
  // response2: "zoot" will print 8 times.


  // works as intended, random damage works and resets hp when dead
  // doesn't let it keep "attack" if the guy is killed

  let p1 = {hp: 243};

  function doDmg(playerObj){
    // random damage from 1 to 3
    // must be a funciton or the first random number it gets will be 
    // the same for each time the doDmg() function is run
    let ogHp = 243;

    function randomDamage() { 
        return Math.ceil((Math.random() * 1) + 2);
     } 
    
    let dmgCalc = setInterval(() => {

        if(p1.hp <= 0 ){
            clearInterval(dmgCalc);
            console.log("guy done");
            p1.hp = ogHp;
            return;
        }

        p1.hp -= randomDamage();
        return console.log({p1Hp: p1.hp});
    }, 300);    

    setTimeout(() => {

        clearInterval(dmgCalc);

    }, 1500)


  }