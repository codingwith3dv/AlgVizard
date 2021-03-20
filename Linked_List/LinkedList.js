var container = document.getElementById('list');
var nodes = document.getElementsByClassName('node');
var pointers = document.getElementsByClassName('pointers')

function LinkedList() {

};

LinkedList.prototype.animateNode = function(index) {
    return new Promise(resolve => {
        nodes[index].style.animation = `highlightNode 1s ease`
        setTimeout(() => {
            nodes[index].style.animation = null;
            resolve()
        }, 1000);
    });
};

LinkedList.prototype.animateNodes = async function(fromNode, toNode) {

    for (var i = fromNode; i <= toNode; i++) {
        await this.animateNode(i);
    }
}

LinkedList.prototype.animateNodesForInsert = function(fromNode, toNode) {
    return new Promise(resolve => {
        for (let i = fromNode; i < toNode; i++) {
            console.log('length3', nodes.length)

            nodes[i].style.animation =
                "moveRightNode " +
                800 / 1000 + "s " +
                "ease";

            setTimeout(() => {
                nodes[i].style.animation = null;
            }, 800)
        }

        setTimeout(() => resolve(), 800)
    });

};

LinkedList.prototype.add = async function(index, data) {
    var node = document.createElement('div');
    node.classList.add('node');

    var nodedata = document.createElement('div');

    var text = document.createTextNode(data);
    nodedata.appendChild(text);
    node.appendChild(nodedata)

    var pointer = document.createElement('div');
    pointer.classList.add('pointers');
    
    var image = document.createElement('img');
    image.src = './21243359731558965381.svg';
    image.classList.add('image')
    
    pointer.appendChild(image)

    console.log(nodes.length);

    if (index === nodes.length) {
        await this.animateNodes(0, nodes.length - 1);
        container.appendChild(node);
        container.appendChild(pointer);
    } else {
        await this.animateNodes(0, index - 1);
        await this.animateNodesForInsert(index, nodes.length);
        container.insertBefore(pointer, nodes[index]);
        container.insertBefore(node, pointer)
    }
    node.style.animation = `grow 1s ease`;
};