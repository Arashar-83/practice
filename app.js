
// const li  = document.createElement('li');


// li.className = 'collection-item';


// li.id = 'new-item';

// li.setAttribute('title', 'New Item');


// li.appendChild(document.createTextNode('Hello World'));


// const link = document.createElement('a');

// link.className = 'delete-item secondary-content';

// link.innerHTML = '<i class="fa fa-remove"></i>';

// li.appendChild(link);


// document.querySelector('ul.collection').appendChild(li);

// console.log(li);



// const newHeading = document.createElement('h2');

// newHeading.id = 'task-title';

// newHeading.appendChild(document.createTextNode('Task List'));


// const oldHeading = document.getElementById('task-title');

// const cardAction = document.querySelector('.card-action');


// cardAction.replaceChild(newHeading, oldHeading);


// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// lis[0].remove();


// list.removeChild(lis[3]);


// const firstLi = document.querySelector('li:first-child');
// const link = firstLi.children[0];

// let val;


// val = link.className;
// val = link.classList;
// val = link.classList[0];
// link.classList.add('test');
// link.classList.remove('test');
// val = link;


// val = link.getAttribute('href');
// val = link.setAttribute('href', 'http://google.com');
// link.setAttribute('title', 'Google');
// val = link.hasAttribute('title');
// link.removeAttribute('title');
// val = link;

// console.log(val);




// document.querySelector('.clear-tasks').addEventListener('click', onClick);

// function onClick(e){
//   //console.log('Clicked');

//   let val;

//   val = e;

  
//   val = e.target;
//   val = e.target.id;
//   val = e.target.className;
//   val = e.target.classList;

  
//   val = e.type;

  
//   val = e.timeStamp;

  
//   val = e.clientY;
//   val = e.clientX;

  
//   val = e.offsetY;
//   val = e.offsetX;

//   console.log(val);
// }

// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

// // Click
// // clearBtn.addEventListener('click', runEvent);
// // Doubleclick
// // clearBtn.addEventListener('dblclick', runEvent);
// // Mousedown
// // clearBtn.addEventListener('mousedown', runEvent);
// // Mouseup
// // clearBtn.addEventListener('mouseup', runEvent);
// // Mouseenter
// // card.addEventListener('mouseenter', runEvent);
// // Mouseleave
// // card.addEventListener('mouseleave', runEvent);
// // Mouseover
// // card.addEventListener('mouseover', runEvent);
// // Mouseout
// // card.addEventListener('mouseout', runEvent);
// // Mousemove
// card.addEventListener('mousemove', runEvent);


// function runEvent(e) {
//   console.log(`EVENT TYPE: ${e.type}`);

//   heading.textContent= `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

//   document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
// }




// const form = document.querySelector('form');
// const taskInput = document.getElementById('task');
// const heading = document.querySelector('h5');
// const select = document.querySelector('select');


// taskInput.value = '';

// // form.addEventListener('submit', runEvent);

// // Keydown
// //taskInput.addEventListener('keydown', runEvent);
// // Keydown
// // taskInput.addEventListener('keyup', runEvent);
// // Keypress
// // taskInput.addEventListener('keypress', runEvent);
// // Focus
// // taskInput.addEventListener('focus', runEvent);
// // Blur
// // taskInput.addEventListener('blur', runEvent);
// // Cut
// // taskInput.addEventListener('cut', runEvent);
// // Paste
// // taskInput.addEventListener('paste', runEvent);
// // Input
// // taskInput.addEventListener('input', runEvent);
// // Change
// select.addEventListener('change', runEvent);

// function runEvent(e){
//   console.log(`EVENT TYPE: ${e.type}`);

//   //console.log(e.target.value);

//   // heading.innerText = e.target.value;

//   // Get input value
//   // console.log(taskInput.value);

//   // e.preventDefault();
// }