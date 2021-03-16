function TreeNode(dataIn, xin, yin) {
    this.data = dataIn;
    this.left = null;
    this.right = null;
    this.x = xin;
    this.y = yin;
}

TreeNode.prototype.addNode = function(newNode) {
    if (newNode.data < this.data) {
        //console.log('left');
        if (this.left == null) {
            this.left = newNode;
            this.left.x = this.x - 50;
            this.left.y = this.y + 30;
        } else {
            this.left.addNode(newNode)
        }
    } else if (newNode.data >= this.data) {
        //console.log('right');
        if (this.right == null) {
            this.right = newNode;
            this.right.x = this.x + 50;
            this.right.y = this.y + 30;
        } else {
            this.right.addNode(newNode)
        }
    }
}

TreeNode.prototype.visit = function(parentNode) {
    
    if (this.left != null) {
        this.left.visit(this);
    }
    
    if (this.right != null) {
        this.right.visit(this);
    }
    
    connectNodes(this, parentNode)
    drawNode(this.x, this.y, this.data)
}