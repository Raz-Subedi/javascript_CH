
// Classes are often used for styling elements with Css but they're also useful for JavaScript Selection and Manipulation
const example = document.getElementById('removeId');

const shapeshifter = document.createElement('div');
shapeshifter.textContent = "Shape  Shifter";
example.append(shapeshifter);

shapeshifter.classList.add('magical','creature');
console.log("Initial classes:", shapeshifter.className);

shapeshifter.classList.remove('creature');
shapeshifter.classList.add('humanoid');
console.log("Updated classes:", shapeshifter.className);

shapeshifter.classList.toggle('invisible');
shapeshifter.classList.toggle('invisible');
console.log(shapeshifter.classList.contains('invisible'));

shapeshifter.classList.replace('humanoid','beast');