"use strict";
//this class does not change
class Contact {
    //constructor defines state (data) with parameters
    constructor (name, email, relation, phone) {
        this.name = name
        this.email = email
        this.relation = relation
        this.phone = phone
    }
}
//this.contacts is a property of AddressBook class
class AddressBook {
    constructor () {
    this.contacts = []
    }

//add info method
    add(info) {
    //this.contacts.push means we're adding info into 
    // the this.contacts array with push method
    //(info) is just a placeholder?
    this.contacts.push(info)
    }
    deleteAt(index) {
        console.log(index)
    }    
    //while loop through this.contacts array
    print() {
        for (let i = 0; i < this.contacts.length; i++){
            console.log(this.contacts[i]);
        }
    }
}
//any time book is used we're calling class Address Book
const book = new AddressBook();

while (true) {
const choice = prompt("would you like to add, print, delete, or quit")
if (choice === 'add'){
    const name =  prompt ("Enter name")
    const email =  prompt ("Enter email")
    const relation =  prompt ("Enter relation")
    const phone =  prompt ("Enter phone")

//calls add method which then pushes info to address book
//this.contacts array
book.add(new Contact(name, email, relation, phone))
}
//calls delete method
else if (choice === 'delete'){
book.deleteAt(2);
}
//logs this.contacts arrays from print method
else if (choice === 'print') {
    book.print()
}
else if (choice === 'quit') {
    console.log("bye bye");
    break;
}
}
