let arrCards = []; // Declaración global

function printBubbleSort (arr, i) {
    const bubbleSortContainer = document.getElementById('bubble-steps');
    const bubbleSort = document.createElement('div');
    bubbleSort.classList.add('row', 'mb-3');
    
    const numSort = document.createElement('div');
    numSort.classList.add('col-auto', 'ps-5', 'position-relative');

    const num = document.createElement('div');
    num.classList.add('position-absolute', 'top-50', 'start-50', 'translate-middle');
    num.textContent = i;

    bubbleSortContainer.appendChild(bubbleSort);
    bubbleSort.appendChild(numSort);
    numSort.appendChild(num);

    arr.forEach(card => {
        // Asumo que tu función generateCard acepta family, value, y color como parámetros
        const newCard = generateCard(card.family, card.value, card.color);
        bubbleSort.appendChild(newCard);
    });

    bubbleSortContainer.appendChild(bubbleSort);
}
function generateCard (family, value, color){
    const cartasContainer = document.getElementById('cardsContainer');
    const carta = document.createElement('div');
    carta.classList.add('col-auto', 'pe-0');

    const card = document.createElement('div');
    card.classList.add('card');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body', 'pokerCard', color);

    const iTop = document.createElement('div');
    iTop.classList.add('clearfix', 'text-start', 'iTop');
    const imgTop = document.createElement('img');
    imgTop.src = `assets/img/i-${family.toLowerCase()}.svg`;
    iTop.appendChild(imgTop);

    const textCenter = document.createElement('div');
    textCenter.classList.add('clearfix', 'text-center');
    textCenter.textContent = value;

    const iBottom = document.createElement('div');
    iBottom.classList.add('clearfix', 'text-end', 'iBottom');
    const imgBottom = document.createElement('img');
    imgBottom.src = `assets/img/i-${family.toLowerCase()}.svg`;
    iBottom.appendChild(imgBottom);

    cardBody.appendChild(iTop);
    cardBody.appendChild(textCenter);
    cardBody.appendChild(iBottom);

    card.appendChild(cardBody);
    carta.appendChild(card);

    return carta;
};

function generateRandomCard() {
    const families = ['Corazones', 'Rombos', 'Trebol', 'Picas'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const colors = ['red', 'black'];
  
    const randomFamilyIndex = Math.floor(Math.random() * families.length);
    const randomValueIndex = Math.floor(Math.random() * values.length);
    const randomColorIndex = Math.floor(Math.random() * colors.length);
  
    const randomCard = {
      family: families[randomFamilyIndex],
      value: values[randomValueIndex],
      color: colors[randomColorIndex]
    };
  
    return randomCard;
};

function generateRandomCards (numCards) {
    for (let c=0; c < numCards; c++) {
        arrCards.push(generateRandomCard());
    }
    console.log(arrCards);
    arrCards.forEach(card => {        
        const newCard= generateCard (card.family, card.value, card.color );
        console.log(newCard);
        const cardsContainer = document.getElementById('cardsContainer');
        cardsContainer.appendChild(newCard);
    });
    return arrCards;
};

function getValue(cardValue) {
    switch (cardValue) {
        case 'J':
        case 'Q':
        case 'K':
            return 10;
        case 'A':
            return 1; 
        default:
            return parseInt(cardValue, 10);
    }
};

function sortCards(arrCards) {
    let count = 0;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arrCards.length - 1; i++) {
            const valueA = getValue(arrCards[i].value);
            const valueB = getValue(arrCards[i + 1].value);
    
            if (valueA > valueB) {
                let temp = arrCards[i];
                arrCards[i] = arrCards[i + 1];
                arrCards[i + 1] = temp;
                swapped = true;
                printBubbleSort(arrCards, count);
                count++;
            } 
        }
    } while (swapped);
    // printBubbleSort(arrCards, count);
};

function orderCards() {
    if (arrCards) {
        const arrCopy = [...arrCards];
        sortCards(arrCopy);
    } else {
        console.log("Primero genera las cartas antes de intentar ordenar.");
    }
};

function recogerNumero() {
    const numCards = document.getElementById('inputNumber').value;
    console.log(numCards);
    generateRandomCards(numCards);
};


