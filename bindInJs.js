let talk = function () {
  console.log(this.sound)
}

let boromir = {
  sound: 'puuk puuk !'
}

boromir.speak = talk // this will give you undefined result

boromir.speak();

let shit = boromir.speak

// without bind
shit()
// with bind
shit.bind(boromir)()

boromir.speak = talk.bind(boromir)();
