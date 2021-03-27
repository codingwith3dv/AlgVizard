var stack = new ArrayStack(9);

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

document.getElementById('pushstack').onclick = async() => {
    var value = document.getElementById('inputnumstack').value;
    value = parseFloat(value);
    if(isNaN(value)) {
        Alert.render('Please enter some value')
        return;
    }
    document.getElementById('inputnumstack').value = ''
    document.getElementById('insertbt').click()
    await stack.push(value)
}

document.getElementById('popstack').onclick = async() => {
    var value = document.getElementById('inputnumstack').value;
    value = parseFloat(value);
    document.getElementById('deletebt').click()
    document.getElementById('popstack').disabled = true; 
    await stack.pop()
    document.getElementById('inputnumstack').value = ''
    document.getElementById('popstack').disabled = false; 
}

document.getElementById('peekstack').onclick = async() => {
    document.getElementById('peekbt').click()
    stack.peek()
}