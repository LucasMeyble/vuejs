<template>
    <div>
        <p v-if="estaTrabalhando">estou trabalhando no momento.</p>
        <p v-else>nao estou trabalhando no momento.</p>
        <p>Ultilizo as seguintes tecnologias</p>
        <ul>
            <li>JS</li>
            <li>PHP</li>
            <li>Pyton </li>
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
    data() {
        return{
            estaTrabalhando: false,
            mostrarEmail: false,
            email: 'Lucasmeyble123@gmail.com',
            meu_link: 'https://google.com',
            textoBotao: 'mostrar email'
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