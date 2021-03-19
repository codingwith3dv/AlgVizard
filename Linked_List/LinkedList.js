function LinkedList(){
    this.head = null;
}

LinkedList.prototype.insertAtBeginning = function(data) {
    var node = new LinkNode(data);
    node.next = this.head;
    
    this.head = node;
}

LinkedList.prototype.printAll = function() {
    var node = this.head;
    while(node !== null) {
        console.log(node.data);
        node = node.next;
    }
}