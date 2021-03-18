function TreeNode(dataIn, xin, yin) {
    this.data = dataIn;
    this.left = null;
    this.right = null;
    this.x = xin;
    this.y = yin;
    this.currX = 0;
    this.currY = 0;
    this.radius = 20;
}

var nodeSpeed = 8;
var EP = 0.1;

TreeNode.prototype.addNode = function(newNode) {

    if (newNode.data < this.data) {
        //console.log('left');
        if (this.left == null) {
            this.left = newNode;
            //this.left.x = this.x - 50;
            //this.left.y = this.y + 30;
            return;
        } else {
            this.left.addNode(newNode)
        }
    } else if (newNode.data >= this.data) {
        //console.log('right');
        if (this.right == null) {
            this.right = newNode;
            //this.right.x = this.x + 50;
            //this.right.y = this.y + 30;
            return;
        } else {
            this.right.addNode(newNode)
        }
    }
}

TreeNode.prototype.deleteNode = function(val) {

    if (val < this.data) {
        this.left = this.left.deleteNode(val);
        return this;
    } else if (val > this.data) {
        this.right = this.right.deleteNode(val);
        return this;
    } else {

        if (this.left === null && this.right === null) {
            var node = this;
            node = null;
            return node;
        }

        if (this.left === null) return this.right;
        if (this.right === null) return this.left;

        var p = this.right;

        while (p.left !== null) {
            p = p.left;
        }

        this.data = p.data;
        this.right = this.right.deleteNode(p.data)

        return this;

    }
}

TreeNode.prototype.drawNodes = function(parentNode) {

    if (this.left != null) {
        //window.requestAnimationFrame(() => { this.left.drawNodes(this) })
        this.left.drawNodes(this);
    }

    if (this.right != null) {
        //window.requestAnimationFrame(() => { this.right.drawNodes(this) })
        this.right.drawNodes(this);
    }

    //connectNodes(this, parentNode)
    this.drawSelf(parentNode)

}

TreeNode.prototype.getLevels = function(parent) {
    if (parent === null) {
        return 0;
    }
    return Math.max(this.getLevels(parent.left) + 1, this.getLevels(parent.right) + 1)
}

TreeNode.prototype.updateNode = function(root, level, col, levels) {
    if (root === null) return;
    //console.log(container.clientHeight + '  ' + container.clientWidth);
    var levelHeight = container.clientHeight / levels - 50;

    var realCol = col - Math.pow(2, level - 1) + 1;
    var renameItLaterVar = (container.clientWidth / Math.pow(2, level - 1));
    root.x = renameItLaterVar * (realCol - 1) + renameItLaterVar / 2;
    root.y = 50 + (level * levelHeight - levelHeight / 2)

    root.radius = Math.min(
        Math.min(
            (
                (container.clientWidth / Math.pow(2, levels) * 1.0) / 2
            ) * 0.8,
            (
                (container.clientHeight / levels) / 2) * 0.8
        ), 30);
    root.radius = Math.max(root.radius, 10);

    if (root.x < 0) root.x += 10;
    else if (root.x > container.clientWidth - root.radius) root.x -= 10;

    this.updateNode(root.left, level + 1, col << 1, levels);
    this.updateNode(root.right, level + 1, (col << 1) | 1, levels)
}

//Helper function 
TreeNode.prototype.getLeastNode = function() {
    if (this.left === null) {
        return this;
    } else {
        return this.left.getLeastNode();
    }
}

TreeNode.prototype.drawSelf = function(parentNode) {
    this.goToPos()
    drawNode(this, parentNode)
}

TreeNode.prototype.goToPos = function() {
    var y1 = this.currY;
    var x1 = this.currX;
    var dy = (this.y - this.currY);
    var dx = (this.x - this.currX);
    var slope = dy / dx;

    if (Math.abs(dy) > nodeSpeed || Math.abs(dx) > nodeSpeed) {
        if (Math.abs(dy) > Math.abs(dx)) {

            if (this.y > this.currY)
                this.currY += nodeSpeed;
            else
                this.currY -= nodeSpeed;

            if (slope == 0) {
                this.currX += nodeSpeed;
            }
            else
                this.currX = (this.currY + slope * x1 - y1) / slope;

            if (Math.abs(slope) < EP) {
                if (this.x > this.currX)
                    this.currX += nodeSpeed;
                else
                    this.currX -= nodeSpeed;
            }
            else {
                this.currX = (this.currY + slope * x1 - y1) / slope;
            }
        }
        else {
            if (this.x > this.currX)
                this.currX += nodeSpeed;
            else
                this.currX -= nodeSpeed;

            if (Math.abs(slope) < EP) {
                if (this.y > this.currY)
                    this.currY += nodeSpeed;
                else
                    this.currY -= nodeSpeed;
            }
            else {
                this.currY = (slope * this.currX - slope * x1 + y1);
            }
        }
        return false;
    }
    else {
        return true;
    }
}