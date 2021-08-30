<template>
    <div>
        <h2>esta é a descrição de pessoa {{nome}}</h2>
        <info :email="email"/>
        <Form />
    </div>
</template>

<script>
import info from './info.vue';
import Form from './Form.vue';
export default {
    name: 'pessoa',
    components: {info, Form},
    data() {
        return {
            nome: 'Lucas',
            email: 'lucasmeyble@gmail.com'
        }
    }
}
</script>