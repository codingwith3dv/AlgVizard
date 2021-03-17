function BST() {
    this.root = null;
}

BST.prototype.add = function(data, conta) {
    var node = new TreeNode(data);
    if (this.root == null) {
        this.root = node;
        this.root.x = document.innerWidth / 2;
        this.root.y = 50;
    } else {
        this.root.addNode(node)
    }
    this.update(conta)
}

BST.prototype.draw = function() {
    //container.innerHTML = ''
    if (this.root == null) return;
    this.root.drawNodes(this.root)
}

BST.prototype.update = function(conta) {
    if(this.root === null)return;
    var levels = this.root.getLevels(this.root)
    
    this.root.updateNode(this.root, 1,1, levels, conta)
}