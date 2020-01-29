<template>
  <div id="app">
    <!--  <ChildComponent>
      <template scope="defaultSlotScope">
        <p>{{ defaultSlotScope.text }}</p>
      </template>

      <template slot="the-best" scope="namedSlotScope">
        <h1>{{ namedSlotScope.text }}</h1>
      </template>
    </ChildComponent> -->

    <!--   <input type="text" v-model="name" @keyup.enter="addName" />
    {{ fullName }}

    <h1>{{ names }}</h1> -->

    <!--  <User :greet="testUser"> </User> -->

    <!-- <button @click="fetchData">Fetch Data</button>

    {{ userRes }} -->

    <Room @greeting="hello" :syncedyear.sync="year" />
    {{ year }}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Inject } from "vue-property-decorator";
import ChildComponent from "./components/Child.vue";
import User from "./components/User.vue";
import UserModel from "./models/User";
import UserRes from "./models/UserRes";
import DataRes from "./models/DataRes";
import Room from "./components/Room.vue";

import Axios from "axios";

@Component({
  components: {
    ChildComponent,
    User,
    Room
  }
})
export default class App extends Vue {
  name: string = "";
  names: Array<string> = [];
  year: number = 2019;

  userRes!: any;

  isOkay: boolean = false;

  get fullRes() {
    if (this.userRes == undefined) {
      return "";
    }

    return this.userRes.title;
  }

  get fullName() {
    if (this.name == undefined) {
      return "";
    }
    return this.name.toLowerCase();
  }

  set fullName(value: String) {
    console.log("name" + value);
    this.name = value.toString().trim();
  }

  addName() {
    this.names.push(this.name);

    this.name = "";
    console.log(this.names);
  }

  async fetchData() {
    let res = await Axios.get("https://jsonplaceholder.typicode.com/posts/1");
    //console.log(res.data);
    let userRes: UserRes = res.data;
    this.userRes = userRes;
    this.name = userRes.title;
    console.log(this.userRes.title);
  }

  async postData() {
    //  let dataRes: DataRes= {coord: {lon: 123.233, lat: 233.233}, weather:[ {id: 1, main: "hello", description: "des", icon: ""}]};

    let data: UserRes = { userId: 1, title: "Hello World", body: "Hello Body" };
    let res = await Axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      data
    );

    // console.log(res.data);
  }

  created() {
    this.fetchData();
    this.postData();
    setTimeout(() => (this.userRes = { foo: 40 }), 100);
  }

  hello(value: any): void {
    alert(value);
  }

  @Watch("userRes", { immediate: true, deep: true })
  onUserResUpdate() {
    console.log("User Res Updated");
  }

  @Watch("year")
  onYearUpdate() {
    console.log("Year has been updated in parent");
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
