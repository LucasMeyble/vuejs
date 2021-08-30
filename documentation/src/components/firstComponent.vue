<template>
<div>
    <h1>Ola Vue</h1>
    <h2>{{title}}</h2>
    <multiplosEventos />
    <Reutilizacao />
    <Reutilizacao />
</div>
</template>


<script>
import MultiplosEventos from './MultiplosEventos.vue';
import Reutilizacao from './Reutilizacao.vue';

export default {
    name: 'firstComponent',
    components: {
        MultiplosEventos,
        Reutilizacao
    },
    props: {
        title: String
    }
}
</script>