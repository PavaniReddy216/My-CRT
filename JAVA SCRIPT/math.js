// JAVASCRIPT MATH 

//JAVASCRIPT MATH OBJECT

console.log(' Math.E returns Eulers number')
console.log(Math.E );       
console.log(' Math.PI returns PI value')
console.log(Math.PI );
console.log(' Math.SQRT2 returns the square root of 2')
console.log(Math.SQRT2);    
console.log(' Math.SQRT1_2 returns the square root of 1/2')
console.log(Math.SQRT1_2); 
console.log(' Math.LN2 returns the natural logarithm of 2')
console.log(Math.LN2);   
console.log(' Math.LN10 returns the natural logarithm of 10')
console.log(Math.LN10);   
console.log(' Math.LOG2E returns base 2 logarithm of E')
console.log(Math.LOG2E);  
console.log(' Math.LOG10E returns base 10 logarithm of E')
console.log(Math.LOG10E ); 

//Math Methods

//Math.round(x) returns the nearest integer
console.log('round()');
console.log(Math.round(4.6));
console.log(Math.round(4.4));

//Math.ceil(x) returns the value of x rounded up to its nearest integer:
console.log('ceil()');
console.log(Math.ceil(4.9));
console.log(Math.ceil(4.2));

//Math.floor(x) returns the value of x rounded down to its nearest integer:
console.log('floor()');
console.log(Math.floor(4.2));
console.log(Math.floor(4.9));

//Math.trunc(x) returns the integer part of x
console.log('trunc()');
console.log(Math.trunc(4.9));
console.log(Math.trunc(4.2));

//Math.sign(x) returns if x is negative, null or positive
console.log('Math.sign()');
console.log(Math.sign(7));
console.log(Math.sign(-7));
//math.trunc() & math.sign() are ES6 features

//Math.pow(x, y) returns the value of x to the power of y:
console.log('pow()');
console.log(Math.pow(8, 2));

//Math.sqrt(x) returns the square root of x
console.log('sqrt()');
console.log(Math.sqrt(34));

//Math.abs(x) returns the absolute (positive) value of x
console.log('abs()');
Math.abs(-4.7);

//Math.sin(x) returns the sine (a value between -1 and 1) of the angle x (given in radians).
console.log('sin()');
console.log(Math.sin(90 * Math.PI / 180));//Angle in radians = Angle in degrees x PI / 180.


//Math.cos(x) returns the cosine (a value between -1 and 1) of the angle x (given in radians).
console.log('cos()');
console.log(Math.cos(0 * Math.PI / 180));


//Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments:
console.log('min()');
console.log(Math.min(0, 150, 30, 20, -8, -200))
console.log('max()');
console.log(Math.max(0, 150, 30, 20, -8, -200))

//Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):
console.log('random()');
console.log(Math.random())

//Math.log(x) returns the natural logarithm of x.
console.log('log()')
console.log(Math.log(1))

//Math.log2(x) returns the base 2 logarithm of x.
console.log('log2()')
console.log(Math.log2(8))

//Math.log10(x) returns the base 10 logarithm of x.
console.log('log10()')
console.log(Math.log10(1000))