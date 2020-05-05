const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



rl.question('What is your name? ', (name) => {
  rl.question('What is  your favourite activity? ', (activity) => {
    rl.question('What is your favourite type of music? ', (music) => {
      rl.question('What is your go to meal? ', (food) => {
        rl.question('Who is your favourite sports team? ', (team) => {
          rl.question('Who is your favourite player on that team? ', (player) => {
            rl.question('Finally, what is your super power? ', (power) => {
              console.log(`Hello, my name is ${name} and my favourite activity is ${activity}. My favourite meal
              on any given day of the week is ${food} and I listen to ${music} music. My favourite
              sports team is the ${team} and my favourite player on that team is ${player}. 
              My super power is ${power} and it's something I'm very proud of.`)
              rl.close();
            });
          });
        });
      });
    });
  });
});
