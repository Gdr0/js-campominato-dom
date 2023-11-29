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
      console.log(i);
      newElement.append(i);
      newElement.addEventListener("click", function () {
        if (newArrNum.includes(i)) {
          newElement.classList.add("bomb");
        } else {
          this.classList.add("clicked");
        }
      });
      gridElement.append(newElement);
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
