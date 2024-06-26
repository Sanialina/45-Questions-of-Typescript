/* Q1: I have Installed Node.js, Typescript ans VS Code on my laptop
__________________________________________________________________________________________________________________________


/*Q2: Question 2:** Personal Message: Store a person’s name in a variable and print
a message to them, like “Hello Asharib, would you like to learn some TypeScript today?”
 Q2 */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var message = "Sania";
console.log("Hello ".concat(message, " would you like to learn some Typescript today?"));
/*_________________________________________________________________________________________________________________________

*Question 3:** Name Cases: Store a person’s name in a variable, and then print that
person’s name in lowercase, uppercase, and titlecase.
Q3: */
var MyName = "Sania";
console.log(MyName.toUpperCase());
console.log(MyName.toLowerCase());
console.log(MyName.charAt(0).toUpperCase() + MyName.slice(1).toLowerCase());
/*_________________________________________________________________________________________________________________________

*Question 4:** Famous Quote: Find a quote from a famous person you admire.
 * Print the quote and the name of its author. Your output should look something like the following,
 * including the quotation marks:
"Albert Einstein once said, “A person who never made a mistake never tried anything new.”"
Q4: */
console.log('Audrey Hepburn once said, "Nothing is Impossible itself says I"M Possible!"');
/* ____________________________________________________________________________________________________________________________

Question 5:** Famous Quote 2: Repeat Exercise 1, but this time store the famous person’s name
in a variable called famous_person. Then compose your message and store it in a new variable
called message. Print your message.
Q5: */
var famousPerson = "Audrey Hepburn";
console.log("".concat(famousPerson, " once said, \"Nothing is Impossible itself says I'M Possible!\""));
/*_______________________________________________________________________________________________________________________________6

Question 6:** Stripping Names: Store a person’s name, and include some whitespace characters
 at the beginning and end of the name. Use "\t" (tab) and "\n" (new line) at least once.
 Print the name once, so the whitespace around the name is displayed. Then print the name
  after stripping the white spaces.
  Q6: */
var strippingName = "\t\n Sania \n\t";
console.log(strippingName);
console.log(strippingName.trim());
/*____________________________________________________________________________________________________________________________________________*/
/* Q7:
Number Eight: Write addition, subtraction, multiplication, and division
operations that each result in the number
8, Be sure to enclose your operations in print statements to see the results.
Q8:
You should create four lines that look like this:

console.log(5 + 3)

Your output should simply be four lines with the number 8 appearing once on each line.
*/
//                                   Answer
console.log(6 + 2);
console.log(12 - 4);
console.log(4 * 2);
console.log(16 / 2);
/* Q9:
Favorite Number: Store your favorite number in a variable.
 Then, using that variable, create a message that reveals your favorite number.
  Print that message.*/
//                         Answer
var favouriteNumber = 7;
console.log("My favourite number is ".concat(favouriteNumber));
/* Q10:
  Adding Comments:
 Choose two of the programs you’ve written,and add at least one comment to each.
  If you don’t have anything specific to write because your programs are too simple
   at this point, just add your name and the current date at the top of each program file.
   Then write one sentence describing what the program does.*/
//                    Answer
// Comments in Typescript are annotations within the code used for documentation or
// to temporarily disable parts of it , and they are ignored by the compiler during code execution
// I took Q7 in this question we have to perform 4 operations and each should result 8
console.log(6 + 2); //This will add numbers
console.log(12 - 4); //This will subtract numbers
console.log(4 * 2); // This will multiply numbers
console.log(16 / 2); // This will divide numbers 
// In result it will print 8 four times
// Here i took another question in this question we have to store a person's name 
// in a variable and print them a message
var message1 = "Sania"; // it store person's name in variable
console.log("Hello ".concat(message1, " would you like to learn some Typescript today?"));
// here we print a message to that person
/* Q11
Names: Store the names of a few of your friends in a array called names.
 Print each person’s name by accessing each element in the list, one at a time.*/
