var app = new Vue({
    el: '#app',
    data: {
        nome: 'lucas'
    },
    computed: {
        nomeInvertido: function(){
            return this.nome.split('').reverse().join('')
        }
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
        numero: 5
    },
    computed: {
        aleatorio: function(){
            let al = Math.floor(Math.random()*100);
            return this.numero+" + "+al+" = "+(this.numero+al);
        }
    },
    methods: {
        aleatorioFuncao: function(){
            let al = Math.floor(Math.random()*100);
            return this.numero+" + "+al+" = "+(this.numero+al);
        }
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        conta: '',
        aviso: '',
        resultado: '',
        timer: null
    },
    methods: {
        fazerConta: function(){
            this.aviso = '';

            this.resultado = eval(this.conta)
        }
    },
    watch: {
        conta: function(){
            this.aviso = 'Digitando...'

            if(this.timer != null){
                clearTimeout(this.timer)
            }

            this.timer = setTimeout(this.fazerConta, 600)
        }
    }
})