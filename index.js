function greet() {
    let userName = prompt("What is your name?")
    alert("Hello, " + userName + "!")
    let age = prompt("How old are you?")
    let parsedAge = parseInt(age)
    let userConfirmed = confirm("Select 'OK' if you have had a birthday this year. Select 'Cancel' if you have not.")
    if (userConfirmed === true) {
        alert("You were born in " + (new Date().getFullYear() - parsedAge) + ".")
    } 
    else {
        alert("You were born in " + (new Date().getFullYear() - (parsedAge + 1)) + ".")
    }
}