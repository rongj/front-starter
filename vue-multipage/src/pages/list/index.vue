<template>
  <div>
    <h2>List Page!</h2>
    <a href="index.html">index page</a>
    <br>
    <img src="@/assets/logo.png">
  </div>
</template>

<script>
  import * as _ from '@/utils/global';

  export default {
    created() {
      console.log('param a', _.getQueryString('a'));
    }
  }
</script>