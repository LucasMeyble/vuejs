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