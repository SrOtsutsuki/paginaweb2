function crearCookie(clave, valor, diasexpiracion) {
    var d = new Date();
    d.setTime(d.getTime() + (diasexpiracion * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = clave + "=" + valor + "; " + expires;
}

function obtenerCookie(clave) {
    var name = clave + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function comprobarCookie(clave) {
    var clave = obtenerCookie(clave);
    if (clave != "") {
        return true
        // La cookie existe.
    } else {
        return false
        // La cookie no existe.
    }
}

$(document).ready(function () {
    $(function () {

        if (!comprobarCookie("sesion")) {
            $(".cookies").css("display", "inline");
        }




        $("#btnCookie").click(function () {
            console.log("cookie creada");
            crearCookie("sesion", "true", "3");

            $(".cookies").slideToggle("slow");
        });





    });


});

