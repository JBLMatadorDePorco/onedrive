export default class Catalogo {
    #listaDoMidias;
    constructor() {
        this.#listaDoMidias = [];
    }
    adicionar(midia) {
        this.#listaDoMidias.push(midia);
        this.renderizar();
    }

    renderizar() {
        const container = document.getElementeById("containerCatalogo");
        container.innerHTML = "";
        this.#listaDoMidias..forEach(midia => {

            container.innerHTML += midia.obterDadosHTML();
        });
    }
}