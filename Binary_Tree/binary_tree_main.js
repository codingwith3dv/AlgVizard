var insertButton = document.getElementById('insert')
var container = document.getElementById('treeContainer')
var svg = "http://www.w3.org/2000/svg";  

for(var i = 0; i < 11; i++){
    console.log(i);
    var circle = document.createElementNS(svg, 'circle')
    var x = Math.floor(Math.random() * ((window.innerWidth-20) -20+1))+20
    circle.setAttributeNS(null, 'cx',String(x))
    var y = Math.floor(Math.random() * (100-20+1))+20
    circle.setAttributeNS(null, 'cy', String(y))
    console.log(x + '    ' + y);
    circle.setAttributeNS(null, 'r',String(10))
    circle.setAttributeNS(null, 'fill','white')
    circle.setAttributeNS(null, 'stroke', 'black')
    circle.setAttributeNS(null, 'stroke-width', String(2))
    container.appendChild(circle)
}