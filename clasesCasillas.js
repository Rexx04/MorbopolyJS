class casilla {
    constructor(posicion, titulo, texto, textoExplanatorio, color) {
     this.posicion = posicion;
     this.titulo = titulo;
    this.texto = texto;
    this.textoExplanatorio = textoExplanatorio;
    this.color = color;
    }
}

class casillaNumerada extends casilla {
    constructor(posicion, titulo, texto, textoExplanatorio, color, numero, textoCupon) {
        super(posicion, titulo, texto, textoExplanatorio, color);
        this.numero = numero;
        this.textoCupon = textoCupon;
    }
}