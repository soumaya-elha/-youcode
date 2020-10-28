class StackAndQueue {
    constructor() {
        this.pointer = this.holder = this.peak = null;
    }
    add(data) {
        if (!this.peak) {
            this.pointer = this.holder = this.peak = new Element(data);
            return;
        }
        let temp = this.holder;
        this.holder = this.holder.next = new Element(data);
        this.holder.previous = temp;
    }
    dequeue() {
        if (this.pointer && this.pointer === this.peak) {
            this.pointer = this.peak.next;
        }
        if (this.peak && this.peak.next) {
            this.peak = this.peak.next;
            this.peak.previous = null;
        } else {
            this.pointer = this.holder = this.peak = null;
        }
    }
    pop() {
        if (this.holder && this.holder === this.pointer) {
            this.pointer = this.holder.previous;
        }
        if (this.holder && this.holder.previous) {
            this.holder = this.holder.previous;
            this.holder.next = null;
        } else {
            this.peak = this.pointer = null;
        }
    }
    next() {
        if (this.pointer && this.pointer.next) {
            this.pointer = this.pointer.next;
        }
    }
    previous() {
        if (this.pointer && this.pointer.previous) {
            this.pointer = this.pointer.previous;
        }
    }
    show() {
        if (this.pointer) {
            return this.pointer.data;
        }
        return null;
    }
}
class Element {
    constructor(data, next, previous) {
        this.data = data;
        this.next = next || null;
        this.previous = previous || null;
    }
}
let list = new StackAndQueue();
let list2 = new StackAndQueue();



function add(type) {
    if (type === "image") {
        list.add({
            url: document.getElementById("url-input").value,
            title: document.getElementById("title-input").value,
            disc: document.getElementById("disc-input").value
        });
        show(type);
    } else if (type === "audio") {
        list2.add({
            url: document.getElementById("url-audio").value,
            title: document.getElementById("title-audio").value,
            album: document.getElementById("album-audio").value,
            genre: document.getElementById("album-genre").value,
        });
        show(type);
    }
}


function show(type) {
    if (type === "image") {
        if (list.show()) {
            document.getElementById("img").src = list.show().url || "NOImageAvailable.png";
            document.getElementById("title").innerHTML = list.show().title || "";
            document.getElementById("disc").innerHTML = list.show().disc || "";
        } else {
            document.getElementById("img").src = "NOImageAvailable.png";
            document.getElementById("title").innerHTML = "";
            document.getElementById("disc").innerHTML = "";
        }
    }
    if (type === "audio") {
        if (list2.show()) {
            document.getElementById("audio").src = list2.show().url || "";
            document.getElementById("audio-info").innerHTML = (list2.show().title || "No title") + " - " + (list2.show().album || "No album") + " - " +(list2.show().genre || "No genre");
            document.getElementById("audio").play();
        } else {
            document.getElementById("audio").src = "";
            document.getElementById("audio-info").innerHTML = "No title - No album - No genre";
        }
    }
}
album-genre
show("audio");
document.getElementById("audio").pause();

function next(type) {
    type === "image" ? list.next() : list2.next();
    show(type);
}

function previous(type) {
    type === "image" ? list.previous() : list2.previous();
    show(type);
}

function pop(type) {
    type === "image" ? list.pop() : list2.pop();
    show(type);
}

function dequeue(type) {
    type === "image" ? list.dequeue() : list2.dequeue();
    show(type);
}