
<template>
  <div>
    <h2>Preview</h2>
    <div class="field">First Name: {{rdata.fname}}</div>
    <div class="field">Last Name: {{rdata.lname}}</div>
    <div class="field">Full Name: {{fullName()}}</div>
    <div class="field">Email: {{rdata.email}}</div>
    <div class="field">Gender: {{rdata.gender}}</div>
    <div class="field">Date of Birth: {{rdata.dob}}</div>
    <div class="field">Hobbies: </div>
    <div>
      <ul>
        <li v-for="hobby in rdata.hobbies" :key="hobby.hobbies">{{hobby}}</li>
      </ul>
    </div>
    <div class="field">Country: {{rdata.vcountry}}</div>
    <div class="field">State: {{rdata.state}}</div>
    <div class="field">Address: {{rdata.address}}</div>
  </div>
</template>
<script>
export default {
  name: "Preview",
  props: {
    rdata: Object,
  },
  data() {
    return {
    }
  },
  methods:
  {
     fullName() {
      return this.rdata.fname + " " + this.rdata.lname;
    }   
  }
};
</script>
<style scoped>

.field {
  margin-top: 5px;
}
.fieldvalue {
  margin-top: 3px;
}
#reset {
  background-color: #808080;
}
#submit {
  background-color: #0000ff;
}
table,
th,
td {
  border: 0.5px solid black;
}

</style>