//                      Answer
var names = ["Sania", "Hamza", "Ameen", "Mariam"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
/* Q12
Greetings: Start with the array you used in Exercise 11,
 but instead of just printing each person’s name, print a message to them.
 The text of each message should be the same, but each message should be personalized with
 the person’s name.*/
//            Answer
var PersonNames = ["Sania", "Hamza", "Ameen", "Mariam"];
console.log("Hello ".concat(PersonNames[0], ", How are you? I hope you are doing good"));
console.log("Hello ".concat(PersonNames[1], ", How are you? I hope you are doing good"));
console.log("Hello ".concat(PersonNames[2], ", How are you? I hope you are doing good"));
console.log("Hello ".concat(PersonNames[3], ", How are you? I hope you are doing good"));
/*________________________________________________________________________________________________________________________________*/
/*  Q13
Your Own Array: Think of your favorite mode of transportation,
such as a motorcycle or a car, and make a list that stores several examples.
 Use your list to print a series of statements about these items,
 such as “I would like to own a Honda motorcycle.”
              Answer             */
var transportationMode = ["Toyota Corolla", "Land Cruiser Prado", "SUV"];
transportationMode.forEach(function (Mode) {
    return console.log("I would like to buy a ".concat(Mode));
});
console.log("But ".concat(transportationMode[1], " is my Dream Car"));
/* Q14
Guest List: If you could invite anyone, living or deceased, to dinner,
 who would you invite? Make a list that includes at least three people you’d like to invite to dinner.
  Then use your list to print a message to each person, inviting them to dinner.
                                  Answer              */
var GuestList = ["Zainab", "Sonia", "Shaista"];
GuestList.forEach(function (invitation) {
    return console.log("\"Hey ".concat(invitation, ", I'd love to catch up over dinner!\n                  How about joining me for a delicious meal this \"Saturday\" at \"8 PM\" at \"Kababist\". Let me know if you're free!"));
});
/*           Q15
Changing Guest List: You just heard that one of your guests can’t make the dinner,
so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.

                    Answer                                     */
var newGuestList = ["Zainab", "Sonia", "Shaista"];
console.log("".concat(newGuestList[1], " is not coming"));
newGuestList.splice(1, 1, "Anusha");
newGuestList.forEach(function (newinvitation) {
    return console.log("\"Hey ".concat(newinvitation, ", I'd love to catch up over dinner!\n                  How about joining me for a delicious meal this \"Saturday\" at \"8 PM\" at \"Kababist\". Let me know if you're free!"));
});
/* ___________________________________________________________________________________________________________________________________________
            
-------------------------------------------------Question NO Q16------------------------------------------------------------------------------

More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people
 that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
 • Print a new set of invitation messages, one for each person in your list.
  -------------------------------------------------------- Answer ---------------------------------------------------------------------    */
var moreGuestList = ["Zainab", "Sonia", "Shaista"];
console.log("".concat(moreGuestList[1], " is not coming"));
moreGuestList.splice(1, 1, "Anusha");
console.log("Hey everone! We found a bigger dinner table. lets call some more guests");
moreGuestList.unshift("Sunita");
moreGuestList.push("Amna");
var middleGuest = Math.floor(moreGuestList.length / 2);
moreGuestList.splice(middleGuest, 0, "Mariam");
moreGuestList.forEach(function (moreinvitation) {
    return console.log("Hey ".concat(moreinvitation, ", I'd love to catch up over dinner!\n                  How about joining me for a delicious meal this \"Saturday\" at \"8 PM\" at \"Kababist\". Let me know if you're free!"));
});
/*           Q17

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
 
                                         Answer                        */
var shrinkGuestList = ["Zainab", "Sonia", "Shaista"];
console.log("".concat(shrinkGuestList[1], " is not coming"));
shrinkGuestList.splice(1, 1, "Anusha");
console.log("Hey everone! We found a bigger dinner table. lets call some more guests");
shrinkGuestList.unshift("Sunita");
shrinkGuestList.push("Amna");
var middGuest = Math.floor(shrinkGuestList.length / 2);
shrinkGuestList.splice(middGuest, 0, "Mariam");
shrinkGuestList.forEach(function (shrinkinvitation) {
    return console.log("Hey ".concat(shrinkinvitation, ", I'd love to catch up over dinner!\n                  How about joining me for a delicious meal this \"Saturday\" at \"8 PM\" at \"Kababist\". Let me know if you're free!"));
});
console.log("Unfortunely, new dinner table wont arrive in time for the dinner, so I have space for only 2 guests for dinner");
while (shrinkGuestList.length > 2) {
    var removeGuest = shrinkGuestList.pop();
    console.log("Sorry, ".concat(removeGuest, " I cant invite you to dinner"));
}
console.log("invitation to the last 2 guests");
shrinkGuestList.forEach(function (guestinvitation) { return console.log("Hey ".concat(guestinvitation, " you are still invited for dinner")); });
shrinkGuestList.pop();
shrinkGuestList.pop();
console.log(shrinkGuestList, "Empty List");
/*____________________________________________________________________________________________________________________________________*/
/*               Question 18

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

*************************** Answer ******************************/
var favouritePlaces = ["Switzerland", "Maldives", "Norway", "Phuket", "Bali"];
console.log("Orignal Order", favouritePlaces);
console.log("Alphabetical Order", __spreadArray([], favouritePlaces, true).sort());
console.log("Still in Orignal Order", favouritePlaces);
console.log("reverse Order", __spreadArray([], favouritePlaces, true).reverse());
console.log("still in its orginal order", favouritePlaces);
console.log(" Orignal Array reverse order", favouritePlaces.reverse());
console.log("back to orignal order", favouritePlaces.reverse());
console.log("sorted in alphabetical order", favouritePlaces.sort());
console.log("orginal array in reversed order", favouritePlaces.reverse());
/*_____________________________________________________________________________________________________________________

************************************* Q19 *************************************

Dinner Guests: Working with one of the programs from Exercises 14 through 18,
print a message indicating the number of people you are inviting to dinner.

**************************** Answer **********************************/
var GuestList1 = ["Zainab", "Sonia", "Shaista"];
var lengthofList = GuestList1.length;
console.log("I am  inviting ".concat(lengthofList, " guests to dinner"));
/*______________________________________________________________________________________________________________

*************************** Q20 *******************************

Think of something you could store in a array. For example, you could make a list of mountains,
rivers, countries, cities, languages, or anything else you’d like.
 Write a program that creates a list containing these items.

 ***************************** Answer ************************/
var listofRivers = ["Indus", "Jhelum", "Chenab", "Sutlej", "Ravi"];
console.log("List of Rivers");
listofRivers.forEach(function (rivers) { return console.log(rivers); });
