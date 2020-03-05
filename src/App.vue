<template>
  <div>
    
    <h2>in app</h2>
    <!-- <hr />
    <router-link :to="{ name: 'ListComponent', params: { data_array:Data_Array } }">      Home</router-link>
    <router-link :to="{ name: 'Register', params: { emp_array:Data_Array } }">      Register</router-link>
   <hr /> -->
   <div class="topnav">
  <router-link :to="{ name: 'ListComponent', params: { data_array:Data_Array } }">Home</router-link>
    <router-link :to="{ name: 'Register', params: { emp_array:Data_Array } }">Register</router-link>
</div>


    <router-view></router-view>
    
  </div>
</template>

<script>
 //import Registration from "./components/Registration.vue";
// import Preview from "./components/Preview.vue";
 //import { countries } from "./components/Countries.js";
//import EmployeeList from "./components/ListComponent.vue";
export default {
  name: "App",
   data()
  {
    return{Data_Array:[]};
  }
};
// var edata = {
//   email: "",
//   password: "",
//   gender: "",
//   address: "",
//   dob: "",
//   vcountry: "",
//   state: "",
//   fname: "",
//   lname: "",
//   headingvar: "Welcome",
//   hobbies: [],
//   country_states: countries,
//   states: []
// };


</script>

<style>
.column {
  border-style: groove;
  flex: 50%;
}

#app {
  display: flex;
}

.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #4CAF50;
  color: white;
}

</style>
