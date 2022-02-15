let isCake = false
let selectedCake = null

let isFrosting = false
let selectedFrosting = null

let isTopping = false
let selectedTopping = null
//variables for x and y values
var c1 = 550;
var c2 = 400
var c3 = 300
var c4 = 200
// var vanillaIcing = loadImage('https://i.imgur.com/CvsAtKW.png')
// var chocolateIcing = loadImage('https://i.imgur.com/hrVpTFf.png')
// var creamCheese = loadImage('https://i.imgur.com/CvsAtKW.png')
// //fruit
// var strawberry = loadImage("https://i.imgur.com/34lO0TE.png")
// var raspberries = loadImage('https://i.imgur.com/Z7fHVdz.png')
// //cake
// var redVelvet = loadImage('https://i.imgur.com/GFyYf9q.png')
// var strawberryCake = loadImage('https://i.imgur.com/Ek8EBiW.png')
// var chocolateCake = loadImage('https://i.imgur.com/NbJeUQU.png')
// var carrotCake = loadImage('https://i.imgur.com/wNrdtBQ.png')
// var vanillaCake = loadImage('https://i.imgur.com/Nt1aLnI.png')


function setup() {
  frameRate(10)
  createCanvas(windowWidth, windowHeight)
  background('#E1EDE0')
  textSize(50)
  textFont('Georgia')
  loadImage('https://i.imgur.com/BlnWT2v.png', img => {
    image(img, 20, 600, 1400, 160);
  })
}

function draw() {

  if (isCake == false && isFrosting == false && isTopping == false) {
    text("Please select a cake flavor!", 425, 100)
    var vanillaCake = loadImage('https://i.imgur.com/Nt1aLnI.png', img => {
      image(img, 200, 500, 200, 100);
    })

    var redVelvet = loadImage('https://i.imgur.com/GFyYf9q.png', img => {
      image(img, 500, 500, 200, 100);
    })

    var strawberryCake = loadImage('https://i.imgur.com/Ek8EBiW.png', img => {
      image(img, 800, 500, 200, 100);
    })

    var chocolateCake = loadImage('https://i.imgur.com/NbJeUQU.png', img => {
      image(img, 1100, 500, 200, 100);
    })
  }
  if (isCake != false && isFrosting == false && isTopping == false) {
    text("Please select a frosting flavor!", 425, 100)
    var vanillaFrosting = loadImage('https://i.imgur.com/CvsAtKW.png', img => {
      image(img, c1 - 200, c2 - 200, c3, c4);
    })
    var chocolateFrosting = loadImage('https://i.imgur.com/hrVpTFf.png', img => {
      image(img, c1 + 200, c2 - 200, c3, c4);
    })
  }

  if (isCake != false && isFrosting != false && isTopping == false) {
    //loading toppings
    loadImage("https://i.imgur.com/34lO0TE.png", img => {
      image(img, c1 - 100, c2 - 100, 50, 50);
    })
  }

  }
  




function mouseClicked() {
  if (isCake == false) {
    if (mouseX > 200 && mouseX < 400 && mouseY > 500 && mouseY < 600) {
      setup();
      isCake = true;
      selectedCake = 1;
    } else if (mouseX > 500 && mouseX < 700 && mouseY > 500 && mouseY < 600) {
      setup();
      selectedCake = 2;
      isCake = true;
    } else if (mouseX > 800 && mouseX < 1000 && mouseY > 500 && mouseY < 600) {
      setup();
      selectedCake = 3;
      isCake = true;
    } else if (mouseX > 1100 && mouseX < 1300 && mouseY > 500 && mouseY < 600) {
      setup();
      selectedCake = 4;
      isCake = true;
    }
  }
  loadCake();
  if (isFrosting == false && isCake != false) {
    if (mouseX > c1 - 200 && mouseX < c1 - 200 + c3 && mouseY > c2 - 200 && mouseY < c2 - 200 + c4) {
      setup();
      isFrosting = true;
      selectedFrosting = 1
    } else if (mouseX > c1 + 200 && mouseX < c1 + 200 + c3 && mouseY > c2 - 200 && mouseY < c2 - 200 + c4) {
      setup();
      isFrosting = true;
      selectedFrosting = 2;
    }
  }
  loadCake();
  loadFrosting();

  
}

function combineImage(img1, img2) {
  loadImage(img1, img => {
    image(img, c1, c2, c3, c4);
  })
  loadImage(img2, img => {
    image(img, c1, 490, c3, c4);
  })
}


function loadCake() {
  if (selectedCake == 1) {
    loadImage('https://i.imgur.com/Nt1aLnI.png', img => {
    image(img, c1, c2, c3, c4);
  })
  } else if(selectedCake == 2) {
    loadImage('https://i.imgur.com/GFyYf9q.png', img => {
    image(img, c1, c2, c3, c4);
  })
  } else if (selectedCake == 3) {
    loadImage('https://i.imgur.com/Ek8EBiW.png', img => {
      image(img, c1, c2, c3, c4);
    })
  } else if (selectedCake == 4) {
    loadImage('https://i.imgur.com/NbJeUQU.png', img => {
      image(img, c1, c2, c3, c4);
    })
  }

}

function loadFrosting() {
  if (selectedFrosting == 1) {
    loadImage('https://i.imgur.com/CvsAtKW.png', img => {
      image(img, c1, c2 - 15, c3, c4);
    })
  } else if (selectedFrosting == 2) {
    loadImage('https://i.imgur.com/hrVpTFf.png', img => {
      image(img, c1, c2 - 15, c3, c4);
    })
  }
}
