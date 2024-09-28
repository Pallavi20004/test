document.getElementById('add-fruit').addEventListener('click', function() {
    const fruitInput = document.getElementById('fruit-input');
    const fruitList = document.getElementById('fruit-list');

    if (fruitInput.value.trim() !== "") {
        const newFruit = document.createElement('li');
        newFruit.textContent = fruitInput.value;
        fruitList.appendChild(newFruit);
        fruitInput.value = ''; // Clear the input field
    } else {
        alert("Please enter a fruit name.");
    }
});
