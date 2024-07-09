function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let pattern = /^pet_[a-zA-Z0-9]+$/;

    // TODO: Write your validation logic here
    let result;

    // Check if input starts with 'pet_' and followed by alphanumeric character
        document.getElementById('result').innerText = result;
}


