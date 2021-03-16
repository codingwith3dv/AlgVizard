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
    this.update()
}

BST.prototype.transverse = function() {
    container.innerHTML = ''
    if (this.root == null) return;
    this.root.visit(this.root)
}

BST.prototype.update = function() {
    if(this.root === null)return;
    var levels = this.root.getLevels(this.root)
    var levelHeight = (window.innerHeight/levels) - 50;
    
    this.root.updateTree(this.root, 1,1, levelHeight)
}