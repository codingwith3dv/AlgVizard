var linkedlist = new LinkedList();

document.getElementById('insertll').onclick = async() => {
    var value = document.getElementById('inputnumll').value;
    value = parseInt(value)
    linkedlist.add(0, value)
}