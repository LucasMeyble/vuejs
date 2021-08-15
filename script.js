Vue.component('menu-superior', {
    data: function(){
        return {
            texto: 'texto qualquer'
        };
    },
    template: '<button>{{texto}}</button>'
})

var app = new Vue({
    el: '#app',
    data: {}
})

Vue.component('contador', {
    data: function(){
        return {
            c: 0
        };
    },
    methods: {
        aumentar: function(){
            this.c++;
        }
    },
    template: 
    `<div>
        <span>{{c}}</span>
        <button v-on:click="aumentar">Aumentar</button>
    </div>`
})

var app1 = new Vue({
    el: '#app-1',
    data: {}
})