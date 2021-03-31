var container = document.getElementById('stackContainer');
var nodes = document.getElementsByClassName('element')

function ArrayStack(capacity) {
    this.array = new Array(capacity);
    this.counter = -1;
}

ArrayStack.prototype.push = async function(value) {
    if (this.counter + 1 < this.array.length) {
        this.array[++this.counter] = value;

        var newStackElement = document.createElement('div');
        newStackElement.classList.add('element');

        var valueNode = document.createTextNode(value)

        var valueNodeContainer = document.createElement('div')
        valueNodeContainer.classList.add('elementValue')
        valueNodeContainer.appendChild(valueNode)

        newStackElement.appendChild(valueNodeContainer)

        container.insertBefore(newStackElement, container.firstChild);

        //await this.animateBeforeInsert()
        await this.insertNode(newStackElement);
    }else{
        Alert.render('Stack size exceeded')
    }
}

ArrayStack.prototype.pop = async function() {
    if (this.counter == -1) return 0;
    var res = this.array[this.counter--];

    var nodeToDelete = container.firstChild;
    await this.deleteNode(nodeToDelete)

    return res;
}

ArrayStack.prototype.peek = async function() {
    if (this.counter == -1) {
        Alert.render('Nothing here')
        return;
    }
    Alert.render(this.array[this.counter] + '');
}

ArrayStack.prototype.insertNode = function(node) {
    return new Promise(resolve => {
        node.style.animation = 'slide 0.5s ease';

        setTimeout(() => {
            node.style.animation = null;
            resolve();
        }, 500)
    })
}

ArrayStack.prototype.deleteNode = function(nodeToDelete) {
    return new Promise(resolve => {
        nodeToDelete.style.animation = 'slideOut 0.5s ease'

        setTimeout(() => {
            container.removeChild(nodeToDelete)
            resolve()
        }, 500)
    })
}

ArrayStack.prototype.animateBeforeInsert = function() {
    return new Promise(resolve => {
        if(container.hasChildNodes()) {
            let children = container.childNodes;
            for(var k = 1; k < children.length; k++){
                
                children[k].style.animation = 'moveDown .5s ease';
                
                setTimeout(() => {
                    children[k].style.animation = null;
                }, 500)
                
            }
        }
        setTimeout(() => resolve(), 500)
    })
}