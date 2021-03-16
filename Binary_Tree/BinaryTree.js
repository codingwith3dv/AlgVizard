function BST() {
    this.root = null;
}

BST.prototype.add = function(data) {
    var node = new TreeNode(data);
    if (this.root == null) {
        this.root = node;
        this.root.x = window.innerWidth / 2;
        this.root.y = 50;
    } else {
        this.root.addNode(node)
    }
    
}

BST.prototype.transverse = function() {
    container.innerHTML = ''
    if (this.root == null) return;
    this.root.visit(this.root)
}

BST.prototype.update = function() {
    var levels = this.root.getLevels(this.root)
    var levelHeight = window.innerHeight/levels;
    
    
}