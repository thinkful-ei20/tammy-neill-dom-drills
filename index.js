'use strict'

function fizzBuzz(num) {
  if (num % 5 === 0 && num % 3 === 0) {
    return 'fizzbuzz';
  } else if (num % 5 === 0) {
    return 'buzz';
  } else if (num % 3 === 0) {
    return 'fizz';
  } 
  return num;
}

function fizzbuzzer(total) {
  const results = [];
  for (let i = 1; i <= total; i ++) {
   results.push(fizzBuzz(i));
  }
}


const html = resultsToHtml(fizzResults);
 return results.map(number => {
   
 }
  
  
  // array of divs
$('.js-resuls').append(html);

//check for DOM ready
function main() {
  console.log('DOM is ready');

//get value of submit

function handleSubmit(){
    $('form').on('submit', event => {
    event.preventDefault();
    const value = $('#number-choice').val();
    const fizzResults = fizzbuzzer(number);
    // gives array of numbers [1, 2, 'fizz']
    }
    
});

}