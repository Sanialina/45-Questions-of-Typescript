/* Q1: I have Installed Node.js, Typescript ans VS Code on my laptop
__________________________________________________________________________________________________________________________


/*---------------------------------------------Question No 2 ------------------------------------------------------------
Q2: Question 2:** Personal Message: Store a person’s name in a variable and print 
a message to them, like “Hello Asharib, would you like to learn some TypeScript today?”
 
  ---------------------------------------------Answer-------------------------------------------------------------------*/

 let message="Sania";
 console.log(`Hello ${message} would you like to learn some Typescript today?`);
 
 /*_________________________________________________________________________________________________________________________

 *----------------------------------------------Question No 3--------------------------------------------------------------:** 
 
 Name Cases: Store a person’s name in a variable, and then print that 
 person’s name in lowercase, uppercase, and titlecase.
 
 -----------------------------------------------Answer----------------------------------------------------------------------- */
 
 let MyName:string="Sania"
 console.log(MyName.toUpperCase());
 console.log(MyName.toLowerCase());
 console.log(MyName.charAt(0).toUpperCase() + MyName.slice(1).toLowerCase());
 
 /*_________________________________________________________________________________________________________________________
 
 *-------------------------------------------------------Question No 4:------------------------------------------------------** 
 
 Famous Quote: Find a quote from a famous person you admire. 
  * Print the quote and the name of its author. Your output should look something like the following, 
  * including the quotation marks:
 "Albert Einstein once said, “A person who never made a mistake never tried anything new.”"
 
 --------------------------------------------------------Answer-------------------------------------------------------------------- */
 
 console.log('Audrey Hepburn once said, "Nothing is Impossible itself says I"M Possible!"');
 
 /* ____________________________________________________________________________________________________________________________
 
----------------------------------------------------- Question No 5:-----------------------------------------------------------**

Famous Quote 2: Repeat Exercise 1, but this time store the famous person’s name 
 in a variable called famous_person. Then compose your message and store it in a new variable 
 called message. Print your message.
 ------------------------------------------------------Answer----------------------------------------------------------------------- */
 
 let famousPerson="Audrey Hepburn"
 console.log(`${famousPerson} once said, "Nothing is Impossible itself says I'M Possible!"`);
 
 /*_______________________________________________________________________________________________________________________________
 
 -----------------------------------------------------------Question 6------------------------------------------------------------
 
 ** Stripping Names: Store a person’s name, and include some whitespace characters
  at the beginning and end of the name. Use "\t" (tab) and "\n" (new line) at least once.
  Print the name once, so the whitespace around the name is displayed. Then print the name
   after stripping the white spaces.
   ------------------------------------------------------------Answer------------------------------------------------------------------ */
 
   let strippingName= "\t\n Sania \n\t"
   console.log(strippingName);
   console.log(strippingName.trim());
 
   /*____________________________________________________________________________________________________________________________________________*/

   /*---------------------------------------------------------------Question No Q7:-----------------------------------------------------------------
   
Number Eight: Write addition, subtraction, multiplication, and division 
operations that each result in the number 
8, Be sure to enclose your operations in print statements to see the results.
  Q8:
You should create four lines that look like this:

console.log(5 + 3)

Your output should simply be four lines with the number 8 appearing once on each line.
*/

//   ------------------------------------------------------------------Answer-----------------------------------------------------------------------

console.log(6+2);
console.log(12-4);
console.log(4*2);
console.log(16/2);
/*_______________________________________________________________________________________________________________________________________________________________

----------------------------------------------------------------Question No Q9---------------------------------------------------------------------------------

Favorite Number: Store your favorite number in a variable.
 Then, using that variable, create a message that reveals your favorite number.
  Print that message.*/

  //---------------------------------------------------------Answer-----------------------------------------------------------------------------------

  let favouriteNumber=7
  console.log(`My favourite number is ${favouriteNumber}`);

  /*______________________________________________________________________________________________________________________________________________________________________
  
  ----------------------------------------------------------Question No Q10:----------------------------------------------------------------------------------------------
    Adding Comments:
   Choose two of the programs you’ve written,and add at least one comment to each. 
    If you don’t have anything specific to write because your programs are too simple
     at this point, just add your name and the current date at the top of each program file. 
     Then write one sentence describing what the program does.*/

     //----------------------------------------------------------Answer----------------------------------------------------------------------------------------

