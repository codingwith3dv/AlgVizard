var container = document.getElementById('list');
var nodes = document.getElementsByClassName('node');

function LinkedList() {

};

LinkedList.prototype.animateNode = function(index) {
    return new Promise(resolve => {
        nodes[index].style.animation = `grow 1s ease`
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

LinkedList.prototype.animateNodesForInsert = async function(from, to) {
    return new Promise(resolve => {
        for (var j = from; j < to; j++) {
            nodes[j].style.animation = 'moveRightNode 0.8s ease'
            setTimeout(async() => {
                nodes[j].style.animation = null
            }, 800);
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

    if (index === nodes.length) {
        await this.animateNodes(0, nodes.length - 1);
        container.appendChild(node);
    } else {
        await this.animateNodes(0, index - 1);
        await this.animateNodesForInsert(index, nodes.length - 1);
        container.insertBefore(node, nodes[index]);
    }
    node.style.animation = `grow 1s ease`;
    setTimeout(() => {

    }, 1000);
};