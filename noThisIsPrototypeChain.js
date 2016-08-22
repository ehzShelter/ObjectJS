function talk() {
  console.log(this)
  console.log(this.sound)
}

// this will give you global node object (for browser refer to global windows object)
// this will give you

// talk()

let animal = {
  sound: 'fuck fuck',
  talk: talk
}

let cat = {
  sound: 'meow !!',
  // talk : function () {
  //   console.log("hey this is cat");
  // }
}

let dog = {
  sound: 'woof!!',
}

let pitbull = {
  howl: function() {
    console.log(this.sound.toUpperCase())
  }
}

Object.setPrototypeOf(pitbull, dog)
pitbull.howl();

pitbull.howl = function() {
  console.log("pitbull is not redbull");
}

pitbull.howl();

// prototypes are delegate
Object.setPrototypeOf(pitbull, dog)
pitbull.howl();

// cat.talk() // throw error if talk is not defined in cat object
Object.setPrototypeOf(cat, animal)
cat.talk()
