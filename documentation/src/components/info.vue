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
    </div>
</template>

<script>
export default {
    name: 'info',
    data() {
        return{
            estaTrabalhando: false,
            mostrarEmail: true,
            email: 'Lucasmeyble123@gmail.com'
        }
    }
}
</script>