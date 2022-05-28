// Document Object Examination

// console.dir(document);
// console.log(document.domain); // Domain of the browser running on
// console.log(document.URL); // Gives url
// console.log(document.title);
// // document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.all); // Collection of all elements in document
// console.log(document.body);
// console.log(document.forms); // Collection of all the forms
// console.log(document.links)

// Get Element By Id
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// headerTitle.textContent = "Hello";
// console.log(headerTitle.textContent); 
// console.log(headerTitle.innerText); 

// TextContent is the Node and innerText is the HTML property

// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()
// document.getElementsByName()
// document.querySelector()
// document.querySelectorAll()



// TRAVESRING THE DOM
// var itemList = document.querySelector("#items");

 // parentNode

// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentElement.parentElement.parentElement);

// ChildNode
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[2]);

// itemList.children[2].style.backgroundColor = "yellow";

// FirstChild
// console.log(itemList.firstChild); // Useless Sice it gives the #text for the gap
// FirstElementChild
// console.log(itemList.firstElementChild);

// lastChild
// console.log(itemList.lastChild);
// lastElementChild
// console.log(itemList.lastElementChild);

// nextSibbling
// console.log(itemList.nextSibling);

// nextElementSibbling
// console.log(itemList.nextElementSibling);

// previousSibbling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

// createElement

// create a div
//  var newDiv = document.createElement('div');

//Add Class
//  newDiv.className = 'hello';

// Add id
//  newDiv.id = 'hello_id';

// Add attr
//  newDiv.setAttribute('title', 'Hello Div');

 // Create Text Node
// var newDivText = document.createTextNode('Hello World');

// Add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// console.log(newDiv);

// newDiv.style.fontSize = '30px';

// Insert the created Element
// container.insertBefore(newDiv, h1);

// EVENTS

// var button = document.getElementById('button').addEventListener(
//     'click',
//     buttonClick
// );

// function buttonClick(e){
    // console.log('Button Clicked');
    // document.getElementById('header-title').textContent = 'Header';
    // document.querySelector('#main').style.backgroundColor = 'green';

    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.value);
    // console.log(e.target.className);
    // console.log(e.target.id);
    // console.log(e.target.classList);

    // console.log(e.type);

    // X and Y axis distance as per window
    // console.log(e.clientX);
    // console.log(e.clientY);

    // X and Y axis distance as per the taken button
    // console.log(e.offsetX);
    // console.log(e.offsetY);

    // To know if the alt key or ctrl key or shift key is pressed
    // console.log(e.altKey);
    // console.log(e.ctrlKey);
    // console.log(e.shiftKey);
// }

// Other Types of Events

// var button = document.getElementById('button');

//CLICK EVENTS
// button.addEventListener('click',runEvent);
// button.addEventListener('dblclick', runEvent);

// MOUSE EVENTS
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);
// button.addEventListener('mouseenter', runEvent);
// button.addEventListener('mouseleave', runEvent);
// button.addEventListener('mousemove', runEvent);
// button.addEventListener('mouseover', runEvent);

// function runEvent(e){
//     console.log("EVENT TYPE: " + e.type);
// }

// var box = document.getElementById('box');
// var body = document.getElementById('body');

// box.addEventListener('mousemove', runEvent);

// var itemInput = document.querySelector('input[type="text"]');
// var form = document.querySelector('form');

// var select = document.getElementById('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent);

// select.addEventListener('change', runEvent);

// form.addEventListener('submit', runEvent);

// function runEvent(e){
//     e.preventDefault();
//     console.log(e.type);
// }