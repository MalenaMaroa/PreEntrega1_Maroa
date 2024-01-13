alert("Bienvenidos a la tienda de electrodomésticos!");

let consulta = confirm("¿Te puedo ayudar a buscar un electrodoméstico?");

if (consulta === true) {
    let seguirBuscando = true;
    while (seguirBuscando) { 
        let categoria = prompt("¿Qué tipo de electrodoméstico querés comprar? Digita A para lavarropas, B para heladeras, C para microondas.");
        let electrodomestico;
        let marca;

        switch (categoria.toUpperCase()) {
            case 'A':
                electrodomestico = "lavarropas";
                marca = prompt("¿Qué marca de lavarropas buscas? Tenemos Samsung, LG, Philips.");
                break;//salir del bucle en el caso que cumpla 
            case 'B':
                electrodomestico = "heladera";
                marca = prompt("¿Qué marca de heladera buscas? Tenemos Gafa, Philips, Samsung.");
                break;
            case 'C':
                electrodomestico = "microondas";
                marca = prompt("¿Qué marca de microondas buscas? Tenemos Toshiba, BGH, Philips.");
                break;
            default:
                alert("Opción no válida. Por favor elige A para lavarropas, B para heladeras o C para microondas.");
                continue;
        }


        alert("Tenemos " + electrodomestico + " de la marca " + marca);

        let comprar = confirm("¿Querés comprar este " + electrodomestico + " de marca " + marca + "?");
        if (comprar) {
            alert("Gracias por tu compra");
            seguirBuscando = false;
        } else {
            seguirBuscando = confirm("¿Querés seguir buscando otros electrodomésticos?");
        }
    }
} else {
    alert("Gracias por visitar nuestra tienda de electrodomésticos. ¡Hasta luego!");
}
