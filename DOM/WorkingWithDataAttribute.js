

//Data attribue are a special kind of attribute that allows us to store extra information on standard HTML elements
// They are basically a way to embed custom data in your HTML that can be easily accessed via Javascript data

const example = document.getElementById('removeId');

const secretScroll = document.createElement('div');
secretScroll.id = 'secretScroll';
secretScroll.dataset.spell = 'invisiblilty';
secretScroll.dataset.components = "moonlight,shadow,essence";
secretScroll.textContent = "Ancient Spell Scroll";

example.append(secretScroll);

// Access the data
console.log("Spell types:", secretScroll.dataset.spell);
console.log("Components:", secretScroll.dataset.components.split(','));