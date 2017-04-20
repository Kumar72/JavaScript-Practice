/*
1 : Write a function named 'reverse' ...

This function will take one argument, a string.

Return the submitted string with the characters in reverse order.

***NOTE*** Do not use the 'reverse' method on the String object, write your own.
*/

/************** Your Solution Here ****************/
function reverse(arg) {
	var string = "";
	for(i = arg.length-1; i >= 0; i--) {
		console.log(arg[i]);
		string = string + arg[i];
	};
	return string;
}
/**************************************************/

/*
2 : Write a function named 'palindromeChecker' ...

This function will take one argument, a string.

If the provided string is a palindrome (the same backwards and forwards), return
true, otherwise return false.
*/

/************** Your Solution Here ****************/
function palindromeChecker (arg) {
	var bool = false;
	var string = "";
	for(i = arg.length-1; i >= 0; i--) {
		console.log(arg[i]);
		string = string + arg[i];
	};
	if(arg === string){
		return true;
	}
	return bool;
}
/**************************************************/

/*
3 : Write a function named 'isPrime' ...

This function will take one argument, a whole number.

If the provided number is prime, return true, otherwise, return false.
*/

/************** Your Solution Here ****************/
function isPrime(prime) {
	for(i = 2; i <= (prime/2); i++) {
			if(prime%i == 0){
				return false;
			}
	}
	return true;
}
/**************************************************/

/*
4 : Write a function named 'computeTax'.

This function will take one or two arguments.

* The first argument will always be the amount tendered.

* The second argument, which is optional, could be the tax percentage (as a
whole number). If no second argument is provided, assume the tax rate is 7.5%.

Once applying the correct amount of tax, return the amount of tax owed.
*/

/************** Your Solution Here ****************/
function computeTax (amt, tax) {
	if(typeof tax == 'undefined') {
		tax = 7.5;
	}
		return amt * tax/100;
}
/**************************************************/

/*
5 : Write a function named 'calculateTotal'.

This function will take two arguments:

* The first argument is the amount owed.

* The second argument is a function which calculates tax.

  * 'calculateTotal' will use this function to calculate the amount of tax owed
  based on the amount owed. It will add this amount to the amount owed to
  calculate the total bill.

For now, assume we are passing the 'computeTax' function as the second argument.
Return the total amount owed with tax.
*/

/************** Your Solution Here ****************/
function calculateTotal(amtOwed, computeTax) {
	return amtOwed + computeTax(amtOwed);
}
/**************************************************/

/*
6 : Write a function named 'calculateTotalWithTax'.

This function will take three arguments:

* The first & second arguments are the same as the previous calculateTotal
function

* The third argument is 'tax', the amount of tax owed.

Pass the 'tax' parameter to the function included as the second argument, this
should result in the provided tax being used by the 'computeTax' function.
*/

/************** Your Solution Here ****************/
function calculateTotalWithTax(amt, calc, tax) {
	return amt + calc(amt, tax);
}
/**************************************************/
