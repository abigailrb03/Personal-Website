let isCake = false
let selectedCake = null

let isFrosting = false
let selectedFrosting = null

let isTopping = false
let selectedTopping = null

let beenRoasted = false
//variables for x and y values
var c1 = 550;
var c2 = 400
var c3 = 300
var c4 = 200


function setup() {
  frameRate(5)
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
    text("Please select a topping!", 425, 100)
    loadImage("https://i.imgur.com/34lO0TE.png", img => {
      image(img, c1 + 25, c2 - 120, 100, 100);
    })
    loadImage("https://i.imgur.com/Z7fHVdz.png", img => {
      image(img, c1 + 150, c2 - 120, 100, 100);
    })
  }

  if (isCake != false && isTopping != false && isFrosting != false && beenRoasted == false) {
    let roastMe = createButton('My cake is done! Roast me!')
    roastMe.position(600, 300)
    roastMe.mousePressed(roastTime);
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
  if (isCake != false && isFrosting != false && isTopping == false) {
    if (mouseX > c1 + 25 && mouseX < c1 + 125 && mouseY > c2 - 120 && mouseY < c2 -20) {
      setup();
      isTopping = true
      selectedTopping = 1
    } else if (mouseX > c1 + 150 && mouseX < c1 + 250 && mouseY > c2 - 120 && mouseY < c2 - 20) {
      setup();
      isTopping = true
      selectedTopping = 2
    }
  }
  loadCake();
  loadFrosting();
  loadToppings();
  
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

function loadToppings(){
  if (selectedTopping == 1) {
    loadImage("https://i.imgur.com/34lO0TE.png", img => {
  image(img, c1 + 25, c2 - 40, 100, 100);
    })
  } else if (selectedTopping == 2) {
    loadImage("https://i.imgur.com/Z7fHVdz.png", img => {
  image(img, c1 + 25, c2 - 40, 100, 100);
    })
  }
}

function roastTime() {
  setup();
  loadCake();
  loadFrosting();
  loadToppings();
  let roastNum = Math.floor(Math.random() * 10);
  if (roastNum == 0) {
    text("where the fuck is my lamb sauce", 400, 200)
  } else if (roastNum == 1) {
    text( "What are you?!?!? YOU'RE AN IDIOT SANDWHICH", 200, 200)
  } else if (roastNum == 2) {
    text ("this is actually a decent cake. good job", 450, 200)
  } else if (roastNum == 3) {
    text ("My gran could do better than this. AND SHE'S DEAD", 100, 200)
  } else if (roastNum == 4) {
    text("This cake is so shit that all the onions in the kitchen are crying", 10, 200)
  } else if (roastNum == 5) {
    text("FUCK OFF. FUCK OFF. FUCK OFF", 350, 200)
  } else if (roastNum == 6) {
    text("I wish you'd jump in the oven! \nThat would make my life a lot easier!", 350, 200)
  } else if (roastNum == 7) {
    text("What do you want?? A fucking MEDAL?!", 250, 200)
  } else if (roastNum == 8) {
    text("ARE YOU STUPID???", 400, 200)
  } else if (roastNum == 9) {
    text("for what we are about to eat, \nmay the lord make us truly not vomit", 300, 200)
  } else {
    text("I have never ever ever met someone I believe in \nas little as you", 300, 200)
  }
  beenRoasted = true;
}