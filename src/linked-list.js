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
        return this;
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
        if(this.length > 0) {
            for (var x = 0; x < index; x++) {
                node = node.next;
            }
            var _node = new Node(data);
            node.prev.next = _node;
            _node.prev = node.prev;
            node.prev = _node;
            _node.next = node;
            return this._node;
        }
        else {
            node = new Node(data);
            this._head = node;
            this._tail = node;
            return this.node;
        }
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
        while(this.length > 1) {

            if(node != null) {
                this._head.next.prev = null;
                this._head = this._head.next;
                this.data = null;
                this.length--;
            }
        }
        node = this._head;
        node.data = null;
        this.length--;
        return this;
    }


    deleteAt(index) {
        var node = this._head;
        if(node.next) {
            for (var x = 0; x < index; x++) {
                node = node.next;
            }
            node.next.prev = node.prev;
            node.prev.next = node.next;
            node = null;
        }
        else
            node = null;
        return this;
    }

    reverse() {
        var node = this._head;
        var str;
        var strall;
        var cnt = this.length;
        if(cnt > 1) {
            for (var y = 0; y < cnt - 1; y++) {
                node = this._head;
                for (var x = 0; x < this.length - 1; x++) {

                    str = node.data;
                    node = node.next;
                    strall = node.data;
                    node.data = str;
                    node = node.prev;
                    node.data = strall;
                    node = node.next;
                }
                this.length--;
            }
        }
        else {
        }
       return this;
    }

    indexOf(data) {
        var node = this._head;
        var cnt = 0;
        while(node.data != data)
        {
            if(node.next != null) {
                node = node.next;
                cnt++;
            }
            else
                break;
        }
        if(node.data != data) {
            return -1;
        }
        return cnt;
    }
}

module.exports = LinkedList;
