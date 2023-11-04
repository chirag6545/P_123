// Write your code below
// FizzBuzz logic
for (let i = 1; i <= 100; i++) {
    let output = '';

    if (i % 3 === 0) {
        output += 'Fizz';
    }

    if (i % 5 === 0) {
        output += 'Buzz';
    }

    if (output === '') {
        output = i;
    }

    // Create a list item for each FizzBuzz number
    const listItem = document.createElement('li');
    listItem.textContent = output;

    // Add the list item to the output list
    document.getElementById('output-list').appendChild(listItem);
}
