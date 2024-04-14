
// Leap year checker ----------------------------------

function leapChecker(year){
    
    if (year%4===0 || year%400===0){
        return "Not a leap years";
    }
    else if (year%100===0){
        return" leap years";
    }
    else {return(`${year} is not a number`);
    }
    }
    console.log(leapChecker("pizza"))
    console.log(leapChecker("15245"))    
    console.log(leapChecker("1997")) 
    console.log(leapChecker("2016"))


    // ticket pricing  ------------------------

    function ticketPricing(age){

        if(age <=12){
            return "The price of the movie is $10";
        }
        else if(age >13 && age<=17){
            return "The price of the movie is $15";
        }
        else if(age >=18){
            return "The price of the movie is $20";
        }
        else return (`${age} Is not a number =>Please enter your age!!`);

    }
console.log(ticketPricing("25"))
console.log(ticketPricing("chawarma"))
console.log(ticketPricing("7"))
console.log(ticketPricing("15"))

// Output
// The price of the movie is $20
// chawarma Is not a number =>Please enter your age!!
//  The price of the movie is $10
// The price of the movie is $15








// weather clothing adviser using switch ------------------


let temp = 30;
let advice;

    switch(true){

        case temp <= 0:
        advice= " it is snowy and very cold => You have to wear a heavy coat  "; break;

        case temp >0 && temp <= 15 :
        advice= "its a little cold and probably raining => pack an umbrella."; break;

        case temp >15 && temp <= 23 :
        advice= " its sunny but not enough hot"; break;

        case temp > 23 && temp <= 27:
        advice =" its a nice weather => wear a t-shirt and short" ; break;
        
        case temp > 27 :
        advice =" ready to swim ?"; break;

        default :
        advice = `${temp} is not a number so can't define temperature !!`;

     }
            
    
    console.log(temp+' '+'=>'+' ' + advice);



    // Fibonacci Sequence using recursion ------------------------



    function fibonacci(n) {
        if (n <= 1) {
          return n;
        }
        return fibonacci(n - 1) + fibonacci(n - 2);
      }
      
      console.log(fibonacci(9));  // the nth Fibonacci number

      // output = 34




    //    Function to check if a given string is a palindrome using recursion ----------------
    //    -----------------------


function isPalindrome(str) {
    // Base case: if the string has 0 or 1 characters, it's a palindrome
    if (str.length <= 1) {
      return true;
    }
  
    // Check if the first and last characters are equal
    else if (str[0] !== str[str.length - 1]) {
      return false;
    } 
    else {
      // Recursively check the substring excluding the first and last characters
      return isPalindrome(str.slice(1, -1));
    }
  }
  
  // Test the function with different input strings
  console.log(isPalindrome("madam")); // Output: true (palindrome)
  console.log(isPalindrome("abdb"));  // Output: false (not a palindrome)
  console.log(isPalindrome("ab"));    // Output: false (not a palindrome)
  console.log(isPalindrome("a"));     // Output: true (palindrome)




  // Recursive function to compute Power -----------------



function pow(n, p) { 
    if (p == 1) return n; 
    return n * pow(n, p - 1); 
} 
  
// Base number input 
let n = 8; 
  
// Power input 
let power = 3 
  
// Display output 
console.log(pow(n, power));