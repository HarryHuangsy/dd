
javascript
// Program to calculate student's average score for 4 units

// Function to calculate total and average score
function calculateAverageScore(unit1, unit2, unit3, unit4) {
    let totalScore = unit1 + unit2 + unit3 + unit4;
    let averageScore = totalScore / 4;
    return { total: totalScore, average: averageScore };
}

// Prompt user if they need help with calculation
let needHelp = prompt("Do you need help calculating your average score? (yes/no)");

if (needHelp.toLowerCase() === "yes") {
    let fullName = prompt("Please enter your full name:");
    let unit1 = parseFloat(prompt("Enter grade for Unit 1:"));
    let unit2 = parseFloat(prompt("Enter grade for Unit 2:"));
    let unit3 = parseFloat(prompt("Enter grade for Unit 3:"));
    let unit4 = parseFloat(prompt("Enter grade for Unit 4:"));

    let { total, average } = calculateAverageScore(unit1, unit2, unit3, unit4);

    console.log("Total score: " + total);
    console.log("Average score: " + average);
    console.log("Thank you for using the program.");
} else {
    console.log("No problem! If you need help later, feel free to ask. Thank you!");
}

// Comments:
// This program calculates the average score of a student for 4 units
// It prompts the user to enter their name and grades for each unit
// The total and average score are then calculated and displayed
// Author: [Harry]
// NCC ID: [223190610]
// GitHub link to the script: [Provide the link to your GitHub repository containing the script]