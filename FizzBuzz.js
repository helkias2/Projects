/*

FizzBuzz from Codecademy

///////////////////////////

Simple, could jazz it up a bit

*/

for (i= 1; i <= 20; i++) {
    if ( i % 3 === 0 && i % 5 === 0 ) {
        console.log('FizzBuzz');
    } else if ( i % 5 === 0 ) {
        console.log('Buzz');
    } else if ( i % 3 === 0 ) {
        console.log('Fizz');
    } else {
        console.log(i);
    };
};