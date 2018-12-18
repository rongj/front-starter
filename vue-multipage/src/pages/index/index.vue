<template>
  <div>
    <h2>Index Page!</h2>
    <a href="list.html?a=1">list page</a>
    <hello-world msg="index msg!"></hello-world>
  </div>
</template>

<script>
  import HelloWorld from '@/components/HelloWorld.vue';

  export default {
    components: {
      HelloWorld
    }
  }
</script>