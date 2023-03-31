<template>
    <el-row>
      <el-col :sm="12" :lg="6">
        <el-result
          icon="success"
          title="Approved"
          sub-title="My approved orders"
        >
          
    </el-result>
  </el-col>
  <el-col :sm="12" :lg="6">
    <el-result
      icon="warning"
      title="Pending"
      sub-title="My pending orders"
    >
        </el-result>
      </el-col>
      <el-col :sm="12" :lg="6">
        <el-result
          icon="error"
          title="Rejected"
          sub-title="My rejected orders"
        >
        
         
         
        </el-result>
      </el-col>
    </el-row>
  </template>
  