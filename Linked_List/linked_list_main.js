var linkedlist = new LinkedList();

document.getElementById('appendll').onclick = async() => {
    var value = document.getElementById('inputnumll').value;
    value = parseInt(value)
    linkedlist.add(nodes.length, value)
}