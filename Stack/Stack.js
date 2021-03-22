function ArrayStack(capacity) {
    this.array = new Array(capacity);
    this.counter = -1;
}

ArrayStack.prototype.push = function(value) {
    if (this.counter + 1 < this.array.length) {
        this.array[++this.counter] = value;
    }
}

ArrayStack.prototype.pop = function() {
    if (this.counter == -1) return 0;
    return this.array[this.counter--];
}