var linkedlist = new LinkedList();

//linkedlist.add(0, 1)
linkedlist.addNode(10)
function openTab(evt, name) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(name).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById('appendll').onclick = async() => {
    var value = document.getElementById('inputnumll').value;
    value = parseFloat(value)
    if (isNaN(value)) {
        Alert.render('Please enter some value')
        return;
    }
    document.getElementById('insertbt').click()
    document.getElementById('inputnumll').value = ''
    linkedlist.addNode(value)
}

document.getElementById('deletell').onclick = async() => {
    var value = document.getElementById('inputnumll').value;
    value = parseFloat(value)
    if (isNaN(value)) {
        Alert.render('Please enter some value')
        return;
    }
    document.getElementById('deletebt').click()
    document.getElementById('inputnumll').value = ''
    linkedlist.deleteNode(value)
}

document.getElementById('searchll').onclick = async() => {
    var value = document.getElementById('inputnumll').value;
    value = parseFloat(value);
    document.getElementById('searchbt').click()
    if (isNaN(value)) {
        Alert.render('Please enter some value')
        return;
    }
    document.getElementById('inputnumll').value = ''
    linkedlist.searchNode(value)
}

document.getElementById('transversell').onclick = async() => {
    document.getElementById('traversebt').click()
    linkedlist.transverse()
}