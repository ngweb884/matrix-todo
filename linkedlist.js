class Node {
    constructor(data, quadrantIndex) {
        this.data = data;
        this.quadrantIndex = quadrantIndex;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addTask(data, quadrantIndex) {
        const newNode = new Node(data, quadrantIndex);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    removeTask(data) {
        if (!this.head) {
            return;
        }

        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        let prev = null;
        while (current && current.data !== data) {
            prev = current;
            current = current.next;
        }

        if (current) {
            prev.next = current.next;
        }
    }
}
