const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        var node = new Node(data);
        if(this.length)
        {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }
        else
        {
            this._head = node;
            this._tail = node;
        }
        this.length++;
        return node;
    }

    head() {

        var node = this._head;
        return node.data;
    }

    tail() {
        var node = this._tail;
        return node.data;
    }

    at(index) {
        var node = this._head;
        for(var x= 0;x < index; x++)
        {
            node = node.next;
        }
        return node.data;
    }

    insertAt(index, data) {
        var node = this._head;
        for(var x = 0; x < index; x++)
        {
            node = node.next;
        }
        var _node = new Node(data);
        node.prev.next = _node;
        _node.prev = node.prev;
        node.prev = _node;
        _node.next = node;

        return _node;
    }

    isEmpty() {
        if(this.length > 0) {
            return false;
        }
        else {
            return true;
        }
    }

    clear() {
        var node = this._head;
        while(this.length > 1)
        {
            node.next.prev = null;
            node = node.next;
            this.length--;
        }
        console.log(node);
        this._head = null;
        this._tail = null;
        this.length--;
    }


    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
