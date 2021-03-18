var insertButton = document.getElementById('insert')
var deleteButton = document.getElementById('delete')
var inputtext = document.getElementById('inputnum')
var container = document.getElementById('treeContainer')
var svg = "http://www.w3.org/2000/svg";

function drawNode(x, y, value, r) {

    var circle = document.createElementNS(svg, 'circle')
    circle.setAttributeNS(null, 'cx', x)
    circle.setAttributeNS(null, 'cy', y)
    circle.setAttributeNS(null, 'r', r)
    circle.setAttributeNS(null, 'stroke', 'red')
    circle.setAttributeNS(null, 'fill', 'white')

    var textSvg = document.createElementNS(svg, 'text')
    textSvg.setAttributeNS(null, 'x', x - 8)
    textSvg.setAttributeNS(null, 'y', y + 3)
    textSvg.setAttributeNS(null, 'stroke', 'black')
    textSvg.setAttributeNS(null, 'font-size', '15')
    textSvg.innerHTML = value

    container.appendChild(circle)
    container.appendChild(textSvg)
    circle.classList.add('node')
    textSvg.classList.add('node')
}

function connectNodes(node1, node2) {
    var line = document.createElementNS(svg, 'line')
    line.setAttributeNS(null, 'x1', node1.x)
    line.setAttributeNS(null, 'y1', node1.y)
    line.setAttributeNS(null, 'x2', node2.x)
    line.setAttributeNS(null, 'y2', node2.y)
    line.setAttributeNS(null, 'stroke', 'red')
    line.setAttributeNS(null, 'stroke-width', 3)
    line.style = 'z-index: 1;'

    container.appendChild(line)
    line.classList.add('node')
}
var tree = new BST();
var i = 0;
insertButton.onclick = () => {
    i = parseInt(inputtext.value);
    if (inputtext.value) {
        tree.add(i);
        tree.update()
        tree.draw()
    } else {
        alert('Please enter some value')
    }
}

deleteButton.onclick = () => {
    i = parseInt(inputtext.value);
    if (inputtext.value) {
        tree.delete(i);
        tree.update()
        tree.draw()
    } else {
        alert('Please enter some value')
    }
}

var k = 0
for (var i = 0; i < 5; i++) {
    //tree.add(Math.floor(Math.random() * (98 - 5 + 1)) + 5)
}

tree.add(15)
tree.add(25)
tree.add(10)
tree.add(7)
tree.add(22)
tree.add(17)
tree.add(13)
tree.add(5)
tree.add(9)
tree.add(27)

tree.update()
tree.draw()