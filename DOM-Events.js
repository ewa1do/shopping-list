const button = document.getElementById('enter');
const input = document.getElementById('userinput');
const ul = document.querySelector('ul');
const li = document.querySelectorAll('li');

const inputLength = () => input.value.length;

const createListElement = function() {
    const list = document.createElement('li');
    const btn = document.createElement('button');

    list.appendChild(document.createTextNode(input.value));
    ul.appendChild(list);
    
    list.appendChild(btn);
    btn.textContent = 'Delete!';   
    
    input.value = '';

    //calling the DeleteButton function
    buttonList();
}

const addListAfterClick = function() {
    if (input.value.length > 0) {
        createListElement();
    }
}

const addListAfterKeyPress = function(event) {
    if (input.value.length > 0 && event.keyCode === 13) {
        createListElement();
    }
}
//Exercises
//1-if you click on the list item, it toggles the .done class on and off

const addDoneAfterClick = function(event) {
    //console.log(event);
    if (event.target.localName === 'li') {
        event.target.classList.toggle('done');
    }
}

//2-Add button next to each list item to delete the item when clicked on its corresponding delete button
//3-Bonus: When adding a new list item, it automatically adds the delete button next to it
const deleteElement = function() {
    for (let i = 0; i < li.length; i++)
    this.parentElement.remove();
}

const buttonList = function() {
    const button = document.querySelectorAll('li button');
    //console.log(button);
    
    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener('click', deleteElement);
    }
}


button.addEventListener('click', addListAfterClick);
input.addEventListener('keypress', addListAfterKeyPress);
ul.addEventListener('click', addDoneAfterClick);

//console.log(li.length);