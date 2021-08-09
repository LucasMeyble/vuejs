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

var app6 = new Vue({
    el: '#app-6',
    data: {
        nome: 'lucas',
        idade: 21
    },
    methods: {
        mostrar: (nome, idade) => {
            const txt = `olá meu nom é ${nome} e eu tenho ${idade} anos`;
            return txt;
        }
    }
})

function bandeira(pais) {
    return '<img src="paises/'+pais+'.png" />'
}

var app7 = new Vue({
    el: '#app-7',
    data:{
        pais: '',
        argentina: bandeira('argentina'),
        brazil: bandeira('brazil'),
        china: bandeira('china'),
        uk: bandeira('uk'),
        usa: bandeira('usa')
    }
})

var app8 = new Vue({
    el: '#app-8',
    data:{
        pais: '',
        argentina: bandeira('argentina'),
        brazil: bandeira('brazil'),
        china: bandeira('china'),
        uk: bandeira('uk'),
        usa: bandeira('usa')
    },
    methods: {
        paises: function() {
            return [
                {bandeira:this.argentina, continente: 'America do sul'},
                {bandeira:this.brazil, continente: 'America do sul'},
                {bandeira: this.china, continente: 'Asia'},
                {bandeira: this.uk, continente: 'Europa'},
                {bandeira: this.usa, continente: 'America do norte'}
            ];
        }
    }
})

app7.pais = 'brazil';