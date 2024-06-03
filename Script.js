
console.log ("Hello world")

//Question 02: Personal Message: Store a person’s name in a variable, and print a message to that person.
// Your message should be simple, such as, “Hello Eric, would you like to learn some Javascript today?”
let PersonName= "Eric";
console.log("Hello " + PersonName+", would you like to learn some Python today?")


//Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let Myname= "Arif"

console.log(Myname.toLowerCase())
console.log(Myname.toUpperCase())
console.log(Myname)

/*Question 4: Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something
like the folowing, including the quotation marks: 
Albert Einstein once said, “A person who never made a mistake never tried anything new.” */

let NewQoute= 'Once a wise man said."luck is not in your hands but descision is, your luck cant make your decisions but your decisions can make your luck so trust yourself"'

console.log(NewQoute)

/* 5.Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your
message and store it in a new variable called message. Print your message.*/

let famous_person="unknown wise man"
let message='"luck is not in your hands but descision is, your luck cant make your decisions but your decisions can make your luck so trust yourself".'

console.log("Once a " + (famous_person) + "said," + (message))


/* Question 06: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use 
each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the
name after striping the white spaces.*/

let Whitespace="\n\t\Arif_khadim\n\t\n"
console.log(Whitespace)

let Remove_whitespace= Whitespace.trim()
console.log(Remove_whitespace)


/* Question  07: Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose
your operations in print statements to see the results. */

let add= 5+3;
let subtract=9-1;
let division= 24/3;
let multiply= 4*2;

console.log( "for addition " + add,"Subtraction " + subtract, "Divison " + division, "multiplication " + multiply)


/* 8. You should create four lines that look like this:
console.log(5 + 3) */

console.log(6+2)
console.log(10-2)
console.log(8*1)
console.log(48/6)

/* Question 09: Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number
Print that message.*/

let favNumber= 18;

console.log('My favourite numer is '+(favNumber))

/* Question  10; Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific
to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then
write one sentence describing what the program does. */

// Myself is Muhammad Arif and im working on my assigment dated 29/05/2024
// console.log(6+2)
// console.log(10-2)
// console.log(8*1)
// console.log(48/6)
// in this program im trying to evulate 8 answer by operating different mathematics operations 


/* Question 11:  Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the 
list, one at a time. */

let names= ["touseef", "faisal", "fahad", "naseem", "hamza"]

console.log(names[0])
console.log(names[1])
console.log(names[2])
console.log(names[3])
console.log(names[4])


/* Question 12: Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them.
The text of each message should be the same, but each message should be personalized with the person’s name. */

for (let i=0; i<names.length; i++){
    let persons = names[i];
    console.log("Hello " + persons + " how are you?")
}


/* Question 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several 
examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.” */

let MyfavVehicles=["Honda", "Mercedes", "Ferrari", "Tesla"]

for( let i=0; i< MyfavVehicles.length; i++){
let PrintVehicles= MyfavVehicles[i];
 console.log("I would like to own a " +PrintVehicles)
}

/* Question 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three 
people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
*/

let guest= ["Zubair", "Touseef", "Fahad","Adil", "Nazeer" , "Noor Ahmed"]


for (let i=0; i<guest.length; i++){
    let inivitesThem= guest[i]
    console.log(inivitesThem + " you are inivited for a dinner tonight at my home")
}

/* Question 15; Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll 
have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.
*/

console.log(guest[0]+ " is not coming due to some personal reasons")
 guest[0]="Faisal"

 for (let i=0; i<guest.length; i++){
    let inivitesThem= guest[i]
    console.log(inivitesThem + " you all guys have to join me tonight at dinner, hope u all will be there")
}


/* Question 16: More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner
table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
• Print a new set of invitation messages, one for each person in your list.
*/

console.log (" Three more friends are going to join us so now we have a bigger table")

guest.unshift("Shahnawaz")
guest.push("Yousuf")
guest.splice(4,0,"Juma Khan")

console.log(guest)

