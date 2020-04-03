// Exercise: Level 1

let challenge  = '30 Days Of JavaScript';
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLocaleLowerCase());
console.log(challenge.substr(0,1));
console.log(challenge.slice(0,challenge.length));
console.log(challenge.includes('Script'));
console.log(challenge.replace(challenge,'30 Days Of Python')); //string.replace(oldsubstring, newsubstring)
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt(13)); //charCodeAt(): Takes index and it returns char code(ASCII number) of the value at that index
console.log(challenge.indexOf('a')); //indexOf(): Takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1
console.log(challenge.lastIndexOf('a'));
let str1 = 'You cannot end a sentence with because because because is a conjunction';
console.log(str1.indexOf('because'));
console.log(str1.lastIndexOf('because'));
console.log(str1.search('because'));

let regEx = /a/gi;
console.log(challenge.match(regEx));

list = challenge.split( '');
list = challenge.split( ' ');
console.log(list);

int1 = '10';
parsed_int = parseInt(int1);
if (typeof parsed_int === typeof 10) {
    console.log("True")
}

s1 = 'python';
s2 = 'jargon';
if (s1.search('on') === s2.search('on')) {
    console.log("True")
}

let s3 = 'I hope this course is not full of jargon';
if (s3.search('jargon')) {
    console.log("True")
}

let randomNum = Math.random()         // generates 0 to 0.999
let numBtnZeroAndTen = randomNum * 101
console.log(numBtnZeroAndTen)

//Generate a random number between 50 and 100 inclusive;
randNum = Math.random();
num  = randNum * (100 - 50 + 1) + 50; // generate random num ==> randnum(upper - lower) + lower
console.log(num);

console.log('1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125');

let s10 = 'You cannot end a sentence with because because because is a conjunction';
console.log(s10.substr(31,23));

s11= 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
r = /love/gi; //// g-means to search in the whole text, i - case insensitive
noOfString = s11.match(r);
console.log(noOfString.length);

s1 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
r = /\d+/gi;
allMoney  = s1.match(r);
console.log(allMoney);
total= allMoney.reduce(myFunc, 0)
console.log(total)

function myFunc(total, num) {
  return total + parseInt(num);
}

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';



// Slice charateristics:
let text1 = 'Hello';
/* If start is negative, It sets char from the end of string, like substr().
startindex = stringlength + startindex  */
text1.slice(-2,4); // (3,4)

/*  Difference between String.slice and String.substring

substring()
Separate results of substring()

If start > stop, then function swaps both arguments.
If any argument is negative or is NaN, it is treated as 0.

slice()
Separate results of slice()

If start > stop, This function will return an empty string. (“”)
If start is negative, It sets char from the end of string, like substr().
If stop is negative, It sets stop = string.length – Math.abs(stop) (original value)
 */

/* This explain the behaviour of trim, replace etc.

 In JavaScript, strings are immutable objects, which means that the characters within them may not be
 changed and that any operations on strings actually create new strings.
 Strings are assigned by reference, not by value. In general, when an object is assigned by reference,
 a change made to the object through one reference will be visible through all other references to the object. Because strings cannot be changed, however,
 you can have multiple references to a string object and not worry that the string value will change without your knowing it
 */

/*indexOf is for plain substrings, search is for regular expressions.
The search function (one description here) takes a regular expression,
which allows you to match against more sophisticated patters, case-insensitive strings, etc.,
while indexOf (one description here) simply matches a literal string
 */
