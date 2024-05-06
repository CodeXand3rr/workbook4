"use strict";

let myInfo = {
  name: "Xander",
  address: "0505 Dover Street Market",
  city: "manhattan",
  state: "new york",
  zip: "10050",
};



function printContact(contact) {
  console.log(contact.name);
  console.log(contact.address);
 
  console.log(contact.city + ",", contact.state, contact.zip);
}

function printContact1(contact) {
    console.log(`
    ${contact.name}
    ${contact.address}
    ${contact.city}, ${contact.state} ${contact.zip}
    `);
  }
 
  printContact1(myInfo);