let app = new Vue({
    el: '#app',
    data: {
        menssage: `Voce carregou essa pagina em ${ new Date().toLocaleString()}` 
    }
});

let app2 = new Vue({
    el: "#app-2",
    data: {
        seen: true
    }
});

var app3 = new Vue({
    el: "#app-3",
    data: {
        todos: [
            { text: "aprender js" },
            { text: "aprender html" },
            { text: "aprender css" }
        ]
    }
});

var app4 = new Vue({
    el:'#app-4',
    data: {
        n1: 10,
        n2: 20
    }
})

var app5 = new Vue({
    el: '#app-5',
    data: {
        n1: Math.floor(Math.random()*30),
        n2: Math.floor(Math.random()*30),
        somaResult: 0
    }
})