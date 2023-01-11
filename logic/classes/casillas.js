class casilla {
    constructor(titulo, subtitulo, explicacion, posicion, color)  {
        this.titulo = titulo;
        this.subtitulo = subtitulo;
        this.explicacion = explicacion;
        this.posicion = posicion;
        this.color = color;
    }
}

class casillaNumerada extends casilla {
    constructor(titulo, subtitulo, explicacion, posicion, color, cupon) {
        super(titulo, subtitulo, explicacion, posicion, color);
        this.cupon = cupon;
    }
}