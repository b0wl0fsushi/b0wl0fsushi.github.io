namespace s5form {
    let frmContact = document.querySelector('#frmContact') as HTMLFormElement;
    let txtFirstName = document.querySelector('#txtFirstName') as HTMLInputElement;

    frmContact.onsubmit = () => {
        let firstName = txtFirstName.value; 
        alert(`Hello ${firstName}`);
        return false;
    }
}