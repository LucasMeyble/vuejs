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

// ---------------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------------

Vue.component('contador', {
    data: function(){
        return{
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

var menuSuperior = {
    template: '<span>MENU</span>'
}

var header = new Vue({
    el: '#header',
    data: {
        title: 'Titulo do site'
    },
    components: {
        'menu-superior': menuSuperior
    }
})

var sidebar = new Vue({
    el: '#sidebar',
    data: {
        item: 'Alguma coisa'
    }
})

// ---------------------------------------------------------------------------------
var postagem = {
    props: ['titulo', 'corpo'],
    data: function(){
        return{
            exemplo: 'algum'
        }
    },
    template: '<div><h2>{{titulo}}</h2><p>{{corpo}}</p><span>{{exemplo}}</span></div>'
}

var conteudo = new Vue({
    el: '#conteudo',
    data: {

    },
    components: {
        postagem: postagem
    }
})




