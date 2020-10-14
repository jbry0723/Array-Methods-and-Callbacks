import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
let newarr=fifaData.filter((cb)=>{
    return cb["Year"]===2014 && cb["Stage"]==="Final"
   },0)

console.log(newarr[0]["Home Team Name"])
console.log(newarr[0]["Away Team Name"])
console.log(newarr[0]["Home Team Goals"])
console.log(newarr[0]["Away Team Goals"])
if(newarr[0]["Home Team Goals"]> newarr[0]["Away Team Goals"]) {console.log(`${newarr[0]["Home Team Name"]} won!`)}
else if (newarr[0]["Home Team Goals"] = newarr[0]["Away Team Goals"]){console.log(`It was a tie`)}
else {console.log (`${newarr[0]["Away Team Name"]} won!`)}




/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data){
    return data.filter((cb)=>{
    return cb["Stage"]==="Final";
    }) 
  }

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(data,getF) {
    let finalsYears=[]
    let finalsArray=getF(data)
 finalsArray.forEach(function(current){
 return finalsYears.push(current["Year"])
 })
 return (finalsYears)
  }

  getYears(fifaData,getFinals)

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(getF,data) {
    let winnersArray=[]
    let finalsArray=getF(data);
    for(i in finalsArray){
      if(finalsArray[i]["Home Team Goals"]>finalsArray[i]["Away Team Goals"]) {
        winnersArray.push(finalsArray[i]["Home Team Name"])}
      else if (finalsArray[i]["Home Team Goals"]<finalsArray[i]["Away Team Goals"]){winnersArray.push(finalsArray[i]["Away Team Name"])}
    }
  
  return(winnersArray)
  };

  getWinners(getFinals,fifaData)


/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(getF,getFY,getW,data) {
    w=getW(getF,data);
     y=getFY(data,getF);
     f=[]
    for (i in w){
     f.push(`In ${y[i]}, ${w[i]} won the world cup!`)
    }
    return(f)
  };

getWinnersByYear(getFinals,getYears,getWinners,fifaData)

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    let aHomeGoals=(data.reduce(function(counter,cb){
      return counter + cb["Home Team Goals"]
    },0)/data.length)
    
    let aAwayGoals=(data.reduce(function(counter,cb){
      return counter + cb["Away Team Goals"]
    },0)/data.length)
    
    return `Home Team Average:${aHomeGoals}\n Away Team Average: ${aAwayGoals}`
    
    };
    

getAverageGoals(fifaData)

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
