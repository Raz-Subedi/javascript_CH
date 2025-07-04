
// Document fragments are lightweight containers for holding multiple elemetns before adding them to the dom.

const playground = document.getElementById('document');

const fragment = document.createDocumentFragment();

for(let i=0;i<5;i++){
    const magicalItem = document.createElement('li');
    magicalItem.textContent = 'Magical Item ${i + 1}';
    fragment.append(spellList);
}

const spellList = document.createElement('ul');
playground.append(spellList);

spellList.append(fragment);