// Comments in Typescript are annotations within the code used for documentation or
// to temporarily disable parts of it , and they are ignored by the compiler during code execution

// I took Q7 in this question we have to perform 4 operations and each should result 8

     console.log(6+2); //This will add numbers
     console.log(12-4); //This will subtract numbers
     console.log(4*2); // This will multiply numbers
     console.log(16/2); // This will divide numbers 
     // In result it will print 8 four times

     // Here i took another question in this question we have to store a person's name 
     // in a variable and print them a message

     let message1="Sania"; // it store person's name in variable
 console.log(`Hello ${message1} would you like to learn some Typescript today?`);
 // here we print a message to that person

 /*_________________________________________________________________________________________________________________________________________________________
 
 ---------------------------------------------------------Question No Q11-----------------------------------------------------------------------------------
 
 Names: Store the names of a few of your friends in a array called names.
  Print each person’s name by accessing each element in the list, one at a time.*/
 
 //-------------------------------------------------------------- Answer-----------------------------------------------------------------------------------

let names=["Sania", "Hamza", "Ameen", "Mariam"]
 console.log(names[0]);
 console.log(names[1]);
 console.log(names[2]);
 console.log(names[3]);
 
/*_______________________________________________________________________________________________________________________________________________________________________

-------------------------------------------------------------------Question No Q12-----------------------------------------------------------------------

Greetings: Start with the array you used in Exercise 11,
 but instead of just printing each person’s name, print a message to them. 
 The text of each message should be the same, but each message should be personalized with 
 the person’s name.*/

 //--------------------------------------------------------------Answer----------------------------------------------------------------------------------

 let PersonNames=["Sania", "Hamza", "Ameen", "Mariam"]
 console.log(`Hello ${PersonNames[0]}, How are you? I hope you are doing good`);
 console.log(`Hello ${PersonNames[1]}, How are you? I hope you are doing good`);
 console.log(`Hello ${PersonNames[2]}, How are you? I hope you are doing good`);
 console.log(`Hello ${PersonNames[3]}, How are you? I hope you are doing good`);

/*________________________________________________________________________________________________________________________________*/


/* --------------------------------------------------------Questionj No Q13------------------------------------------------------------------------------

Your Own Array: Think of your favorite mode of transportation, 
such as a motorcycle or a car, and make a list that stores several examples.
 Use your list to print a series of statements about these items,
 such as “I would like to own a Honda motorcycle.” 
   
 ----------------------------------------------------------------Answer-------------------------------------------------------------------------------------*/

let transportationMode = ["Toyota Corolla", "Land Cruiser Prado", "SUV"];
              transportationMode.forEach((Mode) =>
                console.log(`I would like to buy a ${Mode}`)
              );
              console.log(`But ${transportationMode[1]} is my Dream Car`);
            
