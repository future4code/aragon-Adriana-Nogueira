
type  Person = {
    name: string;
  };

   const person = { 
    name: 'Rafael',
  };


function sayMyName(name: string  |number ) {
  console.log(`My id is ${name} !`)
};

sayMyName('Rafael'); 
sayMyName(18); 