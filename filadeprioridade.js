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

function PriorityQueue() {
  var items = []

  function QueueElement(element, priority) {
    this.element = element
    this.priority = priority
  }
  this.enqueue = function (element, priority) {

    var queueElement = new QueueElement(element, priority)
    var added = false

    for (var i = 0; i < items.length; i++) {
      if (queueElement.priority < items[i].priority) {
        items.splice(i, 0, queueElement)
        added = true
        break
      }
    }
    if (!added) {
      items.push(queueElement)
    }
  }
  this.dequeue = function () {
    return items.shift()
  }

  this.print = function () {
    for (var i = 0; i < items.length; i++) {
      console.log(items[i].element + ' ' + items[i].priority)
    }
  }
}

var pqueue = new PriorityQueue()

pqueue.enqueue('Zezinho', 1)
pqueue.enqueue('Ana', 2)
pqueue.enqueue('Lorena', 1)
pqueue.enqueue('Olivia', 7)
pqueue.enqueue('Ygor', 3)

pqueue.print()