for (let i=0; i<guest.length; i++){
    let inivitesThem= guest[i]
    console.log(inivitesThem + " three of our old friends are coming so here is the new list")
}

/* Question 16: Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a
message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
of your program.
*/
let NewAnnoucement="Im inviting only two Guest due to some issues"

console.log(NewAnnoucement)

let Guest1= guest.pop();
console.log("Sorry " +Guest1+" you can’t invite them to dinner." )

let Guest2= guest.pop();
console.log("Sorry " +Guest2+" you can’t invite them to dinner." )

let Guest3= guest.pop();
console.log("Sorry " +Guest3+" you can’t invite them to dinner." )

let Guest4= guest.pop();
console.log("Sorry " +Guest4+" you can’t invite them to dinner." )

let Guest5= guest.pop();
console.log("Sorry " +Guest5+" you can’t invite them to dinner." )

let Guest6= guest.pop();
console.log("Sorry " +Guest6+" you can’t invite them to dinner." )

let Guest7= guest.pop();
console.log("Sorry " +Guest7+" you can’t invite them to dinner." )


for(let i=0; i<guest.length; i++){
    anotherList=guest[i]

    console.log(anotherList +" u have been inivited for a dinner tonight")
}

let Guest8= guest.pop();
let Guest9= guest.pop();

console.log(guest)


/*Question 18: Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
*/
let MyfavPlaces=["saudia Arabia", "Turkey", "Italy", "Canada" , "Iran"]
console.log(MyfavPlaces);

let copyofArray = MyfavPlaces.slice()
console.log(copyofArray)
let sortedArray = copyofArray.sort()
console.log(sortedArray);

// for checking my original array

console.log(MyfavPlaces)

// for reverse alphabetic order

let copyofArray2= copyofArray.slice();
console.log(copyofArray2)
let reverseSortedArray= sortedArray.reverse();
console.log(reverseSortedArray)

let ReverseTheOrder= reverseSortedArray.reverse()
console.log(ReverseTheOrder);

let AlphabeticOrder= ReverseTheOrder.sort();
console.log(AlphabeticOrder)

let reverseItAgain= AlphabeticOrder.slice()
let MakeIt=reverseItAgain.reverse();
console.log(MakeIt)

/* Question 19: Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are
inviting to dinner.
*/
console.log("Im inviting the " + guest.length + " tonight at our dinner party")

/* Question 20:  Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or 
anything else you’d like. Write a program that creates a list containing these items.
*/

let Cities=["Karachi", "Islamabad" , "lahore" ,"hyderabad" ,"Multan" ,"Quetta"]


for (let i=0; i<Cities.length; i++){
    
    console.log(Cities[i])
}

/* Question 21: They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
*/


let MyObj={
    Name:"Unknown",
    Age:20,
    Gender:"male",
    Education:"MA"
}

console.log(MyObj)


/* Question 22: Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen.
Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
*/

let MyArray=["First", "Second" , "third"]

// console.log(MyArray[5])
console.log(MyArray[2])


/*Question 23; Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each
test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
*/


let Gender= "Male";

console.log("Is Gender == 'Male'? I predict True.")
console.log(Gender == 'Male')

console.log("Is Gender == 'Female'? I predict False.")
console.log(Gender == 'Female')

let Friends= "Goods";

console.log("Is Friends == 'Goods'? I predict True.")
console.log(Friends == 'Goods')

console.log("Is Friends == 'Bad'? I predict False.")
console.log(Friends == 'Bad')

let Bike= "Yamaha";

console.log("Is Bike == 'Heavy'? I predict True.")
console.log(Bike == 'Yamaha')

console.log("Is Bike == 'CD70'? I predict False.")
console.log(Bike == 'CD70')

let Pakistan= "Peaceful"

console.log("Is Pakistan == 'Peacefull'? I predict True.")
console.log(Pakistan == 'Peaceful')

console.log("Is Pakistan == ' Not a Peaceful'? I predict False.")
console.log(Pakistan == 'Not a Peaceful')


