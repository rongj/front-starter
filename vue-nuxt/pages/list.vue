<template>
  <div>
    <ul>
      <li v-for="item in postlist" :key="item.id">
        <nuxt-link :to="`/detail/${item.id}`">{{ item.title }}</nuxt-link>
        <p>{{ item.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    head: {
      title: 'list page'
    },

    async asyncData ({ params, $axios }) {
      let { data } = await $axios.get(`https://jsonplaceholder.typicode.com/posts`)
      return { postlist: data.slice(0, 20) }

    },
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/_theme.scss";

  li {
    padding: 10px;
    border-bottom: 1px solid #e8e8e8;
    a {
      font-size: 16px;
      font-weight: 700;
      text-decoration: none;
      &:hover {
        color: $theme-color;
      }
    }
    p {
      font-size: 14px;
      color: #666;
    }
  }
</style>