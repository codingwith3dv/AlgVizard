function LinkedList(){
    this.head = null;
}

LinkedList.prototype.insertAtBeginning = function(data) {
    var node = new LinkNode(data);
    node.next = this.head;
    
    this.head = node;
}

LinkedList.prototype.insertAtEnd = function(data) {
    var node = new LinkNode(data)
    if(this.head === null) {
        this.head = node;
        return;
    }
    
    node.next = null;
    
    var lastNode = this.head;
    while(lastNode.next !== null) {
        lastNode = lastNode.next;
    }
    lastNode.next = node;
    return;
}

LinkedList.prototype.printAll = function() {
    var node = this.head;
    var result = ''
    while(node !== null) {
        result = result + (node.data + '->');
        node = node.next;
    }
    console.log(result);
}