let Karachi= "City of Lights"

console.log("Is Karchi == 'City of Lights'? I predict True.")
console.log(Karachi == 'City of Lights')

console.log("Is Karachi == 'Not a city of light'? I predict False.")
console.log(Karachi == 'Not a city of light')

/* Question 24: More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests.
Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array 
*/


let Strings= "Testing"


console.log(Strings!=="Testing")
console.log(Strings=="Testing");

let Numbers= 10;
console.log(Numbers==10 )
console.log(Numbers!==10 )
console.log(Numbers <= 12 )
console.log(Numbers >= 12)
console.log (Numbers > 1);                              // greater than 
console.log (Numbers< 1);                              // less than

let Num1= 12;
let Num2= 11;

console.log(Num1 < 10 && Num2 > 8)
console.log(Num1 == 12 || Num2==11)


// Array or not in a Array 
let AnotherArray = [10 , 12 , `Sahir`];
let AnotherString = (`Hussain`);

console.log (Array.isArray(AnotherArray));
console.log (Array.isArray(AnotherString));

/*
25.  Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green',
'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
*/

let AlienColor= "Green";

if(AlienColor=="Green"){
    console.log("Congeratulations u have earned 5 points as u killed an Alien")
}

else{console.log("Sorry does not get any ponits")};


/* Question 26: Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.
*/

if(AlienColor=="Green"){
    console.log("Congeratulations u have earned 5 points")
}

else{console.log("Congeratulations u have earned 10 points")};

// Another version of program

if(AlienColor=="White"){
    console.log("Congeratulations u have earned 5 points")
}

else{console.log("Congeratulations u have earned 10 points")};


/* Question 27: Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.
*/

if(AlienColor=="Green"){
    console.log("Congeratulations u have earned 5 points by killed a Green Alien")
}

else if(AlienColor="Yellow"){
    console.log("Congeratulations u have earned 10 points")
}

else if(AlienColor="Red"){
    console.log("Congeratulations u have earned 20 points")
}

else(console.log("U have not killed any Alien, ja so ja tere bus ki baat hi nhi"))


let AlienColor2="Yellow";

if(AlienColor2=="Green"){
    console.log("Congeratulations u have earned 5 points by killed a Green Alien")
}

else if(AlienColor2="Yellow"){
    console.log("Congeratulations u have earned 10 points by killed a Yellow Alien")
}

else if(AlienColor2="Red"){
    console.log("Congeratulations u have earned 20 points")
}

else(console.log("U have not killed any Alien, ja so ja tere bus ki baat hi nhi"))


let AlienColor3="Red";

if(AlienColor3=="Green"){
    console.log("Congeratulations u have earned 5 points by killed a Green Alien")
}

else if(AlienColor3="Yellow"){
    console.log("Congeratulations u have earned 10 points by killed a Yellow Alien")
}

else if(AlienColor3="Red"){
    console.log("Congeratulations u have earned 20 points by killed a Red Alien")
}

else(console.log("U have not killed any Alien, ja so ja tere bus ki baat hi nhi"))



/*  Question 28: Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.

• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

• If the person is age 65 or older, print a message that the person is an elder.
*/

let age= 63;

if (age < 2){
    console.log("The person is baby")
}
else if(age >=2 &&  age < 4  ){
    console.log("The person is a toddler.")
}

else if (age >= 4 && age <13){
    console.log("The person is kid")
}

else if(age >=13 && age < 20){
    console.log("The person is teenager")
}

else if(age>=20 && age < 65){
    console.log("the person is adult")
}

else if (age <= 65){
    console.log("The person is elder")
}
else(console.log("Ap k jane ka samay howa chhata hai sir"))

/*
29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits 
in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block
should print a statement, such as You really like bananas!
*/

let favFruits=["Apple", "Mango", "Peach"]

if (favFruits.includes("Apple")){
    console.log("I really like Apple")
}
else(console.log("I think we have missed the apple"));


if(favFruits.includes("Mango")){
    console.log("I really love mangoes")
}
else(console.log("We actually missed the mangoes"))

