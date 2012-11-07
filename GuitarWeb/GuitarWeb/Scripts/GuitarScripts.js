function ShowAlert(msg) {
    alert(msg);
}

function HideDiv(divId) {
    document.getElementById(divId).style.visibility = "hidden";
}

function ShowDiv(divId) {
    document.getElementById(divId).style.visibility = "visible";
}

function GetGuitar(guitarId) {

    $.post("GetGuitar", { guitarId: guitarId }, function (guitar) {
        alert(guitar.RegNumber + " " + guitar.Model);
    });
}

function DeleteGuitar(guitarId) {

    $.post("Delete", { guitarId: guitarId }, function (guitars) {
        for (var i = 0; i < guitars.length; i++) {
            alert("Guitar with id " + guitars[i].RegNumber + " is not deleted");
        }
    });
  }
