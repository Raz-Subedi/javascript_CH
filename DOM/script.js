
// getElementById returns a single element or null if no matching element is found.
// use append to add element.

const playground = document.getElementById('playground');
playground.append('wizard',' ','Crystal Ball',' ','Spell Book');

// a pin can also add multiple items at once
// and can handle strings and node objects

// There are other few ways to get a document element.
// WE can use query selector also.
// const playground = document.querySelector('#playground');
// const playground = document.querySelector('div');


// ✅ getElementById()
// Usage: Selects a single element by its id.
// Returns: The element object, or null if not found.

// ✅ querySelector()
// Usage: Selects the first element that matches a CSS selector.
// Returns: The first matching element, or null if not found.



// Creating Elements
const magicalOrb = document.createElement('div');
magicalOrb.textContent = 'Magical Orb';

playground.append(magicalOrb);


// Modifying Text Content

//-> there are two main properties for modifying text content there's inner text and inner content

const scrollOfWisdom = document.createElement('p');
playground.append(scrollOfWisdom);

scrollOfWisdom.innerText = 'Ancient wisdom lies within';
console.log(scrollOfWisdom.innerText);
