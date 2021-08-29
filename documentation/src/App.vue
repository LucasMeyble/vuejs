<template>
  <Header />
  <h1>Ola mundo</h1>
  <firstComponent title="teste"/>
  <lifeCycle />
  <pessoa />
</template>

<script>
import firstComponent from './components/firstComponent.vue';
import lifeCycle from './components/lifeCycle.vue';
import pessoa from './components/pessoa.vue';
import Header from './components/Header.vue';


export default {
  name: 'App',
  components: { 
    firstComponent, 
    lifeCycle,
    pessoa,
    Header,
  }
}
</script>

<style>
  body {
    background-color: #333;
    color: #FFF;
  }

  a {
    color: red;
  }

  .portifolio {
    background-color: #000;
  }



</style>