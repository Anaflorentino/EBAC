
// Classe de abstração
function Instrumentos(nome, tipo) {
    this.nome = nome;
    this.tipo = tipo;

    this.tocar = function() {
        console.log(`${this.nome} estão tocando`);
    }    
}

// Heranças
function Violao(nome, tipo, cordas) {
    Instrumentos.call(this, nome, tipo); // Corrigido para passar 'tipo' como segundo parâmetro
    this.cordas = cordas;

    this.tocar = function() {
        console.log(`${this.nome} está tocando a base`);
    }
}

function Bateria(nome, tipo, pecas) {
    Instrumentos.call(this, nome, tipo, pecas); {
        this.pecas = pecas;

        this.tocar = function() {
            console.log(`${this.nome} está tocando o ritmo`);
        }
    }
}

function Piano(nome, tipo, teclas) {
    Instrumentos.call(this, nome, tipo);
    this.teclas = teclas;

    this.tocar = function() {
        console.log(`${this.nome} está tocando o solo`);
    }
}

function Baixo(nome, tipo, numCordas) {
    Instrumentos.call(this, nome, tipo); // Corrigido 'instrumentos' para 'Instrumentos'
    this.numCordas = numCordas;

    this.tocar = function () {
        console.log(`${this.nome} está tocando com groove`);
    }
}

// Instâncias
const meuInstrumento = new Instrumentos("Os instrumentos");
const meuBaixo = new Baixo("Baixo", "Corda", 4);
const meuViolao = new Violao("Violão", "Corda", 6);
const meuPiano = new Piano("Piano", "Teclas", 88);
const minhaBateria = new Bateria("Bateria", "Percussão", 7);

// Métodos
meuInstrumento.tocar();
meuViolao.tocar();
meuBaixo.tocar();
meuPiano.tocar();
minhaBateria.tocar();