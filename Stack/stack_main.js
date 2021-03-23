var stack = new ArrayStack(9);

document.getElementById('pushstack').onclick = async() => {
    var value = document.getElementById('inputnumstack').value;
    value = parseFloat(value);
    await stack.push(value)
}

document.getElementById('popstack').onclick = async() => {
    var value = document.getElementById('inputnumstack').value;
    value = parseFloat(value);
    document.getElementById('popstack').disabled = true; 
    await stack.pop(value)
    document.getElementById('popstack').disabled = false; 
}