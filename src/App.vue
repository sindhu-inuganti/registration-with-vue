<template>
  <div>
    <div id="app">
      <div class="column">
        <h3>Reg is here</h3>
        <Registration :rdata="emp_data"></Registration>
      </div>

      <div class="column">
        <h3>Preview comes here</h3>
        <Preview :rdata="emp_data"></Preview>
      </div>
    </div>
    <button @click="addFunc()">AddEmployee</button>

    <div>
      <h3>Employee List</h3>
      <EmployeeList :data_array="Data_Array"></EmployeeList>
    </div>
  </div>
</template>

<script>
import Registration from "./components/Registration.vue";
import Preview from "./components/Preview.vue";
import { countries } from "./components/Countries.js";
import EmployeeList from "./components/ListComponent.vue";

var Data_Array_Local = [];
var edata = {
  email: "",
  password: "",
  gender: "",
  address: "",
  dob: "",
  vcountry: "",
  state: "",
  fname: "",
  lname: "",
  headingvar: "Welcome",
  hobbies: [],
  country_states: countries,
  states: []
};

export default {
  name: "App",
  components: { Registration, Preview, EmployeeList },
  data() {
    return { emp_data: edata, Data_Array: Data_Array_Local };
  },

  methods: {
    addFunc() {
      let obj={...this.emp_data};
  
      this.Data_Array.push(obj);
    }
  }
};
</script>

<style>
.column {
  border-style: groove;
  flex: 50%;
}

#app {
  display: flex;
}
</style>