if(favFruits.includes("Peach")){
    console.log("I really like Peaches among the fruits")
}

else(console.log("U are not gonna get the Peach this time bro"))

if(favFruits.includes("Banana")){
    console.log(
        "U are Gymrat so lets consume more calcium dude"
    )
}

else(console.log("There is no banana in our stack "))

/* Question 30: Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting
to each user after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
*/

let AdminArray=["Admin", "Toussef" , "Naseem" ,"Adil", "Nazeer"]


for (let i=0; i=AdminArray.length; i++){
    if(AdminArray[i]="Admin"){
        console.log(` Hello ${AdminArray[i]}, would you like to see a status report?`)
    }

    else(console.log(`Hello ${AdminArray[i]}, thank you for logging in again.`))
}

/* Question 31: No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.
*/

for (let i=0; i<AdminArray.length ; i++ ){
    if(AdminArray[i]== "Admin"){
        console.log(`Hello ${AdminArray[i]}, Would you like to see a status report?`)
    }
    else{
        console.log(`Hello ${AdminArray[i]}, thank you for logging in again!`)
    }
 }

 /* Question32: Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need
to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/

let CurrentUsers=["Touseef", "Amir" , "Faisal", "Adil", "Nazeer"]
let NewUsers=["Touseef", "Amir", "Noor", "Yousuf", "Shahnawaz"]

let LowerCurrentUser= CurrentUsers.map(CurrentUsers=>CurrentUsers.toLowerCase());
NewUsers.forEach(CurrentUsers=>{
    if(LowerCurrentUser.includes(CurrentUsers.toLocaleLowerCase())){
        console.log(`Sorry, the username '${CurrentUsers}' is not available. Please enter a new username.`);
    }
    else {
        console.log(`The username '${CurrentUsers}' is available.`);
    }
})


/* Question33: Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and
3.
• Store the numbers 1 through 9 in a array.

• Loop through the array.

• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th
7th 8th 9th", and each result should be on a separate line.
*/

let OrdinalNumbers = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9];


for(let i=0; i< OrdinalNumbers.length; i++){
    if(OrdinalNumbers[i]==1){
        console.log("Congrats u have got the Ticket Number 1")
    }
    else if (OrdinalNumbers[i]==2){
        console.log("Congrats u have got the Ticket Number 2")
    }

    else if (OrdinalNumbers[i]==3){
        console.log("Congrats u have got the Ticket Number 3 ")
    }

    
    else if (OrdinalNumbers[i]==4){
        console.log("Congrats u have got the Ticket Number 4 ")
    }

    
    else if (OrdinalNumbers[i]==5){
        console.log("Congrats u have got the Ticket Number 5 ")
    }
    
    else if (OrdinalNumbers[i]==6){
        console.log("Congrats u have got the Ticket Number 6 ")
    }

    
    else if (OrdinalNumbers[i]==7){
        console.log("Congrats u have got the Ticket Number 7 ")
    }
    
    else if (OrdinalNumbers[i]==8){
        console.log("Congrats u have got the Ticket Number 8 ")
    }

    
    else if (OrdinalNumbers[i]==9){
        console.log("Congrats u have got the Ticket Number 9 ")
    }

    else(console.log("U have done with your all numbers"))
}

/* Question 34: Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the
name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you
should have one line of output containing a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or
more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
*/

let favPizza = [`Pepperoni Pizza` , `Fajita Pizza` , `Supreme Pizza`]

for(let i=0; i<favPizza.length; i++){
    console.log(favPizza[i])
}

for(let i=0; i<favPizza.length; i++){
    console.log(`I like ${favPizza[i]}`)
}

console.log(`My favorite food is pizza because it is delicious, has many different toppings to choose from, and you can get it anytime.
Pizza tastes good at any time of the day. We've been eating pizza every once a month for as long as I can remember. I really love Pizza!`);


