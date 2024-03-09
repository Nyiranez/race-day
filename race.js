let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
const age = 20;

if(age >18 && registeredEarly){
    raceNumber+=1000;
}

if (age>18 && registeredEarly) {
    console.log("they will race at 9:30 am."+" "+ raceNumber);
  }
  else if(age>18 && !registeredEarly){
    console.log("they will race at 11:00 am."+" "+ raceNumber);
  }
  else if(age<18){
   console.log("they will race at 12:30 pm."+" "+ raceNumber)
  }
  else{
    console.log("go to registration desk");
  }