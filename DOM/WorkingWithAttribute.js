const example = document.getElementById('removeId');

const magicWand = document.createElement('div');
magicWand.setAttribute('id','wandi');
magicWand.setAttribute('class','magical-item wand');
magicWand.textContent = " Magic Wand";
example.append(magicWand);

console.log(magicWand.getAttribute('id'));
console.log(magicWand.id);

magicWand.id = "wand3";
console.log(magicWand.id);