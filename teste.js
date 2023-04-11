var lista = [
    { nome: "Ana", sim: true },
    { nome: "Bruno", sim: false },
    { nome: "Carla", sim: true },
    { nome: "Daniel", sim: false },
    { nome: "Eduarda", sim: true },
    { nome: "Fabiana", sim: false },
    { nome: "Gustavo", sim: true },
    { nome: "Helena", sim: false },
    { nome: "Isabela", sim: true },
    { nome: "José", sim: false },
    { nome: "Karina", sim: true },
    { nome: "Lucas", sim: false },
    { nome: "Mariana", sim: true },
    { nome: "Nathalia", sim: false },
    { nome: "Otávio", sim: true },
    { nome: "Paula", sim: false },
    { nome: "Queila", sim: true },
    { nome: "Rafael", sim: false },
    { nome: "Sofia", sim: true },
    { nome: "Thiago", sim: false }
];

var listaOrdenada = lista;

function atualizarLista() {
var listaFiltrada = listaOrdenada.filter(function(item) {
    if (filtrarSim && !item.sim) {
        return false;
    }
    if (filtrarNao && item.sim) {
        return false;
    }
    return true;
});

if (ordenarPorNome) {
    listaFiltrada.sort(function(a, b) {
        if (a.nome < b.nome) {
            return -1;
        }
        if (a.nome > b.nome) {
            return 1;
        }
        return 0;
    });
}

var listaHtml = "";
for (var i = 0; i < listaFiltrada.length && i < 100; i++) {
    listaHtml += "<li>" + listaFiltrada[i].nome + "</li>";
}

document.getElementById("lista").innerHTML = listaHtml;
}

var filtrarSim = false;
var filtrarNao = false;
var ordenarPorNome = false;

document.getElementById("filtrarSim").addEventListener("click", function() {
filtrarSim = !filtrarSim;
atualizarLista();
});

document.getElementById("filtrarNao").addEventListener("click", function() {
filtrarNao = !filtrarNao;
atualizarLista();
});

document.getElementById("ordenarPorNome").addEventListener("click", function() {
ordenarPorNome = !ordenarPorNome;
atualizarLista();
});

atualizarLista();
