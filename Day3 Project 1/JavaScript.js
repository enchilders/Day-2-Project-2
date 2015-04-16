fireBaseUrl = "https://day03database.firebaseio.com/";
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
    var address = document.getElementById("addressId").value;
    var email = document.getElementById("emailId").value;
    var contactObj = new Contact(name, phone, address, email);
    postAjax(contactObj);
}

var postAjax = function (contact) {
    var request = new XMLHttpRequest();
    request.open('POST', fireBaseUrl + '/.json', true);
    request.send(JSON.stringify(contact));
    request.onload = function () {
        if (this.status >= 200 && this.status < 400) {
            console.log("Success" + this.status);
        } else {
            console.log("Error" + this.status)
        }
        displayContacts();
    }

}

var getAjax = function () {
    var request = new XMLHttpRequest();
    request.open('GET', fireBaseUrl + '/.json', true);
    request.onload = function () {
        if (this.status >= 200 && this.status < 400) {
            //success cb
            var response = JSON.parse(this.response);
            for (var prop in response) {
                response[prop].key = prop;
                contacts.push(response[prop]);
            }
            
        }
        else {
            console.error(this.response);
            //error cb
        }
        displayContacts();

    }
    request.send();
}
getAjax();




var displayContacts = function () {
    var elemString=document.getElementById('displayContacts');
    elemString.innerHTML = '';
    for (var i = 0; i < contacts.length; i++) {
        elemString.innerHTML += '<tr>'
        elemString.innerHTML += '<td>' + contacts[i].name + '</td>'
        elemString.innerHTML += '<td>' + contacts[i].phone + '</td>'
        elemString.innerHTML += '<td>' + contacts[i].address + '</td>'
        elemString.innerHTML += '<id>' + contacts[i].email + '</td>'
        elemString.innerHTML += '<td><btn class="well"><em>Name: ' + contacts[i].name + '<br/><em>Phone: ' + contacts[i].phone + '<br/><em>adress: ' + contacts[i].address + '<br/><em>email: ' + contacts[i].email + '<br/><button class="btn btn-warning" onclick=editContact(' + i + ')>Edit</button><button class="btn btn-danger" onclick=removeContact(' + i + ')>Remove</button>';
        elemString.innerHTML += '</tr>';
    }
    //document.getElementById('displayContacts').innerHTML = elemString;
}


var editContact = function (i) {
    contacts[i] = document.getElementById("nameId").value;
    contacts[i] = document.getElementById("phoneId").value;
    contacts[i] = document.getElementById("addressId").value;
    contacts[i] = document.getElementById("emailId").value;
    displayContacts();
}

var removeContact = function (i) {
    var request = new XMLHttpRequest();
    var url = fireBaseUrl + contacts[i].key + '/.json';
    request.open('DELETE', url, true);
    request.onload = function () {
        if (this.status >= 200 && this.status < 400) {
            contacts.splice(i, 1);
            displayContacts();
        }
        else {
            //error cb
        }
    }
    request.send();
}

getAjax();
