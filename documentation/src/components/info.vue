<template>
    <div>
        <p v-if="estaTrabalhando">estou trabalhando no momento.</p>
        <p v-else>nao estou trabalhando no momento.</p>
        <p>Ultilizo as seguintes tecnologias para back-end</p>
        <ul>
            <li v-for="(tecnology, index) in backend" v-bind:key="index">{{tecnology}}</li>
        </ul>
        <p>Ultilizo as seguintes tecnologias para o frontend</p>
        <ul>
            <li v-for="tecnology in frontend" :key="tecnology.id">
                {{tecnology.language}}
            </li>
        </ul>
        <p v-show="mostrarEmail">mande uma mensagem para: {{email}}</p>
        <!-- o dois pontos é equivalente a v-bind: -->
        <p class="portifolio">Para acessar meu portifolio <a :href="meu_link" target="_blank">basta clicar aqui</a></p>
        <div>
            <button @click="showEmail">
                {{textoBotao}}
            </button>
        </div>
        <Picture/>
    </div>
</template>

<script>
import Picture from './picture.vue';
export default {
    name: 'info',
    components: {
        Picture
    },
    props: {
        email: String
    },
    data() {
        return{
            estaTrabalhando: false,
            mostrarEmail: false,
            meu_link: 'https://google.com',
            textoBotao: 'mostrar email',
            backend: ['JS', 'PHP', 'Python'],
            frontend: [
                {id: 1, language: 'html'},
                {id: 2, language: 'CSS'},
                {id: 3, language: 'JS'},
            ]
        }
    }, 
    methods: {
        showEmail(){
            this.mostrarEmail = !this.mostrarEmail;
            if(!this.mostrarEmail){
                this.textoBotao = 'mostar email'
            }else{
                this.textoBotao = 'Ocultar email'
            }
        }
    }
}
</script>