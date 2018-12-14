<template>
  <div>
    <a-button @click="decreament">-</a-button>
    <a-input :value="count" style="width: 100px;" />
    <a-button @click="increament">+</a-button>
  </div>
</template>

<script>
import { Button, Input } from 'ant-design-vue';

export default {
  components: {
    AButton: Button,
    AInput: Input
  },
  
  data() {
    return {
      count: 0
    }
  },

  methods: {
    increament: function() {

    },

    decreament: function() {

    }
  }
}
</script>
