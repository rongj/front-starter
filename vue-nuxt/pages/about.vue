<template>
  <div>
    <h2>about page</h2>
    <p>need login!</p>
  </div>
</template>

<script>
export default {
  middleware: "authenticated",

  head: {
    title: "about page"
  }
};
</script>