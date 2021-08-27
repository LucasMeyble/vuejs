<template>
<div>
    <h1>Ola Vue</h1>
    <h2>{{title}}</h2>
</div>
</template>


<script>
export default {
    name: 'firstComponent',
    props: {
        title: String
    }
}
</script>