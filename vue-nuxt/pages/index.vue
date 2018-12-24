<template>
  <div>
    <h2>index page</h2>
    <el-button @click="decreament">-</el-button>
    <el-input v-model="count" style="width: 100px;"/>
    <el-button @click="increament">+</el-button>
    <el-table :data="userlist" style="width: 100%">
      <el-table-column prop="name" label="name"></el-table-column>
      <el-table-column prop="username" label="username"></el-table-column>
      <el-table-column prop="address" label="address">
        <template slot-scope="scope">{{ scope.row.address.city + ', ' + scope.row.address.street }}</template>
      </el-table-column>
      <el-table-column prop="phone" label="phone"></el-table-column>
      <el-table-column prop="website" label="website"></el-table-column>
      <el-table-column prop="company" label="company">
        <template slot-scope="scope">{{ scope.row.company.name }}</template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  head: {
    title: "index page"
  },

  async asyncData({ params, $axios }) {
    let { data } = await $axios.get(
      `https://jsonplaceholder.typicode.com/users`
    );
    return { userlist: data };
  },

  computed: mapState("home", ["count"]),

  methods: {
    ...mapActions("home", ["increament", "decreament"])
  }
};
</script>