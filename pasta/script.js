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