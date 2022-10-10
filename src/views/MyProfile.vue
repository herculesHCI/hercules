<template>
  <v-app style="background-color: #d9d9d9">
    <div id="myProfile-style">
      <h1 class="myProfileTitle">My Profile</h1>
      <div>
        <v-card style="background-color: #d9d9d9" flat>
          <v-avatar size="280px">
            <v-img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Hades_Altemps_Inv8584_n2.jpg/220px-Hades_Altemps_Inv8584_n2.jpg"
                alt="John">
            </v-img>
          </v-avatar>
          <v-btn icon color="#204DEE" class="pencilbtn">
            <v-icon size="80">mdi-pencil-circle</v-icon>
          </v-btn>
        </v-card>
      </div>
      <div>
        <v-card class="textfields" flat rounded max-width="344">
          <div>{{ username }}</div>
        </v-card>
        <v-card class="textfields" flat rounded max-width="344">
          <div>{{ motivation }}</div>
        </v-card>
      </div>
      <div>
        <v-row>
          <v-col>
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
                    <v-btn icon color="#204DEE" class="pencilbtn2">
                      <v-icon size="80">mdi-pencil-circle</v-icon>
                    </v-btn>
                  </v-col>
                  <v-col></v-col>
              </v-row>
            </div>
          </v-col>
          <v-col>
            <div>
              <h1>My analytics</h1>
              <v-card class="myAnalytics">
                <v-row>
                  <v-col>
                    <h3 style="color: #423C3C" class="myProgressTitle">Progress</h3>
                    <v-progress-circular
                        :rotate="90"
                        :size="150"
                        :width="20"
                        :value="(workoutsDone*100)/totalWorkouts"
                        color="#204DEE">
                      {{ (workoutsDone * 100) / totalWorkouts }}%
                    </v-progress-circular>
                    <h5 style="color: #423C3C">{{ workoutsDone }} out of {{ totalWorkouts }} Workouts completed</h5>
                  </v-col>
                  <v-col>
                    <h3 style="color: #423C3C">Activity</h3>
                    <v-sparkline
                        class="mt-6"
                        :fill=true
                        color="#204DEE"
                        :line-width=2
                        :padding=10
                        :smooth="6 || false"
                        :value="workoutsxDia"
                        :labels="dias"
                        :label-size="15"
                        auto-draw>
                    </v-sparkline>
                  </v-col>
                </v-row>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </div>

    </div>
  </v-app>
</template>

<script>
export default {
  name: " MyProfile",
  data: () => ({
    username: 'Rey de hades',
    motivation: 'Matar a hercules',
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
    dias: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    workoutsxDia: [1, 2, 0, 1, 3, 0, 0],
    workoutsDone: 2,
    totalWorkouts: 4,
  })
}

</script>

<style scoped>
#myProfile-style {
  font-family: Inter2;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  background-Color: #d9d9d9;

}

.myProfileTitle {
  font-family: Inter2;
  text-align: left;
  size: 30px;
  padding-left: 200px;
  padding-top: 20px;
}

.textfields {
  background-color: white;
  color: black;
  flex-wrap: wrap;
  margin: 20px auto;
}

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


.myAnalytics {
  border: 3px solid white;
  background-color: #d9d9d9;
  padding: 15px;
  margin-right: 30px;
}

.myProgressTitle {
  margin-right: 300px;
}

.pencilbtn {
  margin-top: 200px;
  margin-right: 100px;
  position: absolute;
}

.pencilbtn2 {
  position: relative;
  flex: wrap;
}
</style>