/*___________________________________________________________________________________________________________________________________________________________________________

------------------------------------------------------------Question No Q14--------------------------------------------------------------------------------------------------
             
 Guest List: If you could invite anyone, living or deceased, to dinner,
 who would you invite? Make a list that includes at least three people you’d like to invite to dinner.
 Then use your list to print a message to each person, inviting them to dinner.
 ------------------------------------------------------------- Answer --------------------------------------------------------------------------------------------------------             */
              
               let GuestList = ["Zainab", "Sonia", "Shaista"];
              GuestList.forEach((invitation) =>
                console.log(`"Hey ${invitation}, I'd love to catch up over dinner!
                  How about joining me for a delicious meal this "Saturday" at "8 PM" at "Kababist". Let me know if you're free!`)
              );
              
              /*_________________________________________________________________________________________________________________________________________________________________________________
              
              -----------------------------------------------------------Question No Q15---------------------------------------------------------------------------------------------------------
              
              Changing Guest List: You just heard that one of your guests can’t make the dinner, 
              so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
              • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
              
              • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
              
              • Print a second set of invitation messages, one for each person who is still in your list.
              
              -------------------------------------------------------------------Answer-------------------------------------------------------------------------------------------------*/
              
               let newGuestList = ["Zainab", "Sonia", "Shaista"];
              
              console.log(`${newGuestList[1]} is not coming`)
              
              newGuestList.splice(1,1,"Anusha")
              
              newGuestList.forEach((newinvitation) =>
                console.log(`"Hey ${newinvitation}, I'd love to catch up over dinner!
                  How about joining me for a delicious meal this "Saturday" at "8 PM" at "Kababist". Let me know if you're free!`)
              );
              
              /* ___________________________________________________________________________________________________________________________________________
                          
              -------------------------------------------------Question NO Q16------------------------------------------------------------------------------
              
              More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
              • Start with your program from Exercise 15. Add a print statement to the end of your program informing people
               that you found a bigger dinner table.
              
              • Add one new guest to the beginning of your array.
              
              • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
               • Print a new set of invitation messages, one for each person in your list.
                -------------------------------------------------------- Answer ---------------------------------------------------------------------    */
              
                let moreGuestList = ["Zainab", "Sonia", "Shaista"];
              
              console.log(`${moreGuestList[1]} is not coming`)
              
              moreGuestList.splice(1,1,"Anusha")
              
              console.log(`Hey everone! We found a bigger dinner table. lets call some more guests`);
              moreGuestList.unshift("Sunita")
              
              moreGuestList.push("Amna")
              
              let middleGuest: number=Math.floor(moreGuestList.length/2);
              moreGuestList.splice(middleGuest,0,"Mariam");
              
              moreGuestList.forEach((moreinvitation) =>
                console.log(`Hey ${moreinvitation}, I'd love to catch up over dinner!
                  How about joining me for a delicious meal this "Saturday" at "8 PM" at "Kababist". Let me know if you're free!`)
              );
              
              /*______________________________________________________________________________________________________________________________________________________________________________________    
              
              --------------------------------------------------------------Question No Q17--------------------------------------------------------------------------------------------------------------------
              
              Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
              and you have space for only two guests.
              • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite
               only two people for dinner.
              
              • Remove guests from your list one at a time until only two names remain in your list.
              Each time you pop a name from your list, print a message to that 
              person letting them know you’re sorry you can’t invite them to dinner.
              
              • Print a message to each of the two people still on your list, letting them know they’re still invited.
              
              • Remove the last two names from your list, so you have an empty list. Print your list to make sure 
              you actually have an empty list at the end of your program.
          
          ---------------------------------------------------Answer -------------------------------------------------------------------------------------------------------*/
              
                let shrinkGuestList = ["Zainab", "Sonia", "Shaista"];
              
              console.log(`${shrinkGuestList[1]} is not coming`)
              
              shrinkGuestList.splice(1,1,"Anusha")
              
              console.log(`Hey everone! We found a bigger dinner table. lets call some more guests`);
              shrinkGuestList.unshift("Sunita")
              shrinkGuestList.push("Amna")
              
              let middGuest: number=Math.floor(shrinkGuestList.length/2);
              shrinkGuestList.splice(middGuest,0,"Mariam");
              
              shrinkGuestList.forEach((shrinkinvitation) =>
                console.log(`Hey ${shrinkinvitation}, I'd love to catch up over dinner!
                  How about joining me for a delicious meal this "Saturday" at "8 PM" at "Kababist". Let me know if you're free!`)
              );
              console.log("Unfortunely, new dinner table wont arrive in time for the dinner, so I have space for only 2 guests for dinner");
              while(shrinkGuestList.length > 2){
                let removeGuest=shrinkGuestList.pop();
                console.log(`Sorry, ${removeGuest} I cant invite you to dinner`)
              }
              console.log("invitation to the last 2 guests");
              shrinkGuestList.forEach(guestinvitation => console.log(`Hey ${guestinvitation} you are still invited for dinner`))
              
              shrinkGuestList.pop();
              shrinkGuestList.pop();
              
              
              
              console.log(shrinkGuestList,"Empty List"); 

              /*____________________________________________________________________________________________________________________________________


              ------------------------------------------------------- Question 18----------------------------------------------------------------------------

18: Seeing the World: Think of at least five places in the world you’d like to visit.
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

   ************************************************************* Answer ***********************************************************************/

let favouritePlaces=["Switzerland", "Maldives", "Norway","Phuket","Bali" ]
console.log("Orignal Order", favouritePlaces)

console.log("Alphabetical Order", [...favouritePlaces].sort())

console.log("Still in Orignal Order", favouritePlaces)

console.log("reverse Order", [...favouritePlaces].reverse())

