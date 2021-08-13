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

var app4 = new Vue({
    el: '#app-4',
    data: {
        primeiroNome: '',
        segundoNome: ''
    },
    computed: {
        nomeCompleto: {
            get: function() {
                return this.primeiroNome+' '+this.segundoNome
            },
            set: function(novoValor) {
                let nomes = novoValor.split(' ');
                this.primeiroNome = nomes[0];
                this.segundoNome = nomes[1]
            }
        }
    }
})

var app5 = new Vue({
    el: '#app-5',
    data: {
        errorMsg: '',
        msgDivClass: { 
            active: false, 
            sucess: false,
            error: false 
        }
    },
    methods: {
        showSucess: function(msg){
            this.msgDivClass.active = true;
            this.msgDivClass.sucess = true;
            this.msgDivClass.error = false;
            this.errorMsg = msg
        },
        showError: function(msg){
            this.msgDivClass.active = true;
            this.msgDivClass.sucess = false;
            this.msgDivClass.error = true;
            this.errorMsg = msg
        }
    }
})

var app6 = new Vue({
    el: '#app-6',
    data: {
        errorMsg: '',
        errorType: ''
    },
    computed: {
        msgDivClass: function (){
            let r = {
                active: false,
                sucess: false,
                error: false
            } 

            if(this.errorMsg != ''){
                r.active = true;
            }

            switch(this.errorType) {
                case 'sucess': 
                    r.sucess = true;
                    r.error = false;
                    break;
                case 'error':
                    r.sucess = false;
                    r.error = true;
                    break;
            }
            return r;
        }
    },
    methods: {
        showSucess: function(msg){
            this.errorMsg = msg;
            this.errorType = 'sucess';
        },
        showError: function(msg){
            this.errorMsg = msg;
            this.errorType = 'error';
        }
    }
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        aviso: 'Esse aqui é um aviso',
        avisoBase: {
            border: '2px solid #000',
            fontSize: '20px',
            padding: '10px'
        },
        avisoError: {
            backgroundColor: '#FF0000',
            color: '#FFF',
            fontSize: '30px'
        }
    }
})

var app8 = new Vue({
    el: '#app-8',
    data:{
        ganhou: true
    }
})

var app9 = new Vue({
    el: '#app-9',
    data: {
        object: {
            nome: 'lucas',
            idade: 21,
            tamanho: 1.90,
            profissao: 'programador'
        }
    }
})

var app10 = new Vue({
    el: '#app-10',
    data: {
        lista: [
            'lucas',
            'matheus',
            'caio',
            'icaro'
        ]
    }
})

var app11 = new Vue({
    el: '#app-11',
    data: {
        object: {
            nome: 'lucas',
            idade: 21
        }
    }
})

var app12 = new Vue({
    el: '#app-12',
    data: {
        busca: '',
        nomes: [
            'lucas',
            'matheus',
            'caio',
            'icaro'
        ],
    },
    computed: {
        nomesFiltrados: function(){
            return this.nomes.filter(function(nome){
                if(this.busca != ''){
                    if(nome.toLowerCase().indexOf(this.busca.toLowerCase()) > -1){
                        return true
                    }else{
                        return false
                    }
                }else{
                    return true
                }
            }, this);
        }
    }
})

var app13 = new Vue({
    el: '#app-13',
    data: {
        conta: 0
    },
    methods: {
        submit: function(){
            this.conta++;
        }
    }
    
})

var app14 = new Vue({
    el: '#app-14',
    data: {
        conta: 0
    },
    methods: {
        clica: function(){
            this.conta++;
        }
    }
    
})

var app15 = new Vue({
    el: '#app-15',
    data: {
        conta: 0
    },
    methods: {
        clica: function(){
            this.conta++;
        }
    }
    
})
var app16 = new Vue({
    el: '#app-16',
    data: {
        conta: 0
    },
    methods: {
        clica: function(){
            this.conta++;
        }
    }
    
})

var app17 = new Vue({
    el: '#app-17',
    data: {
        conta: 0
    },
    methods: {
        clica: function(){
            this.conta++;
        }
    }
    
})