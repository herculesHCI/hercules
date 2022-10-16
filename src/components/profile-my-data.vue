<template>
  <div class="myData">
    <h1>My data</h1>
    <v-row v-for="pair in userInfo" :key="pair">
      <v-col v-for="n in 5" :key="n"></v-col>
      <v-col v-for="info in pair" :key="info">
        <v-card class="dataCards" flat>
          {{ info.name }}{{ info.value }}
        </v-card>
      </v-col>
      <v-col v-for="n in 5" :key="n"></v-col>
    </v-row>
  </div>
</template>

<script>
import {mapState} from "pinia";
import {useSecurityStore} from "@/store/SecurityStore";


export default {
  name: "profileMyData",
  data() {
    return{
      userInfo:
          [[
            {
              name: 'BMI:',
              value: ''
            },
            {
              name: 'Age:',
              value: ''
            }],
            [
              {
                name: 'Weight:',
                value: ''
              },
              {
                name: 'BMR:',
                value: ''
              }],
            [
              {
                name: 'Ideal Weight:',
                value:''
              },
              {
                name: 'Height:',
                value: ''
              }]
            ,
          ],
    }
  },
  computed: {
    ...mapState(useSecurityStore, {
      $user: state => state.user,
    }),
  },
  methods: {
    calculateBMI(weight, height) {
      return parseInt((weight ^ 2) / ((height / 100) ^ 2))
    },
    calculateBMR(weight, height, age) {
     return parseInt(66 + (13.8 * weight) + (5 * height) - (6.8 * age))

    },
    calculateIdealWeight(height) {
      return parseInt(50 + (0.91 * (height - 152.4)))
    }
  },
  async beforeMount() {
    const securityStore = useSecurityStore();
    await securityStore.initialize();
    const data = await securityStore.getCurrentUser();
    this.userInfo.at(0).at(0).value=' '+this.calculateBMI(data.metadata.weight,data.metadata.height)+' kg/m2';
    this.userInfo.at(0).at(1).value=' '+data.metadata.age;
    this.userInfo.at(1).at(0).value=' '+data.metadata.weight+'kg';
    this.userInfo.at(1).at(1).value=' '+this.calculateBMR(data.metadata.weight,data.metadata.height,data.metadata.age)+' cal/day'
    this.userInfo.at(2).at(0).value=' '+this.calculateIdealWeight(data.metadata.height)+'kg';
    this.userInfo.at(2).at(1).value=' '+data.metadata.height+'cm';
  }
}
</script>

<style scoped>
.myData {
  font-family: Inter2;
  text-align: center;
  font-size: 15px;
}

.dataCards {
  width: 180px;
  height: 50px;
  text-align: center;
  padding: 10px;
  position: center;
  size: 20px;
}
</style>