console.log("still in its orginal order", favouritePlaces)

console.log(" Orignal Array reverse order", favouritePlaces.reverse())

console.log("back to orignal order", favouritePlaces.reverse())

console.log("sorted in alphabetical order", favouritePlaces.sort())

console.log("orginal array in reversed order", favouritePlaces.reverse())

/*_____________________________________________________________________________________________________________________

***************************************************Question No  19 ********************************************************************************

Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
print a message indicating the number of people you are inviting to dinner.

**************************** Answer **********************************/

let GuestList1 = ["Zainab", "Sonia", "Shaista"];
let lengthofList = GuestList1.length
console.log(`I am  inviting ${lengthofList} guests to dinner`)



/*______________________________________________________________________________________________________________

************************************************* Question No 20 *************************************************************************

Think of something you could store in a array. For example, you could make a list of mountains, 
rivers, countries, cities, languages, or anything else you’d like.
 Write a program that creates a list containing these items.

 ************************************************************ Answer ********************************************************************************/

 let listofRivers=["Indus", "Jhelum", "Chenab","Sutlej", "Ravi"]
 console.log("List of Rivers")
 listofRivers.forEach(rivers => console.log(rivers))

/*___________________________________________________________________________________________________________________________________*/


/****************************************************************** Question No 21 *****************************************************************************************
 
 They think of something you could store in a TypeScript Object.
 Write a program that creates Objects containing these items.
 
 *************************************************************************** Answer *********************************************************************/

 type person = {
    name:  string;
    age:   number;
    gender:string;
} 
let person = {
name: "Amna",
age : 20,
gender: "female"
}
console.log(person)

/* ------------------------------------------------------------------------------------------------------------------------------------------

****************************************************************** Question No 22 **********************************************************

Intentional Error: If you haven’t received an array index error in one of your programs yet, 
try to make one happen. Change an index in one of your programs to produce an index error.
Make sure you correct the error before closing the program.

************************************************************************* Answer ****************************************************************/

let fruits =["Strawberry", "Grapes", "Cherry", "Kiwi", "Pineapple"]

// index error
console.log(fruits[6])

// error removed
console.log(fruits[4])

/* ------------------------------------------------------------------------------------------------------------------------------------------------------

********************************************************************* Question No 23 ****************************************************************

Conditional Tests: Write a series of conditional tests. 
Print a statement describing each test and your prediction for the results of each test.
Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

*********************************************************************** Answer ****************************************************************************/


let season = "summer"
// test no 1:

//    true statement
console.log( 'Is season = summer ?  I predict "true" ')
console.log( season == "summer")

//    false statement

console.log( 'Is season = winter ?  I predict "false" ')
console.log( season == "winter")

// test no 2:

//     true statement

console.log( 'Is summer = season ?  I predict "true" ')
console.log( "summer" == season)

//       false statement
console.log( 'Is Summer = season ?  I predict "false" ')
console.log( "Summer" == season)

// test no 3:

//        true statement

let seven = 7

console.log ('Is seven = 7 ? I predict "true" ')
console.log(seven == 7) 

//       false statement

console.log ('Is seven = 7 ? I predict "false" ')
console.log(seven == 6) 

// test no 4:

//             true statement

console.log ('Is 7 = seven ? I predict "true" ')
console.log( 7 == seven ) 

//           false statement
console.log ('Is seven > 7 ? I predict "false" ')
console.log(seven > 7) 

// test no 5: 

//          true statement

console.log ('Is seven <= 7 ? I predict "true" ')
console.log(seven <= 7) 

//          false statement

console.log ('Is seven != 7 ? I predict "false" ')
console.log(seven != 7) 




/*__________________________________________________________________________________________________________

------------------------------ Question No 24 -------------------------------------------------

More Conditional Tests: You don’t have to limit the number of tests you create to 10.
If you want to try more comparisons, write more tests. 
Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, 
greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array 

-------------------------------------- Answer ----------------------------------------- */

//                   Test No 1 

// Tests for equality and inequality with strings

let car = "parado"
console.log( car == "parado" ) // true

console.log( car != "parado")     // false

//  Tests using the lower case function

console.log( car.toLowerCase()== "parado") // true
console.log( car.toLowerCase()== "Parado") // false

