<template>
  <div>
    <table>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Gender</th>
        <th>DOB</th>
        <th>Hobbies</th>
        <th>Country</th>
        <th>State</th>
        <th>Address</th>
      </tr>
      <tr v-for="d in data_array" :key="d.vcountry">
        <td>{{d.fname+""+d.lname}}</td>
        <td>{{d.email}}</td>
        <td>{{d.gender}}</td>
        <td>{{d.dob}}</td>
        <td>{{d.hobbies}}</td>
        <td>{{d.vcountry}}</td>
        <td>{{d.state}}</td>
        <td>{{d.address}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "EmployeeList",
  props: { data_array: Array }
};
</script>

<style>
table,
td,
th {
  border: 1px solid black;
}

table {
  border-collapse: collapse;
  width: 100%;
}

th {
  height: 50px;
}
</style>