/* Question 35: Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and 
then use a for loop to print out the name of each animal.
• Modify your program to print a statement about each animal, such as A dog would make a great pet.
• Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any
of these animals would make a great pet!
*/
 
let Animals=["Lion", "Tiger", "Cheetah"];

for(let i=0; i<Animals.length; i++){
    if(Animals[i]="Lion"){
        console.log("Cheetah is faster than the others two")
    }
    else if(Animals[i]="Tiger"){
        console.log("Tigers Mostly live in the Forests")
    }
    else if(Animals[i]="Lion"){
        console.log("lion is known as the King of all animals")
    }
    else(console.log("U doesnt any further more animals in your Array"))
}

/* Question 36: T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
*/

function CreateShirt(label, size){
    return `My shirt ${size} and the Label is ${label}`

}

let NewShirtCreate=CreateShirt("Babar Azam", 9)
console.log(NewShirtCreate)

/* Question 37; Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
*/
function NewShirt(size="large", label){
    return label+ size
}
let HaveNewShirt= NewShirt("I love Coing")
console.log(HaveNewShirt)


/* Question 38: Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence,
such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least
one of which is not in the default country.
*/

function CityName(City, Country="Pakistan"){
return`${City} is a city of ${Country}`
}

let city1= CityName('Islamabad')
let city2= CityName('Karachi')
let city3= CityName('Lahore')
let city4= CityName('Mumbai', 'India')
console.log(city1)
console.log(city2)
console.log(city3)
console.log(city4)


/* Question 39: City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string
formatted like this:
"Lahore, Pakistan"
Call your function with at least three city-country pairs, and print the value that’s returned.
*/

function CountryCity(City, Country){
    return `${City},${Country}`
}
let Code1=CountryCity("Islamabad", "Pakistan")
let Code2=CountryCity("Dehli", "India")
let Code3=CountryCity("Istanbul", "Turkey")

console.log(Code1)
console.log(Code2)
console.log(Code3)

/* Question 40: Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and
an album title, and it should return a Object containing these two pieces of information.
Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album
information correctly.
Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of
tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
*/
function make_album(ArtistName, AlbumTitle) {
    return { ArtistName: ArtistName, AlbumTitle: AlbumTitle };
}
let Album1 = make_album("Atif Aslam","Doorie");
let Album2 = make_album("Ali Zafar", "Chhannu");
let Album3 = make_album("Ibrar-ul-Haq", "Nach Punjaban");
console.log(Album1);
console.log(Album2);
console.log(Album3);
function make_album2(ArtistName, AlbumTitle, NumOfTracks) {
    return { ArtistName: ArtistName, AlbumTitle: AlbumTitle, NumOfTracks: NumOfTracks };
}
let Album4 = make_album2("Atif Aslam","Doorie", 35);
let Album5 = make_album2("Ali Zafar", "Chhannu", 34);
let Album6 = make_album2("Ibrar-ul-Haq", "Nach Punjaban", 41);
console.log(Album4);
console.log(Album5);
console.log(Album6);

/* Question 41:  Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in
the array.
*/

let magicians = [`Touseef` ,`Amir` , `Asim` , `Fahad` , `Adil`]

function show_magicians (){
    for(let Names of magicians){
        console.log(Names);
    } 
};

show_magicians() 

/* Question 42:  Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of
magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
*/

function GreetMegicians(greet){
for(let names of magicians){
    console.log(greet, names)
}
}
show_magicians("The great")
show_magicians("Hello How u are sir")

/* Question 43:  Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names.
Because the original array will be unchanged, return the new array and store it in a separate array.Call show_magicians() with each array to
show that you have one array of the original names and one array with the Great added to each magician’s name.
*/



let magiciancopy = [...magicians]
function show_magicians (greet){
    let withgreetings = ``
    for(let Names of magiciancopy){
        withgreetings+= `${greet} ${Names}\n`;
    } 
    return withgreetings;
};
let mygreetings = show_magicians(`Hello`);
let makeArray = mygreetings.split(`\n`);
console.log(makeArray);
//Original Array
console.log(magicians);