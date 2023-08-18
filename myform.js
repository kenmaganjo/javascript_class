document.addEventListener('DOMContentLoaded', function () {
    const myForm = document.getElementById('myForm');
    const outputTable = document.getElementById('outputTable');
    const errorContainer = document.getElementById('error');
    const inputs = ['first_name', 'last_name', 'email'].map(id => document.getElementById(id));

    myForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const inputsAreEmpty = inputs.some(input => input.value.trim() === '');

        if (inputsAreEmpty) {
            errorContainer.innerText = "Ensure all fields are set";
        } else {
            errorContainer.innerText = '';

            const newRow = outputTable.insertRow();
            inputs.forEach((input, index) => newRow.insertCell(index).innerHTML = input.value);

            myForm.reset();
        }
    });
});
