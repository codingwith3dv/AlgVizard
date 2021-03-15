var insertButton = document.getElementById('insert')
var container = document.getElementById('treeContainer')
var svg = "http://www.w3.org/2000/svg";
var binary_array_length = 20;
var binary_array = [binary_array_length]

function createNode(x, y, index) {
    binary_array[index] = document.createElementNS(svg, 'circle')
    binary_array[index].setAttributeNS(null, 'cx', x)
    binary_array[index].setAttributeNS(null, 'cy', y)
    binary_array[index].setAttributeNS(null, 'fill', 'red')
    binary_array[index].setAttributeNS(null, 'r', 10)
    binary_array[index].style='transition: 0.5s all ease-in-out;'
    container.appendChild(binary_array[index])
}

function updateNode(color,index){
    binary_array[index].setAttribute('fill', color )
}

window.onload = function(){
    createNode(50,50,0)
    createNode(100,100,1)
}

updateNode('green',0)