function BST() {
    this.root = null;
}

BST.prototype.add = function(data) {
    var node = new TreeNode(data);

    if (this.root == null) {
        this.root = node;
    } else {
        this.root.addNode(node)
    }
}

BST.prototype.delete = function(data) {
    if (this.root === null) return;
    this.root = this.root.deleteNode(data);
}

BST.prototype.traverse = function() {
    if(this.root === null) return;
    result = 'Values are: '
    this.root.traverse()
}

BST.prototype.draw = function() {
    container.innerHTML = ''
    if (this.root == null) return;
    this.root.drawNodes(this.root)
}

BST.prototype.update = function() {
    if (this.root === null) return;
    var levels = this.root.getLevels(this.root)

    this.root.updateNode(this.root, 1, 1, levels)
}