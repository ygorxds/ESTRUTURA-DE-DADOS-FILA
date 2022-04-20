function Queue() {

  var intems = []

  this.enqueue = function (element) {
    // adiciona um novo elemento na fila
    intems.push(element)
  }
  this.dequeue = function () {
    // remove um elemento da fila

    return intems.shift()

  }
  this.front = function () {
    // retorna o primeiro elemento da fila
    return intems[0]

  }
  this.isEmpty = function () {
    // verfica se a fila está vazia ou não

    return intems.length === 0

  }

  this.size = function () {
    // retorna o tamanho da fila

    return intems.length

  }
  this.print = function () {
    // imprime a fila no console

    console.log(intems.toString())

  }

}



function hotPotato(name, num) {
  var fila = new Queue()

  for (var i = 0; i < name.length; i++) {
    fila.enqueue(name[i])
  }

  var eliminado = ''
  while (fila.size() > 1) {

    for (var i = 0; i < num; i++) {
      fila.enqueue(fila.dequeue())
    }
    eliminado = fila.dequeue()

    console.log(eliminado + " foi eleminado (a)")
  }

  return fila.dequeue()

}

var names = ['Ygor', 'Bea', 'José', 'Bruno', 'Lorena', 'Olivia', 'Sérgio', 'Vanda']
var winner = hotPotato(names, 10)
console.log("QUEM GANHOU FOI:" + winner)



