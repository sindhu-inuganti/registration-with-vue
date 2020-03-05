<template>
<div>
  <title>Employee Registration</title>

 <body>
      <div>
      
        <form>
          <h2>Register Employee</h2>
          <div class="field">
            <label>First name:</label>
          </div>
          <div class="fieldvalue">
            <input type="text" name="fname" required v-model="rdata.fname" />
          </div>
          <div class="field">
            <label>Last name:</label>
            <br />
          </div>
          <div class="fieldvalue">
            <input type="text" class="lname" name="lname" required v-model="rdata.lname" />
            <br />
          </div>
          <div class="field">
            <label>Email:</label>
            <br />
          </div>
          <div class="fieldvalue">
            <input type="text" class="email" name="email" required v-model="rdata.email" />
            <br />
          </div>
          <div class="field">
            <label>Password:</label>
            <br />
          </div>
          <div class="fieldvalue">
            <input type="password" class="password" name="password" required />
            <br />
          </div>
          <div class="field">
            <label>Gender:</label>
            <br />
          </div>
          <div class="fieldvalue">
            <input type="radio" id="male" value="male" name="gender" v-model="rdata.gender" />
            <label for="male">Male</label>

            <input type="radio" id="female" value="female" name="gender" v-model="rdata.gender" />
            <label for="female">Female</label>
            <br />
          </div>

          <div class="field">
            <label for="dob">Date of Birth:</label>
            <br />
          </div>
          <div class="fieldvalue">
            <input type="date" name="dob" required v-model="rdata.dob" />
          </div>
          <div class="field">
            <label name="hobbies">Hobbies:</label>
            <br />
          </div>
          <div class="fieldvalue">
            <input type="checkbox" name="hobbies" value="music" id="music" v-model="rdata.hobbies" />
            <label for="music">Listening to music</label>
            <br />
            <input type="checkbox" name="hobbies" value="painting" id="painting" v-model="rdata.hobbies" />
            <label for="painting">Painting</label>
            <br />
            <input type="checkbox" name="hobbies" value="dancing" id="dancing" v-model="rdata.hobbies" />
            <label for="dancing">Dancing</label>
            <br />
            <input type="checkbox" name="hobbies" value="reading" id="reading" v-model="rdata.hobbies" />
            <label for="reading">Reading books</label>
            <br />
            <input type="checkbox" name="hobbies" value="writing" id="writing" v-model="rdata.hobbies" />
            <label for="writing">Writing stories</label>
            <br />
          </div>
          <div class="field">
            <label name="country">Country:</label>
          </div>
          <div class="fieldvalue">
            <select id="country" @change="selectstate" name="country" v-model="rdata.vcountry">
              <option value="selectcountry">select country</option>
              <option v-for="coun in rdata.country_states" :key="coun.country">{{coun.country}}</option>
            </select>
          </div>
          <div class="field">
            <label name="state">State:</label>
          </div>
          <div class="fieldvalue">
            <select id="state" name="state" v-model="rdata.state">
              <option value="selectstate">select state</option>
              <option v-for="st in rdata.states" :key="st.states">{{st}}</option>
            </select>
          </div>
          <div class="field">
            <label name="address">Address:</label>
          </div>
          <div class="fieldvalue">
            <textarea name="address" v-model="rdata.address"></textarea>
          </div>

          <div class="field" align="right">
            <button id="reset" @click="resetform()">Reset</button>
            <button type="submit" id="submit">Submit</button>
          </div>
        </form>
      </div>
    
  </body>  
</div>
</template>


<script>
export default {
  name: "Registration",
  props: {
    msg: String,
    rdata: Object
  },
  data() {
    return {
      
    };
  },
  methods: {
    resetform() {
       this.rdata.fname = "";
      this.rdata.lname = "";
      // this.rdata.headingvarthis.rdata = "";
      this.rdata.hobbies = [];
       this.rdata.email = "";
       this.rdata.gender = "";
       this.rdata.dob = "";
      this.rdata.password = "";

       this.rdata.vcountry = "";
       this.rdata.state = "";
       this.rdata.address = "";
    },
    selectstate() {
      var country_selected = this.rdata.vcountry;
      for (var ind = 0; ind < this.rdata.country_states.length; ind++) {
        if (this.rdata.country_states[ind].country == country_selected)
          this.rdata.states = this.rdata.country_states[ind].states;
      }
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