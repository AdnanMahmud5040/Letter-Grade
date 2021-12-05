var marks = parseInt(prompt("Enter your marks : "))

// checking the conditions
if (marks >= 80)
    document.write("You got A+")
else if (marks >= 70)
    document.write("You got A")
else if (marks >= 60)
    document.write("You got A-")
else if (marks >= 50)
    document.write("You got B")
else if (marks >= 40)
    document.write("You got C")
else if (marks >= 33)
    document.write("You got D")
else
    document.write("Sorry. You've Failed")