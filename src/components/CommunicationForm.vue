<template>
  <div>
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Activity name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="Activity time">
        <el-col :span="11">
          <el-date-picker
            type="date"
            placeholder="Pick a date"
            v-model="form.date1"
            value-format="yyyy-MM-dd"
            style="width: 100%"
          ></el-date-picker>
        </el-col>
        <el-col class="line" :span="2"></el-col>
      </el-form-item>
      <el-form-item label="Activity form">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="onSubmit($event)"
          :disabled="this.form.name == '' || this.form.desc == ''"
          >Create</el-button
        >
        <!-- <el-button type="primary" @click="ShowResults" :disabled="this.form.name == '' || this.form.date1 == '' || this.form.desc == ''" >Show</el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
const axios = require('axios');
export default {
  data() {
    return {
      form: {
        name: "",
        date1: "",
        desc: "",
      },
      tableT: []
    };
  },
  methods: {
     async onSubmit() {
      console.log("submit!");
      // this.$store.dispatch("pushToTable", this.form);
      this.tableT.push(this.form)
      this.form = {
        name: "",
        date1: "",
        desc: "",
  
      }
      for (let i in this.tableT){
        await axios
          .post('http://localhost:8080', {
            
            name: this.tableT[i].name,
            description: this.tableT[i].desc
          })
          .then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });

      }
      this.tableT= []
      
    }
  },

};
</script>