namespace s5form {
    let ulContact = document.querySelector('#ulContact') as HTMLUListElement;
    let frmContact = document.querySelector('#frmContact') as HTMLFormElement
    let txtContact = document.querySelector('#txtContact') as HTMLInputElement;


    frmContact.onsubmit = () => {
        let task = txtContact.value;

        let liContact = document.createElement('li');
        liContact.innerHTML = task;

        ulContact.appendChild(liContact);
        txtContact.value = "";
        txtContact.focus();
        return false;
    }
}
