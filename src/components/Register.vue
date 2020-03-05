<template>
  <div>
    <h2>Register Here</h2>
     <div id="app">
      <div class="column">
        <Registration :rdata="emp_data"></Registration>
      </div>

      <div class="column">
        <Preview :rdata="emp_data"></Preview>
      </div> 
    </div>
 <button @click="addFunc()">Add Employee</button>
  <button @click="tryFunc()">Try</button>


     <!-- <div>
      <h3>Employee List</h3>
      <EmployeeList :data_array="Data_Array"></EmployeeList>
    </div> -->
  </div>
</template>

<script>
 import Registration from "./Registration.vue";
 import Preview from "./Preview.vue";
import { countries } from "./Countries.js";
//import EmployeeList from "./components/ListComponent.vue";

//var Data_Array_Local = [];
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
  name: "Register",
  components: { Registration, Preview },
  props:{emp_array: Array, testArray: Array},
  data() {
    return { emp_data: edata};
  },

  methods: {
    addFunc() {
      let obj={...this.emp_data};

      this.emp_array.push(obj);
      //console.log(this.emp_array)
    },
//     tryFunc(){
//         this.testArray.push(5);
//         console.log(this.testArray);
//     }
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
