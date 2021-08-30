<template>
    <div>
        <h2>Meu formulario</h2>
        <form action="" @submit="enviarFormulario($event)">
            <div>
                <input v-model="nome" type="text">
                <!-- <inputText /> -->
            </div>
            <div>
                <input v-model="email" type="text">
                <!-- <inputText /> -->
            </div>
            <div>
                <submit />
            </div>
        </form>
    </div>
</template>

<script>
import inputText from './form/inputText.vue';
import submit from './form/submit.vue';
export default {
    name: 'Form',
    components: {inputText, submit},
    data() {
        return{
            nome:"",
            email:""
        }
    },
    methods: {
        enviarFormulario(e){
            //isso serve para a pagina nao da reload quando o formulario der um submit
            e.preventDefault();

            const nome = this.nome;
            const email = this.email;

            console.log('formulario enviado')
            console.log('o nome é: '+nome);
            console.log('o email é: '+email);

        }
    }
}
</script>