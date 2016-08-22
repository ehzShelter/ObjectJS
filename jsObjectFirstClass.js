let talk = function () {
  console.log(this.sound)
}

let boromir = {
  bladder : talk,
  sound: 'Aha '
}

let gollum = {
  jabber: boromir.bladder,
  sound: 'rebe rebe'
}

gollum.jabber() // rebe rebe

gollum.jabber.bind(boromir)()
