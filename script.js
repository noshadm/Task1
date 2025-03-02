function calculateAge() {
    // Get user inputs
    var day = parseInt(document.getElementById('day').value, 10);
    var month = parseInt(document.getElementById('month').value, 10) - 1; 
    var year = parseInt(document.getElementById('year').value, 10);

    // Validate inputs
    if (!day || !month || !year) {
        document.getElementById('result').innerText = "Please enter a valid date!";
        return;
    }

    // Get the current date
    var today = new Date();

    // User's birthdate
    var birthDate = new Date(year, month, day);

    if (birthDate > today) {
        document.getElementById('result').innerText = "Birthdate cannot be in the future!";
        return;
    }

    // Calculate age
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    // Display the result
    document.getElementById('result').innerText = 'Your age is:'+age+ ' years.';
}