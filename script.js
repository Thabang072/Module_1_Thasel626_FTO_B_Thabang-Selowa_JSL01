function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let petName = /^pet_[a-zA-Z0-9]+$/;

    // TODO: Write your validation logic here
    let result;
    if (petName.test(input)) {
        result = "Valid Syntax \u{1F600}";
    } else {
        result = "Invalid Syntax  \u{1F612}";
    }

    // Check if input starts with 'pet_' and followed by alphanumeric character
        document.getElementById('result').innerText = result;
}