// Numerical tests involving equality and inequality,
let num1 = 7
let num2 = 4
console.log( num1 != num2)  // true
console.log( num1 == num2)  //  false)

//  greater than and less than
console.log( num1 > num2)  // true
console.log( num1 < num2)   // false

// greater than or equal to, and less than or equal to

console.log( num1 >= num2)  // true
console.log( num1 <= num2)  // false 

// Tests using "and" and "or" operators

console.log( num1 > num2 && num1 != num2 ) // true

console.log( num1 < num2 || num1 == num2 )  // false

// Test whether an item is in a array

let vegetables = ["Carrot", "Chilli", "Capsicum", "Cucumber"]
console.log('Is "Cucumber" in vegetables?')

console.log(vegetables.includes("Cucumber"))

// Test whether an item is not in a array 
console.log('Is "Cucumber" not in vegetables?')

console.log(!vegetables.includes("Cucumber"))

/*_____________________________________________________________________________________
---------------------------Question No : 25--------------------------------------------

Q25: Alien Colors #1: Imagine an alien was just shot down in a game.
Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, 
print a message that the player just earned 5 points.

• Write one version of this program that passes the if test and another that fails.
(The version that fails will have no output.)


-------------------------------- Answer ----------------------------------------------*/

let alienColor = "green"
if(alienColor === "green"){
console.log("Congratulations! You earn 5 points")
}


if(alienColor === "red"){
console.log("You are fail")
}

/*_______________________________________________________________________________________________
----------------------------------- Question No 26 ----------------------------------------

Q26 : Alien Colors #2: Choose a color for an alien as you did in Exercise 25, 
and write an if-else chain.
• If the alien’s color is green, print a statement that 
the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.

------------------------------Answer--------------------------------------------------------*/

let alien = "green"
if(alien==="green"){
console.log("Congratulations!, You just earned 5 points from if statement")
}
else{
console.log("Congratulations!, You just earned 10 points")
}

if(alien==="red"){
console.log("Congratulations!, You just earned 5 points")
}
else{
console.log("Congratulations!, You just earned 10 points from else statement")
}

/*_______________________________________________________________________________________________________________________
---------------------------------------Question No 27 --------------------------------------------------

Q 27: Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.

------------------------------------------Answer--------------------------------------------------------*/
//      version 1
let AlienColor = "yellow"
if(AlienColor==="yellow"){
console.log("(version 1) Alien is yellow , You earned 5 points")
}
else if(AlienColor==="red"){
console.log("Alien is red, You earned 10 points")
}
else{
console.log("Alien is green, You earned 15 points")
}

//  version 2 

let AlienColor2 = "red"
if(AlienColor2==="yellow"){
console.log("Alien is yellow , You earned 5 points")
}
else if(AlienColor2==="red"){
console.log("(version 2) Alien is red, You earned 10 points")
}
else{
console.log("Alien is green, You earned 15 points")
}

//  version 3
let AlienColor3 = "green"
if(AlienColor3==="yellow"){
console.log("Alien is yellow , You earned 5 points")
}
else if(AlienColor3==="red"){
console.log("Alien is red, You earned 10 points")
}
else{
console.log("(version 3) Alien is green, You earned 15 points")
}

/*___________________________________________________________________________________________________________
---------------------------------------Question No 28-------------------------------------------------------

Stages of Life: Write an if-else chain that determines a person’s stage of life.
Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.

• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

• If the person is age 65 or older, print a message that the person is an elder.

--------------------------------------Answer---------------------------------------------------------------------*/

let personStage = 100
if(personStage < 2){
console.log("You are a baby")
}
else if (personStage >=2 && personStage < 4){
console.log("You are a toddler")
}
else if(personStage >=4 && personStage < 13){
console.log("You are a kid")
}
else if(personStage >=13 && personStage < 20){
console.log("You are a teenager")
}
else if(personStage >=20 && personStage < 65){
console.log("You are an adult")
}
else {
console.log("You are an elder")
}

/*______________________________________________________________________________________________________
--------------------------------------Question No 29 ---------------------------------------------------

Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements 
that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. 
If the fruit is in your array, the if block should print a statement, such as You really like bananas!

-------------------------------- Answer---------------------------------------------------------------*/

let favoriteFruit = ["Strawberry","Cheery","Kiwi"]

