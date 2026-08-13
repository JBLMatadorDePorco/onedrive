export default class Catalogo {
    #listaDoMidias;
    constructor() {
        this.#listaDoMidias = [];
    }
    adicionar(midia) {
        this.#listaDoMidias.push(midia);
        this.renderizar();
    }
}