// Event Handling is crucial for creating interactive web pages.

const example = document.getElementById('removeId');

const magicButton = document.createElement('button');
magicButton.textContent = 'Cast Spell';
example.append(magicButton);

// magicButton.addEventListener('click',() => {
//     alert('Magic Sparkles fill the air!');
// });

function spellCast(){
    alert('Magic Sparkles fill the air!');
}

magicButton.addEventListener('click',spellCast);


magicButton.addEventListener('mouseover',(event) => {
    event.target.style.backgroundColor = 'purple';
});

magicButton.addEventListener('mouseout',(event) => {
    event.target.style.backgroundColor = '';
});



