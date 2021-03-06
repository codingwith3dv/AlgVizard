var insertButton = document.getElementById('insert')
var deleteButton = document.getElementById('delete')
var inputtext = document.getElementById('inputnum')
var container = document.getElementById('treeContainer')
var svg = "http://www.w3.org/2000/svg";

function openTab(evt, name) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(name).style.display = "block";
    evt.currentTarget.className += " active";
}

function drawNode(node, node2) {
    var container2 = document.createElementNS(svg, 'g')
    var circle = document.createElementNS(svg, 'circle')
    circle.setAttributeNS(null, 'cx', node.currX)
    circle.setAttributeNS(null, 'cy', node.currY)
    circle.setAttributeNS(null, 'r', node.radius)
    circle.setAttributeNS(null, 'stroke', 'red')
    circle.setAttributeNS(null, 'fill', 'white')

    var textSvg = document.createElementNS(svg, 'text')
    textSvg.setAttributeNS(null, 'x', node.currX - 8)
    textSvg.setAttributeNS(null, 'y', node.currY + 3)
    textSvg.setAttributeNS(null, 'stroke', 'black')
    textSvg.setAttributeNS(null, 'font-size', '15')
    textSvg.innerHTML = node.data
    textSvg.style = 'z-index: 1;'

    var line = document.createElementNS(svg, 'line')
    line.setAttributeNS(null, 'x1', node.currX)
    line.setAttributeNS(null, 'y1', node.currY)
    line.setAttributeNS(null, 'x2', node2.currX)
    line.setAttributeNS(null, 'y2', node2.currY)
    line.setAttributeNS(null, 'stroke', 'red')
    line.setAttributeNS(null, 'stroke-width', 3)
    line.style = 'z-index: 1;'

    container2.appendChild(line)
    container2.appendChild(circle)
    container2.appendChild(textSvg)
    circle.classList.add('node')
    textSvg.classList.add('node')
    line.classList.add('node')
    container.appendChild(container2)
    //nodes.push(container2)
}

var tree = new BST();

insertButton.onclick = () => {
    i = parseInt(inputtext.value);
    document.getElementById('insertbt').click()
    if (inputtext.value) {
        tree.add(i);
        tree.update()
        document.getElementById('inputnum').value = ''
    } else {
        Alert.render('Please enter some value')
    }
}

deleteButton.onclick = () => {
    i = parseInt(inputtext.value);
    document.getElementById('deletebt').click()
    if (inputtext.value) {
        tree.delete(i);
        tree.update()
        document.getElementById('inputnum').value = ''
    } else {
        Alert.render('Please enter some value')
    }
}

document.getElementById('traverse').onclick = () => {
    document.getElementById('traversebt').click()
    tree.traverse()
}

document.getElementById('search').onclick = () => {
    document.getElementById('searchbt').click()
    tree.search(document.getElementById('inputnum').value);
    document.getElementById('inputnum').value = ''
}

for (var i = 0; i < 4; i++) {
    tree.add(Math.floor(Math.random() * (99 - 5 + 1)) + 5)
    tree.update()
}

setInterval(async () => {
    tree.draw()
}, 1000 / 60)