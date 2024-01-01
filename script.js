// function getFormvalue() {
//     //Write your code here

// }
// script.js

function getFormvalue() {
    // Get the values of first and last name from the form
    var firstName = document.forms["form1"]["fname"].value;
    var lastName = document.forms["form1"]["lname"].value;

    // Display the values using alert
    alert("First Name: " + firstName + "\nLast Name: " + lastName);

    // Return false to prevent the form from submitting (optional)
    return false;
}
