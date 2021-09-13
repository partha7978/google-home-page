let redirectToGoogle = () => {
    let userInput = document.getElementById("userInput");
    location.href = `https://www.google.com/search?q=${userInput.value}`;
}