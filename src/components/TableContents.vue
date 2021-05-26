<template>
  <el-table
    :data="tableT.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    <el-table-column
      label="Name"
      prop="name">
    </el-table-column>
    <el-table-column
      label="Date"
      prop="date1">
    </el-table-column>
    <el-table-column
      label="Description"
      prop="desc">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot="header" slot-scope={}>
        <el-input
          v-model="search"
          size="mini"
          placeholder="Search by name"/>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>

  export default {
    data() {
      return {
       
        search: '',
        tableT:this.$store.getters.getTable
      }
    },
    methods: {
 
    }
    // await axios
    //   .get('http://localhost:8080/')
    //   .then(response => {console.log(response.data)} 
    //     )


 

  

  }
</script>