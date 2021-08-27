<template>
  <h1>Ola mundo</h1>
  <firstComponent title="teste"/>
  <lifeCycle />
  <pessoa />
</template>

<script>
import firstComponent from './components/firstComponent.vue';
import lifeCycle from './components/lifeCycle.vue';
import pessoa from './components/pessoa.vue';

export default {
  name: 'App',
  components: { 
    firstComponent, 
    lifeCycle,
    pessoa,
  }
}
</script>