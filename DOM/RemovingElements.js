
// const example = document.getElementById('removeId');

// const temporaryElement = document.createElement('p');
// temporaryElement.textContent = " Now you see me....";
// example.append(temporaryElement);

// temporaryElement.remove();
// //temporaryElement.removeChild(temporaryElement);


// Example for RemoveChild

const example = document.getElementById('removeId');

const fruitBasket = document.createElement('div');
fruitBasket.innerHTML = `
                    <p> Apple </p>
                    <p> Banana </p>
                    <p> Cherry </p>
                    `;
    example.append(fruitBasket);

    while(fruitBasket.firstChild){
        fruitBasket.removeChild(fruitBasket.firstChild);
    }