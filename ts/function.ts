let personsData = [];

let tsDOM = {
    data: {
        fname: <HTMLInputElement>document.getElementById('fNameInput'),
        lname: <HTMLInputElement>document.getElementById('lNameInput'),
        email: <HTMLInputElement>document.getElementById('emailInput'),
        phone: <HTMLInputElement>document.getElementById('phoneInput'),
        city:  <HTMLInputElement>document.getElementById('cityInput'),
        message: <HTMLInputElement>document.getElementById('messageInput')
    },
    btn: {
        addBtn: document.getElementById('addPerson'),
        showData: document.getElementById('showData')
    },
    personData: document.getElementById('personData')
}

let tsFunc = {
    showData: () => {
        let parentDiv = tsDOM.personData;
        parentDiv.innerHTML = '';

        let node = document.createElement("div");
        let nodeHeader = document.createElement("h3");
        let nodeHeaderText = document.createTextNode("Person Data");
        nodeHeader.appendChild(nodeHeaderText);

        let fullname, email, message;
        personData.forEach(x => {
            fullname = `${x.firstname} ${x.lastname}`, email = x.email, message = x.message;
            let personData = document.createElement('p');
            let personDataText = document.createTextNode(`Full Name: ${fullname} Email: ${email} Message: ${message}`);
            personData.appendChild(personDataText);
            node.appendChild(personData);
        })
        parentDiv.appendChild(node);

    },
    clearFields: () => {
        tsDOM.data.fname.value = "";
        tsDOM.data.lname.value = "";
        tsDOM.data.email.value = "";
        tsDOM.data.message.value = "";
    },
    addData: () => {
        if (tsDOM.data.fname.value == '' || tsDOM.data.lname.value == '' || tsDOM.data.email.value == '' || tsDOM.data.phone.value == '' || tsDOM.data.city.value == '' || tsDOM.data.message.value == '') {
            tsFunc.alertInput();
            tsFunc.checkFields();
        } else {
            personData.push({ firstname: tsDOM.data.fname.value, lastname: tsDOM.data.lname.value, email: tsDOM.data.email.value, phone: tsDOM.data.phone.value, city: tsDOM.data.city.value, message: tsDOM.data.message.value });
            tsFunc.clearFields();
            tsFunc.finalizeFields();
        }
    },
    checkFields: () => {
        Object.values(tsDOM.data).forEach(data => {
            if (data.value == "") {
                data.style.borderColor = "red"
            } else {
                data.style.borderColor = "green"
            }
        });
    },
    finalizeFields: () => {
        Object.values=(tsDOM.data).forEach(data => {
            data.style.borderColor = "transparent"
        });
    },
    alertInput: () => {
        let arrayDatas:any = [];
        Object.values(tsDOM.data).forEach(x => {
            if (x.value == "") {
                arrayDatas.push(`Empty Field ${x.title}`);
            }
        });
        alert(arrayDatas.join(': \n'));
    },
}

tsDOM.btn.addBtn.addEventListener('click', tsFunc.addData);
tsDOM.btn.showData.addEventListener('click', tsFunc.showData); 