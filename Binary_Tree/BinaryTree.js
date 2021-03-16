function BST(){
    this.root = null;
}

BST.prototype.add = function(data){
    var node = new TreeNode(data);
    if(this.root == null){
        this.root = node;
        this.root.x = window.innerWidth/2;
        this.root.y = 50;
    }else{
        this.root.addNode(node)
    }
}

BST.prototype.transverse = async function(){
    container.innerHTML = ''
    await this.root.visit(this.root) 
}