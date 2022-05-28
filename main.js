var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form Submit Event
form.addEventListener('submit', addItem);
// Removing an Item
itemList.addEventListener('click', removeItem);
// Filter Event
filter.addEventListener('keyup', filterItem);

// Add Item
function addItem(e){
    e.preventDefault();

    console.log(1);

    // get Input Value
    var input = document.querySelector('#input').value;

    console.log(input);

    // Create a li element
    var li = document.createElement('li');

    // Add class
    li.className = 'list-group-item';

    // Add text node with input
    li.appendChild(document.createTextNode(input));

    // Create delete button
    var deletebtn = document.createElement('button');

    //Adding classes to btn
    deletebtn.className = 'btn btn-danger btn-sm float-right delete';

    // Creating the text
    deletebtn.appendChild(document.createTextNode('X'));

    // Appending button to li
    li.appendChild(deletebtn);

    // Appending li to list
    itemList.appendChild(li);
}


// Deleting the Item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter the object
function filterItem(e){
    // Convert Text to Lower Case
    var text = e.target.value.toLowerCase();
    console.log(text);
    // Get Li
    var items = document.getElementsByTagName('li');
    console.log(items);
    // Converting to an Array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    })
}