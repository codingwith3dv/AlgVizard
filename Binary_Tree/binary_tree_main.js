class TreeNode {
    constructor(data, xin, yin) {
        this.data = data
        this.leftNode = null;
        this.rightNode = null;
        this.x = xin;
        this.y = yin;
    }
}

class BinaryTree {
    constructor(start_x, start_y) {
        this.rootNode = null;
        this.current_x = start_x;
        this.current_y = start_y;
        this.x_offset = 10
    };

    insert(data) {
        var node = new TreeNode(data, this.current_x, this.current_y);
        console.log(data + '    ' + this.current_x + '    ' + this.current_y);
        if (this.rootNode === null) {
            this.rootNode = node;
            drawNode(this.rootNode)
        } else {
            this._insertNode(this.rootNode, node);
        }
        
        this.current_y+=20 
    };

    _insertNode(rootNodeIN, newNode) {
        if (newNode.data > rootNodeIN.data) {
            if (rootNodeIN.leftNode !== null) {
                this._insertNode(rootNodeIN.leftNode, newNode)
            } else {
                rootNodeIN.leftNode = newNode;
                this.current_x = newNode.x - 30
                drawNode(rootNodeIN.leftNode) 
            }
        } else {
            if (rootNodeIN.rightNode !== null) {
                this._insertNode(rootNodeIN.rightNode, newNode)
            } else {
                rootNodeIN.rightNode = newNode;
                this.current_x = newNode.x + 30 
                drawNode(rootNodeIN.rightNode) 
            }
        }
        
        if(rootNodeIN.leftNode === null){
            console.log('left null');
        }else if(rootNodeIN.rightNode === null){
            console.log('right null');
        }
        
    };
}


var insertButton = document.getElementById('insert')
var inputtext = document.getElementById('inputnum')
var container = document.getElementById('treeContainer')
var svg = "http://www.w3.org/2000/svg";
var index = -1;
var circleArray = []

function drawNode(node) {
    circleArray[++index] = document.createElementNS(svg, 'circle')
    circleArray[index].setAttributeNS(null, 'cx', node.x)
    circleArray[index].setAttributeNS(null, 'cy', node.y)
    circleArray[index].setAttributeNS(null, 'r', '10')
    circleArray[index].setAttributeNS(null, 'fill', 'red')
    container.appendChild(circleArray[index])
}

var BST = new BinaryTree(window.innerWidth / 2, 50);

insertButton.addEventListener('click', () => {
    var i = inputtext.value;
    //console.log(i);
    BST.insert(i)
}) 