
//1. Start with the number 14 and set that equal to 'value'
var value = 14;
console.log(value);

//2. Create condition logic to check if the value is great or equal to 86
//2-1. If true, add 14 to 'value'
//2-2. If false, subtract 2 from 'value'
if (value >=86){
	value = value + 14;
}
else{
	value = value - 2;
}
console.log(value);

//3. Create a string that is set to 64, add it to 'value'
value = value + "64";
console.log(value);

//4. Create an array, loop through 'value' using charAt, set array[i] to each value
var array = [];
for(var i=0; i<value.length; i++){
	array.push(value.charAt(i));
}
console.log(array);

//5. Remove the first and last values off the array
array.shift();
array.pop();
console.log(array);

//6. Create a new variable. Loop backwards through the array and store each value into the new 
//Variable, combining each of the values of that array (backwards remember!)
var newVariable = ""
for(i=0; i<array.length+1; i++){
	newVariable += array.pop();
}
console.log(newVariable);

//7. parseInt both the 'value' and the new variable created in Step 6, ensure that both 'value' and the new variable are set to these new parsed values;
value = parseInt(value);
newVariable = parseInt(newVariable);
console.log(value);
console.log(newVariable);

//8. Add 'value' and the new variable created in Step 6 together and store them in 'value'
value = value + newVariable;
console.log(value);

//9. If the new value of 'value' is greater than 1326, set 'value' equal to 2. If not, check to see 
//if it is equal to 4040, if it is, set 'value' equal to 13. 
//If neither of these are true, set the value to 9.
if(value>1326){
	value = 2;
}
else if(value==4040){
	value = 13;
}
else{
	value = 9;
}
console.log(value);

//10. Create a while loop that counts down from 9 and increments 'value' by 1.
i = 9;
while(i>0){
	value += 1;
	i--;
}
console.log(value);

//11. Create a function that accepts an argument 'val'. The function should convert 'val' to a String,
// then drop the first character off the String, but only if there 
//is more than 1 character in the String. Return 'val' and set the 'value' to the returned value.
function someFunction(val){
	value = value.toString();
	if(value.length>1){
		value = value.slice(1, value.length);
		return value;
	}
	else{
		return value;
	}
}


//12. Call the function.
someFunction(value);

//13. Console log value. Create an index.html file, link the this Javascript file. Load in the browser, check the value.
console.log(value);

//14. Your answer should be a String value that equals 8. Is that what you got?
	//YES!

