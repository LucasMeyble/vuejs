var app = new Vue({
    el: '#app',
    data: {
        nameInput: '',
        aviso: '',
        lista: [],
        timer: null,
        buttonVisible: false
    },
    computed: {
        totalTexto: function(){
            return "Total de nomes: "+this.lista.length;
        }
    },
    methods: {
        add: function (){
            this.lista.push(this.nameInput);
            this.nameInput = '';
            this.buttonVisible = false;
        },
        limparAviso: function(){
            this.aviso = '';

            if(this.nameInput.length > 2){
                this.buttonVisible = true;
            }
        },

    },
    watch: {
        nameInput: function(){

            
            if(this.timer != null){
                clearTimeout(this.timer)
            }
            if(this.nameInput != ''){
                this.aviso = 'digitando ...'
                this.buttonVisible = false
                this.timer = setTimeout(this.limparAviso, 600)
            }

        }
    }
})