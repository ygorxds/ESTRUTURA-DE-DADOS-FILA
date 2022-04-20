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

