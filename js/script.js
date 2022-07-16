function boton(event) {
    event.preventDefault();

    var fnombre = document.getElementById('fname').value;
    var snombre = document.getElementById('fname2').value;

    alert(fnombre + ' ' + snombre + ' - ' + '¡Gracias por registrarte!');
}
