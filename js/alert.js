document.getElementById("date").valueAsDate = new Date();


function validateForm() {
    var x = document.forms["reserveren"]["naam" && "hoeveel"].value;
    if (x == "") {
        alert("Alle velden moeten correct worden ingevuld");
        return false;
    } else {
        const check = confirm("Wil u deze gegevens versturen?");
        if (check == true) {
            alert("Uw verzoek is verzonden");
        } else {
            alert("Geannuleerd")
            return false;
        }
    }
}