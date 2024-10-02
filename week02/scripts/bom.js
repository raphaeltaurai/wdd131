const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function() {
    if (input.value.trim() !== '') {
      // Create a new list item
      const li = document.createElement('li');
      const deleteButton = document.createElement('button');

      // Set the text content for the list item and delete button
      li.textContent = input.value;
      deleteButton.textContent = '❌';

      // Append the delete button to the list item
      li.append(deleteButton);

      // Append the list item to the list
      list.append(li);

      // Clear the input field and refocus it
      input.value = '';
      input.focus();

      // Add a click event to remove the chapter when the delete button is clicked
      deleteButton.addEventListener('click', function() {
        list.removeChild(li);
      });
    } else {
      // If input is blank, return focus to the input field
      input.focus();
    }
  });

/*
My errors
const li = document.createElement('li');
const deleteButton = document.createElement('button');

li.textContent = input.ariaValueMax;
deleteButton.textContent = '❌';

li.append(deleteButton);
list.append(li);

button.addEventListener('click', function() {if (input.value.trim() !== '') });*/