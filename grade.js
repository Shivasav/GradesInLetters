let grades = prompt("Enter your number grades (0-100): \n(To exit enter 999)");

while (grades != 999) {
  // Validating input
  if (grades >= 0 && grades <= 100) {
    // Function to set the letter grades based on the number grades
    function getLettergrades(grades) {
      if (grades >= 88 && grades <= 100) {
        return "A";
      } else if (grades >= 80 && grades <= 87) {
        return "B";
      } else if (grades >= 68 && grades <= 79) {
        return "C";
      } else if (grades >= 60 && grades <= 67) {
        return "D";
      } else if (grades < 60) {
        return "F";
      } else {
        return null;
      }
    }

    let letterGrades = getLettergrades(grades);
    if (letterGrades !== null) {
      alert(
        "Number Grade = " + grades + "\n" + "Letter Grade = " + letterGrades);
    }
  }

  // Ask the user again for grades or to exit
  grades = prompt("Enter your number grades (0-100) or 999 to exit:");
}

// Display a Thank you message
alert("Thank you for using the grade converter.");
