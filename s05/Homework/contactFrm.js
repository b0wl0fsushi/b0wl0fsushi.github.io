var s5form;
(function (s5form) {
    var ulContact = document.querySelector('#ulContact');
    var frmContact = document.querySelector('#frmContact');
    var txtContact = document.querySelector('#txtContact');
    frmContact.onsubmit = function () {
        var task = txtContact.value;
        var liContact = document.createElement('li');
        liContact.innerHTML = task;
        ulContact.appendChild(liContact);
        txtContact.value = "";
        txtContact.focus();
        return false;
    };
})(s5form || (s5form = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdEZybS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnRhY3RGcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBVSxNQUFNLENBaUJmO0FBakJELFdBQVUsTUFBTTtJQUNaLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFxQixDQUFDO0lBQ3pFLElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFvQixDQUFBO0lBQ3pFLElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFxQixDQUFDO0lBRzNFLFVBQVUsQ0FBQyxRQUFRLEdBQUc7UUFDbEIsSUFBSSxJQUFJLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUU1QixJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBRTNCLFNBQVMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakMsVUFBVSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDdEIsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ25CLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUMsQ0FBQTtBQUNMLENBQUMsRUFqQlMsTUFBTSxLQUFOLE1BQU0sUUFpQmYifQ==