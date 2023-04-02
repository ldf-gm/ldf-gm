const form = document.querySelector('form');
const textInput = document.querySelector('#text-input');
const textContainer = document.querySelector('#text-container');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const text = textInput.value; 
  textInput.value = ''; 

  const textNode = document.createTextNode(text); 
  const paragraph = document.createElement('p'); 
  paragraph.appendChild(textNode); 
  textContainer.appendChild(paragraph); 
});

