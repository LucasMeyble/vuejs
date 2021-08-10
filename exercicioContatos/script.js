var app = new Vue({
    el: '#app',
    data: {
        nameInput: '',
        lista: []
    },
    methods: {
        add: function (){
            if(this.nameInput.length > 0){
                this.lista.push(this.nameInput);

                this.nameInput = ''
            }
        }
    }
})