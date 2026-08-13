export default class Catalogo { //Cria a classe catalogo e essa classe pode ser exportada por outros arquivos j.s
    #listaDoMidias; //declara uma propriedade e essa propriedade ela é privada ou seja ela só pode ser acessada dentro da classe catalogo
    constructor() { //é um metodo especial da classe ela executa automaticamente
        this.#listaDoMidias = [];// this é um objeto atual
        //criar um array vazio ou seja o catalogo começa sem nenhum elemento 
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