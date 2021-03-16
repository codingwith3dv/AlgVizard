var insertButton = document.getElementById('insert')
var inputtext = document.getElementById('inputnum')
var container = document.getElementById('treeContainer')
var svg = "http://www.w3.org/2000/svg";
var index = -1;
var circleArray = []

function drawNode(x, y) {
    circleArray[++index] = document.createElementNS(svg, 'circle')
    circleArray[index].setAttributeNS(null, 'cx', x)
    circleArray[index].setAttributeNS(null, 'cy', y)
    circleArray[index].setAttributeNS(null, 'r', '10')
    circleArray[index].setAttributeNS(null, 'fill', 'red')
    container.appendChild(circleArray[index])
}

var tree = new BST();

insertButton.addEventListener('click', () => {
    var i = inputtext.value;
    tree.add(i)
    tree.transverse()
}) 

for (var i = 0; i < 20; i++) {
    //tree.add(Math.floor(Math.random() * (98 - 5 + 1)) + 5)
}

//tree.transverse()