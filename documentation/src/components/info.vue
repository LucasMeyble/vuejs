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
        <p>Para acessar meu portifolio <a v-bind:href="meu_link" target="_blank">basta clicar aqui</a></p>
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
            mostrarEmail: true,
            email: 'Lucasmeyble123@gmail.com',
            meu_link: 'https://google.com'
        }
    }
}
</script>