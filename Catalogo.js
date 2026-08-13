export default class Catalogo { //Cria a classe catalogo e essa classe pode ser exportada por outros arquivos j.s
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

    static filtrarPorGenero(catalogoInstanciado, generoAlvo) {
    return catalogoInstanciado.#listaDoMidias.filter(
        m => m.genero.toLowerCase() === generoA1
    );
}
}