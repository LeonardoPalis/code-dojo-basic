const nome = "Leonardo";
const numero = 123;
const verdeiro = true;
const nao_definido = undefined;
const nulo = null;

const frutas = ["melancia", "morango", "uva", "maça"];

const usuarioJoao = {
    nome: "Joao",
    idade: 17,
    cidade: "BH",
    dados_adicionais: {
        tipo_sanguinio: "A+",
    }
}

const usuarioMaria = {
    nome: "Maria",
    idade: 12,
    cidade: "SO"
}

const clienteJoao = {
    suco_preferido: frutas[0]
}

const clienteMaria = {
    dados: usuarioMaria,
    suco_preferido: frutas[0]
}

const clientes = [clienteJoao, clienteMaria]

console.log("Clientes: ", clientes);

if (clientes[0] && clientes[0] && clientes[0].dados.nome === "Joao") console.log("É o João")

if (frutas[2] === "uva") console.log("Vou fazer um suco de uva!!");


console.log("fim.");