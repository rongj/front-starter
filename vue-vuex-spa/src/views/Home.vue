<template>
  <div>
    <a-button @click="decreament">-</a-button>
    <a-input :value="count" style="width: 100px;" />
    <a-button @click="increament">+</a-button>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import { Input, Button } from 'ant-design-vue';
import { State, Action, namespace } from 'vuex-class';

const home = namespace('home');

@Component({
  components: {
    [Input.name]: Input,
    [Button.name]: Button
  },
})
export default class Home extends Vue {
  @home.State count;

  @home.Action increament;
  @home.Action decreament;
  
}
</script>
