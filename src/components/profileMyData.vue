<template>
  <div class="myData">
    <h1>My data</h1>
    <v-row v-for="pair in userInfo.slice(0,2)" :key="pair">
      <v-col v-for="info in pair" :key="info">
        <v-card class="dataCards" flat>
          {{ info.name }}{{ info.value }}
        </v-card>
      </v-col>
      <v-col v-for="n in 2" :key="n"></v-col>
    </v-row>
    <v-row>
      <v-col v-for="info in userInfo.at(2)" :key="info">
        <v-card class="dataCards" flat>
          {{info.name}}{{ info.value }}
        </v-card>
      </v-col>
      <v-col>
        <v-btn icon color="#204DEE">
          <v-icon size="80">mdi-pencil-circle</v-icon>
        </v-btn>
      </v-col>
      <v-col></v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "profileMyData",
  data:()=>({
    userInfo:
        [[
          {
            name: 'BMI:',
            value: 154
          },
          {
            name: '%FAT:',
            value: 32
          }], [
          {
            name: 'Weight:',
            value: '104kg'
          },
          {
            name: 'BMR:',
            value: '1 Cal/Day'
          }],
          [
            {
              name: 'Ideal Weight:',
              value: '12kg'
            },
            {
              name: 'Height:',
              value: '192cm'
            }]
          ,
        ],
  })
}
</script>

<style scoped>
.myData {
  font-family: Inter2;
  text-align: left;
  font-size: 15px;
  padding-left: 200px;
}

.dataCards {
  width: 150px;
  height: 50px;
  text-align: center;
  padding: 10px;
  size: 20px;
}
</style>