if(favoriteFruit.includes("Strawberry")){
console.log("Strawberry is my favorite fruit")
}
if(favoriteFruit.includes("Cheery")){
console.log("Cherry is my favorite fruit")
}
if(favoriteFruit.includes("Mango")){
console.log("i like Mango")
}
if(favoriteFruit.includes("Kiwi")){
console.log("Kiwi is my favorite fruit")
}
if(favoriteFruit.includes("Banana")){
console.log("I like Banana")
}

/*__________________________________________________________________________________________________________________
----------------------------------------Question No 30--------------------------------------------------------------

Q 30: Hello Admin: Make a array of five or more usernames, including the name 'admin'. 
Imagine you are writing code that will print a greeting to each user after they log in to a website.
Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

------------------------------------Answer----------------------------------------------------------------------------*/

let userNames1 = ["Admin","Sania","Eisha","Amna","Mariam"]
userNames1.forEach(login => {
if(login ==="Admin"){
console.log(`Hello ${login} , Would you like to see a status report`)
}
else{
console.log(`Hello ${login}, thankyou for logging in again!`)
}
})

/*______________________________________________________________________________________________________________________________________________*/


/*---------------------------Question NO:31----------------------------------------------------
Q 31: No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.

-------------------------------------Answer------------------------------------------------*/

let userNames = ["Admin","Sania","Eisha","Amna","Mariam"]
userNames=[]

if(userNames.length === 0){
console.log("we need to find some users")
}else{


userNames.forEach(login => {
if(login ==="Admin"){
  console.log(`Hello ${login} , Would you like to see a status report`)
}
else{
  console.log(`Hello ${login}, thankyou for logging in again!`)
}
})}

/*______________________________________________________________________________________________________________________

---------------------------------------------Question No 32 -----------------------------------------------------------

Checking Usernames: Do the following to create a program that simulates how websites ensure that 
everyone has a unique username.

• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames 
are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has,
 print a message that the person will need to enter a new username.
  If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

----------------------------------------Answer -----------------------------------------------------*/

let current_Users = ["Sania","Eisha","Amna","Mariam","Minahil"]
let new_Users = ["Misha","Urwa","Sania","Hurain","Eisha"]

new_Users.forEach(user => {
  let condition1 = current_Users.some(current_user1=> current_user1.toLowerCase()===user.toLowerCase())
  if(condition1){
console.log(`Sorry ${user} username is not available`)
  }
  else{
    console.log(`This username ${user} is available`)
  }
})

/*_____________________________________________________________________________________________________________________
-------------------------------------Question No 33 ----------------------------------------------------------------

Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th,
 except 1, 2, and 3.

 • Store the numbers 1 through 9 in a array.

• Loop through the array.

• Use an if-else chain inside the loop to print the proper ordinal ending for each number.
 Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

 ---------------------------------Answer------------------------------------------------------------------------------*/

 let ordinalNumbers = [1,2,3,4,5,6,7,8,9]
 
// Step 2: Loop through the array.
ordinalNumbers.forEach(number => {
    // Step 3: Use an if-else chain to determine the proper ordinal ending.
    if (number === 1) {
        console.log(`${number}st`);
    } else if (number === 2) {
        console.log(`${number}nd`);
    } else if (number === 3) {
        console.log(`${number}rd`);
    } else {
        console.log(`${number}th`);
    }
});

/*_______________________________________________________________________________________________________________________

----------------------------------------Question No 34 -----------------------------------------------------------------
Q 34: Pizzas: Think of at least three kinds of your favorite pizza.
 Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing
 just the name of the pizza. For each pizza you should have one line of output containing 
 a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states 
how much you like pizza. The output should consist of three or more lines about 
the kinds of pizza you like and then an additional sentence, such as I really love pizza!

----------------------------------Answer ------------------------------------------------------------------------------*/

let favoritePizza = ["BBQ Pizza","Chicken Tikka Pizza","Double Cheeze Margherita Pizza"]

for(let i=0; i < favoritePizza.length; i++ ){
console.log(favoritePizza[i])
}

for(let i=0; i < favoritePizza.length; i++ ){
  console.log(`I like ${favoritePizza[i]}`)
  }
console.log("Margherita is classic and delicious.");
console.log("Chicken Tikka is my go-to choice.");
console.log("BBQ Chicken has an amazing flavor.");
console.log("I really love pizza!");

