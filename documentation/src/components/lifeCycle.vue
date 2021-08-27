<template>
    <div>
        <h1>Meu nom é: {{nome}}</h1>
    </div>
</template>

<script>
export default {
    name: 'lifeCycle',
    data() {
        return{
            nome: 'Lucas Meyble '
        }
    },
    created(){
        setTimeout(() => {
            this.nome = 'Jorge'
        }, 1000)
    },
    mounted(){
        setTimeout(() => {
            this.nome = 'Pedro'
        }, 2000)
    }
}
</script>