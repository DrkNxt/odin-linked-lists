import { LinkedList } from "./script.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.insertAt("test", 2);
list.append("turtle");
list.prepend("penguin");
list.removeAt(4);

console.log("\n\nLinkedList string:");
console.log(list.toString());
console.log("\n\nLinkedList size:");
console.log(list.size);
console.log("\n\nLinkedList head:");
console.log(list.head);
console.log("\n\nLinkedList tail:");
console.log(list.tail);
console.log("\n\n");
