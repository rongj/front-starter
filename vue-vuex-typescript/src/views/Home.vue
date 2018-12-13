<template>
  <div>
    <a-button @click="decreament">-</a-button>
    <a-input :value="count" style="width: 100px;" />
    <a-button @click="increament">+</a-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Input, Button } from 'ant-design-vue';
import { State, Action } from 'vuex-class';

@Component({
  components: {
    [Input.name]: Input,
    [Button.name]: Button
  },
})
export default class extends Vue {
  @State private count!: number;

  @Action private increament!: () => void;
  @Action private decreament!: () => void;
  
}
</script>
