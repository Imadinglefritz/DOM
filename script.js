var button = document.querySelector("button");
var input = document.querySelector("input");
var ul = document.querySelector("ul");
var items = document.querySelectorAll("li");

// adds fa-ul class to ul.  Used for trashcan icon
ul.className = "fa-ul";

// Returns the length of the user's input
function inputLength() {
	return input.value.length;
}

// Toggles the linethrough css code
function toggleDone(event) {
	event.target.classList.toggle("done");
 }

// Deletes the item whose trashcan is clicked
function deleteItem() {
	event.target.parentNode.parentNode.remove();
}

// Creates a list item with a trashcan
// Also used to add trashcan to existing HTML list
function createListElement(inputvalue) {
	// creates a new i element (for trashcan)
	var i = document.createElement("i");
	// add classes to i (for trashcan)
	i.classList.add("fa-sharp", "fa-solid", "fa-trash");
	// creates a new deleteButton element (for trashcan)
	var deleteButton = document.createElement("Button");
	// adds an event listener to the delete button/trashcan
	deleteButton.addEventListener("click", deleteItem);
	// add btn class to deleteButton (for trashcan)
	deleteButton.classList.add("btn");
	// creates new li element 
	var li = document.createElement("li");
	// appends i element onto deleteButton element
	deleteButton.appendChild(i);
	// appends deleteButton element onto li element
	li.appendChild(deleteButton);
	// adds the new list text to the new li
	li.appendChild(document.createTextNode(inputvalue));
	// appends li element onto ul element
	ul.appendChild(li);
	// add event listener to newly created item
	li.addEventListener("click", toggleDone);
	// resets the user input to blank
	input.value = "";
}

// Adds trashcan to existing list by replacing existing item
for (var index = 0; index < items.length; index++) {
	// saves existing list item content to input.value
	input.value = document.querySelectorAll("li")[0].textContent;
	// deletes the existing li item
	items[index].parentNode.removeChild(items[index]);
	// creates a new properly formatted item to replace existing item 
	createListElement(input.value);
}

// calls the createListElement function when the Enter button is clicked
function enterButtonClicked() {
	if (inputLength() > 0) {
		createListElement(input.value);
	}
}

// calls the createListElement function when the keyboard Enter key is pressed
function enterKeyPressed(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement(input.value);
	}
}

// adds event listeners when Enter key is pressed or mouse is clicked
button.addEventListener("click", enterButtonClicked);
input.addEventListener("keypress", enterKeyPressed);
