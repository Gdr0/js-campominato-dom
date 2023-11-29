let gridElement = document.getElementById("grid");
const buttonPlay = document.getElementById("play");
// const difficile = document.getElementById("difficile");
// const facile = document.getElementById("facile");
//
//
//
//
const newArrNum = genArrayRandomNum(1, 100, 16);
console.log(newArrNum);
buttonPlay.addEventListener(
  "click",
  function () {
    for (let i = 0; i < 100; i++) {
      const newElement = createMyElement("div", "square");
      gridElement.append(newElement);
      newElement.append(i);
      newElement.addEventListener("click", function () {
        let punteggio = document.querySelectorAll("#grid .clicked").length;
        if (newArrNum.includes(i)) {
          newElement.classList.add("bomb");
          alert(`HAI PERSO. il tuo punteggio è ${punteggio}`);
        } else {
          this.classList.add("clicked");
          console.log(punteggio);
        }
      });
    }
  },
  { once: true }
);
//
//
//
//

function createMyElement(tagtype, classname) {
  const currentElement = document.createElement(tagtype);
  currentElement.classList.add(classname);
  return currentElement;
}

function genArrayRandomNum(minNum, maxNum, lunghezzaArr) {
  const newArray = [];
  while (newArray.length < lunghezzaArr) {
    let newNumber = genRandomNumMinMax(minNum, maxNum);
    if (!newArray.includes(newNumber)) {
      newArray.push(newNumber);
    }
  }
  return newArray;
}

function genRandomNumMinMax(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
