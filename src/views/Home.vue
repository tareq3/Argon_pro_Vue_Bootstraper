<template>
  <div class="home">
    <div class="container-fluid mt-6">
      <div>
        <card
          class="no-border-card"
          body-classes="px-0 pb-1"
          footer-classes="pb-2"
        >
          <template slot="header">
            <div class="row align-items-center">
              <div class="col-8">
                <h3 class="mb-0">Paginated Todos</h3>
                <p class="text-sm mb-0">Here you will get Todo List.</p>
              </div>

              <div class="col-4 row align-items-center justify-content-end">
                <!-- <base-input class="col-6 align-items-center">
                  <input
                    type="text"
                    v-model="title"
                    placeholder="Enter the Title"
                    @keyup.enter="addItem"
                  />
                </base-input>
                <hr /> -->
                <base-button
                  type="primary"
                  class="col-4  ml-2"
                  @click="showModal = true"
                >
                  Add</base-button
                >

                <modal
                  :show.sync="showModal"
                  body-classes="p-0"
                  modal-classes="modal-dialog-centered modal-sm"
                >
                  <card
                    type="secondary"
                    shadow
                    header-classes="bg-white pb-5"
                    body-classes="px-lg-5 py-lg-5"
                    class="border-0"
                  >
                    <template>
                      <div class="text-muted text-center mb-3">
                        <strong>Enter Details</strong>
                      </div>
                    </template>
                    <template>
                      <form role="form " class="text-center">
                        <base-input
                          alternative
                          class="mb-3 justify-content-between"
                          placeholder="Email"
                          addon-left-icon="ni ni-email-83"
                        >
                          <input
                            class="form-control"
                            type="text"
                            v-model="title"
                            placeholder="Enter the Title"
                            @keyup.enter="addItem"
                          />
                        </base-input>

                        <div class="row">
                          <base-switch
                            class="ml-3 s"
                            onText="Completed"
                            offText="Incomplete"
                            v-model="completed"
                            type="foo"
                          ></base-switch>
                        </div>

                        <div class="text-center">
                          <base-button
                            type="primary"
                            class="my-4"
                            @click="addItem"
                            >Submit</base-button
                          >
                        </div>
                      </form>
                    </template>
                  </card>
                </modal>
              </div>
            </div>
          </template>

          <el-table
            class="table-responsive table-flush"
            header-row-class-name="thead-light"
            :data="todos"
          >
            <el-table-column
              label="User-Id"
              min-width="140px"
              prop="id"
              sortable
            >
            </el-table-column>

            <el-table-column
              label="Title"
              prop="title"
              min-width="310px"
              sortable
            >
            </el-table-column>

            <el-table-column
              label="Completed"
              prop="completed "
              min-width="140px"
              sortable
            >
              <template v-slot="{ row }">
                <badge v-if="row.completed" class="badge-dot mr-4" type="">
                  <i :class="`bg-success`"></i>
                  <span class="status">{{ row.completed }}</span>
                </badge>
                <badge v-else="" class="badge-dot mr-4" type="">
                  <i :class="`bg-red`"></i>
                  <span class="status"> {{ row.completed }}</span>
                </badge>
              </template>
            </el-table-column>
          </el-table>
        </card>
      </div>
    </div>

    <base-pagination
      class="pagination-no-border"
      v-model="currentPage"
      :per-page="perPage"
      :total="total"
    >
    </base-pagination>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Hello from "@/components/HelloWorld.vue";
import { Vue, Component, Watch } from "vue-property-decorator";
import { TodoRes } from "../store/models/TodoRes";
import { Table, TableColumn, Select, Option } from "element-ui";

@Component({
  name: "home",
  components: {
    Hello,
    [Select.name]: Select,
    [Option.name]: Option,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn
  }
})
export default class Home extends Vue {
  title: string = "";
  showModal: boolean = false;
  total: number = 200;
  perPage: number = 10;
  currentPage: number = 1;

  completed: boolean = false;

  todoList: Array<TodoRes>;

  get todos() {
    return (this.todoList = this.$store.getters.getTodos);
  }

  created() {
    this.$store.dispatch("fetchData", { limit: 10, start: 0 });
  }

  addItem() {
    // if (this.completed == "") {
    //   this.$notify({
    //     verticalAlign: "bottom",
    //     horizontalAlign: "right",
    //     message: "You must select your choice"
    //   });

    //   return;
    // }

    console.log("Add Item: " + this.completed);

    this.$store.dispatch("addData", {
      userId: 1,

      title: this.title,
      completed: this.completed == false ? false : true
    });
    this.title = "";
    this.showModal = false;
  }

  @Watch("currentPage")
  onPageChange() {
    this.$router.replace({
      path: `home`,
      query: { page: `${this.currentPage}` }
    });
  }

  @Watch("$route")
  onRouteChange() {
    console.log("Page Changed" + this.$route.query.page);
    this.$store.dispatch("fetchData", {
      limit: 10,
      start: 10 * (parseInt(this.$route.query.page + "") - 1)
    });
  }
}
</script>
<style>
  
</style>