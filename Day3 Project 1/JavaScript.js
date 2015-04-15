fireBaseUrl = "https://mydatabaseday2.firebaseio.com/.json";
var contacts = [];
var Contact = function (name, phone, address, email) {
    this.name = name;
    this.phone = phone;
    this.address = address;
    this.email = email;
}

var createContact = function () {
    var name = document.getElementById("nameId").value;
    var phone = document.getElementById("phoneId").value;
    var address = document.getElementById("emailId").value;
    var email = document.getElementById("emailId").value;
    var contactObj = new Contact(name, phone, address, email);
    postAjax(contactObj);
}

var postAjax = function (contact) {
    var request = new XMLHttpRequest();
    request.open('POST', fireBaseUrl, true);
    request.send(JSON.stringify(contact));
    request.onload = function () {
        if (this.status >= 200 && this.status < 400) {
            console.log("Success" + this.status);
        } else {
            console.log("Error" + this.status)
        }
    }

}
/*
var getAjax = function () {
    var request = new XMLHttpRequest();
    request.open('GET', fireBaseUrl, true);
    request.send();
    request.onload = function () {
        var response = JSON.parse(this.response);
        console.log("response " + response);
        for (var prop in response) {
            contacts.push(response[prop]);
            console.log("response[prop]: " + response[prop]);
        }
        console.log("contacts: "+ contacts);
    }
    displayContacts();
}

var deleteAjax = function () {
    var request = new XMLHttpRequest();
    request.open('DELETE', fireBaseUrl, true);
    request.send();
}

var displayContacts = function () {
    var elem = document.getElementById("displayContacts");
    elem.innerHTML = '';
    for (var i = 0; i < contacts.length; i++) {
        elem.innnerHTML += '<div class="well"><em>Name: ' + contacts[i].name + '<br/><em>Phone: ' + contacts[i].phone + '<br/><em>adress: ' + contacts[i].address + '<br/><em>email: ' + contacts[i].email + '<br/><button class="btn btn-warning" onlick=editContact(' + i + ')>Edit</button><button class="btn btn-danger" onclick=removeContact(' + i + ')>Remove</button>';
    }
}


var editContact = function (i) {
    contacts[i] = document.getElementById("nameId").value;
    contacts[i] = document.getElementById("phoneId").value;
    contacts[i] = document.getElementById("addressId").value;
    contacts[i] = document.getElementById("emailId").value;
    displayContacts();
}

var deleteContact = function (i) {
    //contacts.splice(i, 1);
    deleteAjax();
    displayContacts();
}

getAjax();
*/