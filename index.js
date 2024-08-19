// export / import 



import{greet} from './greet.js';

console.log(greet('Ntombi'));
console.log(greet('Sifiso'));
console.log(greet('Bonginkosi'));
import  cowsay from 'cowsay';
console.log (chalk.bgGreen.white(cowsay.say({
    text:greet('Eugene')
})));





import figlet from  'figlet'
figlet("Hello Bonginkosi!!", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });


import chalk from 'chalk';
//import the greet module that is in the current folder
//import greet from './greet.js'

const styledMessage = chalk.bgRed.whiteBright(greet('Bonginkosi'));
console.log(styledMessage)
