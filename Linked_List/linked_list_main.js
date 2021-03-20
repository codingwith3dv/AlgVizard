var linkedlist = new LinkedList();

//linkedlist.add(0, 1)

document.getElementById('appendll').onclick = async() => {
    var value = document.getElementById('inputnumll').value;
    value = parseInt(value)
    linkedlist.addNode(value)
}