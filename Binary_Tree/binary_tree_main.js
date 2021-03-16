var insertButton = document.getElementById('insert')
var inputtext = document.getElementById('inputnum')
var container = document.getElementById('treeContainer')
var svg = "http://www.w3.org/2000/svg";
var index = -1;
var circleArray = []
var textArray = []

function drawNode(x, y, value) {
    circleArray[++index] = document.createElementNS(svg, 'circle')
    circleArray[index].setAttributeNS(null, 'cx', x)
    circleArray[index].setAttributeNS(null, 'cy', y)
    circleArray[index].setAttributeNS(null, 'r', '20')
    circleArray[index].setAttributeNS(null, 'fill', 'red')
    
    textArray[index] = document.createElementNS(svg, 'text')
    textArray[index].setAttributeNS(null, 'x', x-10)
    textArray[index].setAttributeNS(null, 'y', y+6)
    textArray[index].setAttributeNS(null, 'fill', 'black')
    
    textArray[index].setAttributeNS(null, 'font-size', '20')
    
    var text = document.createTextNode(value)
    textArray[index].appendChild(text)
    
    container.appendChild(circleArray[index])
    container.appendChild(textArray[index]) 
}

var tree = new BST();

insertButton.addEventListener('click', () => {
    var i = inputtext.value;
    tree.add(i)
    tree.transverse()
}) 

for (var i = 0; i < 20; i++) {
    tree.add(Math.floor(Math.random() * (98 - 5 + 1)) + 5)
}

tree.transverse()