/*_______________________________________________________________________________________________________________________

----------------------------------------- Question No 35 ----------------------------------------------------------------

Animals: Think of at least three different animals that have a common characteristic. 
Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
 • Modify your program to print a statement about each animal, such as A dog would make a great pet.
  • Add a line at the end of your program stating what these animals have in common. 
  You could print a sentence such as Any of these animals would make a great pet!
  
  ---------------------------------- Answer -------------------------------------------------------------------------------*/

  let animals =["Lion","Tiger","Wolf"]

for (let i = 0; i < animals.length; i++) {
    console.log(`A ${animals[i]} is a powerful predator.`);
}

console.log("These animals are apex predators in their respective habitats.");


/*________________________________________________________________________________________________________________________

------------------------------------ Question No 36----------------------------------------------------------------------------

T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed 
on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it.
 Call the function.

 ------------------------------------------- Answer ----------------------------------------------------------------------*/

 function make_shirt(size: string, printmassage: string){
console.log(`You selected ${size} size shirt with ${printmassage} prints on it`)
 }

 make_shirt("Medium","AI Planet")


 /*______________________________________________________________________________________________________________________

 -----------------------------------------Question No 37 ------------------------------------------------------------------
 Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that 
 reads I love TypeScript.
  Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

  ---------------------------------------------Answer ---------------------------------------------------------------*/

  function make_Shirt(size1: string="large", printmassage1: string="I love TypeScript"){
    console.log(`Creating a  ${size1} shirt with ${printmassage1} prints on it`)
     }
     make_Shirt();
     make_Shirt("medium");
     make_Shirt("small","I am a Programmer");
  

     /*_________________________________________________________________________________________________________________

     -----------------------------------------Question No 38--------------------------------------------------------------

    Q38: Cities: Write a function called describe_city() that accepts the name of a city and its country.
     The function should print a simple sentence, such as Karachi is in Pakistan. 
     Give the parameter for the country a default value.
     Call your function for three different cities, at least one of which is not in the default country.

     --------------------------------------Answer---------------------------------------------------------------------*/

     function describe_city(city: string, country:string="Pakistan"){
      console.log(`${city} is in ${country}`)
     }
     describe_city("Karachi");
     describe_city("Islamabad");
     describe_city("Skardu");
     describe_city("Makkah"," Saudi Arabia")

     /*____________________________________________________________________________________________________________________

     ----------------------------------------Question No 39----------------------------------------------------------------

     Q39: City Names: Write a function called city_country() that takes in the name of a city and its country.
      The function should return a string formatted like this:

    "Lahore, Pakistan"

    Call your function with at least three city-country pairs, and print the value that’s returned.

    -------------------------------------------------Answer-----------------------------------------------------------*/

    function city_country(city : string, country: string): string{
      return`${city}, ${country}`;
    }
city_country("Karachi", "Pakistan")

city_country("Paris", "France")

city_country("Tokyo", "Japan")

console.log(city_country("Karachi", "Pakistan"))

console.log(city_country("Paris", "France"))

console.log(city_country("Tokyo", "Japan"))

/*_____________________________________________________________________________________________________________

---------------------------------------------Question No 40 ---------------------------------------------------

Q 40: Album: Write a function called make_album() that builds a Object describing a music album. 
The function should take in an artist name and an album title, and it should return a Object containing these
 two pieces of information. Use the function to make three dictionaries representing different albums.
  Print each return value to show that Objects are storing the album information correctly. 
  Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
  If the calling line includes a value for the number of tracks, add that value to the album’s Object.
 Make at least one new function call that includes the number of tracks on an album.

 ----------------------------------Answer -------------------------------------------------------------------------*/

 function make_album (artist_name: string, album_title: string, tracks?: number){
let album : { artist : string,title : string, tracks? : number} ={
           artist: artist_name,
           title: album_title,
}
   if (tracks !== undefined){
    album.tracks = tracks;
   }

   return album;
 }

let album1= make_album("Sania", "Album 1");
let album2 = make_album("Eisha", "Album 2");
let album3 = make_album("Amna","Album 3", 7);

 console.log(album1)
 console.log(album2)
 console.log(album3)

 /*___________________________________________________________________________________________________________________________________________*/

 /*----------------------------------------Question No 41 ------------------------------------------------------------------------

Q 41: Magicians: Make a array of magician’s names. 
Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

-----------------------------------------Answer------------------------------------------------------------------------*/

