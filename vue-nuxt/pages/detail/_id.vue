<template>
  <div>
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
  </div>
</template>

<script>

  export default {
    head() {
      return {
        title: this.post.title || 'detail page',
        meta: [
          { hid: 'description', name: 'description', content: this.post.body && this.post.body.substr(0, 100) }
        ]
      }
    },

    async asyncData ({ params, $axios }) {
      let { data } = await $axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      return { post: data }
    },
  }
</script>