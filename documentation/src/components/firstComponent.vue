<template>
<div>
    <h1>Ola Vue</h1>
    <h2>{{title}}</h2>
    <multiplosEventos />
</div>
</template>


<script>
import MultiplosEventos from './MultiplosEventos.vue'

export default {
    name: 'firstComponent',
    components: {
        MultiplosEventos
    },
    props: {
        title: String
    }
}
</script>