let Magicians_Name = ["Ammar Baig", "Ahmed Ali", "Ali Mossa", "Zaheer Malik"]

function show_magicians (Magicians_Name: string[]){
Magicians_Name.forEach(Magicians => {
        console.log(Magicians)
    });
}

show_magicians(Magicians_Name)

/*________________________________________________________________________________________________________________________________

-------------------------------------Question No 42 -----------------------------------------------------------------------

Q 42: Great Magicians: Start with a copy of your program from Exercise 39.
 Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
Call show_magicians() to see that the list has actually been modified.

-----------------------------------------Answer-----------------------------------------------------------------------------*/
let Magicians_Name1 = ["Ammar Baig", "Ahmed Ali", "Ali Mossa", "Zaheer Malik"]

function show_magicians1 (Magicians_Name1: string[]){
Magicians_Name1.forEach(Magicians => {
        console.log(Magicians)
    });
}

function make_great (Magicians_Name1 : string[]){
    return Magicians_Name1.map(Magicians => `The Great ${Magicians}`)
    }

let great_magicians= make_great(Magicians_Name1)
show_magicians1(great_magicians)

/*_________________________________________________________________________________________________________________________________

---------------------------------------Question No 43 -------------------------------------------------------------------------

Q 43: Unchanged Magicians: Start with your work from Exercise 40.
 Call the function make_great() with a copy of the array of magicians’ names.
  Because the original array will be unchanged, return the new array and store it in a separate array. 
Call show_magicians() with each array to show that you have one array of the original names and one array with
 the Great added to each magician’s name.

 -----------------------------------Answer------------------------------------------------------------------------------------*/

 let Magicians_Name2 = ["Ammar Baig", "Ahmed Ali", "Ali Mossa", "Zaheer Malik"]

function show_magicians2 (Magicians_Name2: string[]){
Magicians_Name2.forEach(Magicians => {
        console.log(Magicians)
    });
}

function make_great1 (Magicians_Name2 : string[]){
    return Magicians_Name2.map(Magicians => `The Great ${Magicians}`)
    }

    let copy_magicians_name = Magicians_Name2.slice()

    let copy_great_name = make_great1(copy_magicians_name)

    console.log("Orginal array\n")
    show_magicians2(Magicians_Name2) 

    console.log("copy array\n")
    show_magicians2(copy_great_name)

    /*__________________________________________________________________________________________________________________

    -----------------------------------------Question No 44 -----------------------------------------------------------

    Q44: Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
    The function should have one parameter that collects as many items as the function call provides,
     and it should print a summary of the sandwich that is being ordered.
     Call the function three times, using a different number of arguments each time.

     --------------------------------------------Answer----------------------------------------------------------------*/

     function Sandwitch (...SandwitchItems: string[]){

        console.log("\n Making sandwitch with following items🥪 \n")

        SandwitchItems.forEach(items => console.log("." + items))

            console.log("\nEnjoy your Sandwitch 😋\n")
        
     }
     Sandwitch("vegetable","coleslaw","Mayo","corn","ketchup")

     Sandwitch("chicken","coleslaw","cheese")

     Sandwitch("egg","coleslaw")

     /*__________________________________________________________________________________________________________________

     --------------------------------------Question No 45 ---------------------------------------------------------------
          
    Q 45: Cars: Write a function that stores information about a car in a Object. 
    The function should always receive a manufacturer and a model name.
     It should then accept an arbitrary number of keyword arguments. 
     Call the function with the required information and two other name-value pairs, 
     such as a color or an optional feature.
     Print the Object that’s returned to make sure all the information was stored correctly.

     ------------------------------------Answer---------------------------------------------------------------------------*/

     function Car (manufacturer : string, model : string , ... options){
            
        let Cars = {
            manufacturer: manufacturer,
            model : model
        }

        options.forEach(option => {
            let [key, value] = option.split(":")      
        Cars[key.trim()]= value.trim()
        })
        return Cars

     }
let my_car = Car("Toyota","Land Cruiser Prado", "color:black", "auto_dimming_mirror : true" )

console.log(my_car)


/*--------------------------------- The End ------------------------------------------------------------------------------------*/
