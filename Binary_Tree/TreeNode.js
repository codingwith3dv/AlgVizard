function TreeNode(dataIn, x, y) {
    this.data = dataIn;
    this.left = null;
    this.right = null;
    this.x = x;
    this.y = y;
}

TreeNode.prototype.addNode = function(newNode) {
    if (newNode.data < this.data) {
        if (this.left === null) {
            this.left = newNode;
            this.left.x = this.x - 30;
            this.left.y = this.y + 20;
        } else {
            this.left.addNode(newNode)
        }
    } else if (newNode.data > this.data) {
        if (this.right === null) {
            this.right = newNode;
            this.right.x = this.x + 30;
            this.right.y = this.y + 20; 
        } else {
            this.right.addNode(newNode)
        }
    }
}

TreeNode.prototype.visit = function(){
    if(this.left !== null){
        this.left.visit();
    }
    console.log('found ' + this.data);
    drawNode(this.x, this.y)
    if(this.right !== null){
        this.right.visit();
    }
}