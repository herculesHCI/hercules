<template>
  <div>
    <v-card class="box">
      <h1>Settings</h1>
      <h3 class="subtitles">My profile</h3>
      <v-row>
        <v-col><p class="text-in-box">Make workouts public</p></v-col>
        <v-spacer></v-spacer>
        <v-col>
          <v-switch
              v-model="switch1"
              inset
              color="#204DEE"
              class="pl-16"
          ></v-switch>
        </v-col>
      </v-row>
      <h3 class="subtitles">Units</h3>
      <v-row>
        <v-col><p class="text-in-box">Units measurements</p></v-col>
        <v-spacer></v-spacer>
        <v-col>
          <v-select
              v-model="select"
              :items="items"
              item-text="unit"
              outlined
          ></v-select>
        </v-col>
      </v-row>
      <h3 class="subtitles">Notifications</h3>
      <v-row>
        <v-col><p class="text-in-box">Timer sound</p></v-col>
        <v-spacer></v-spacer>
        <v-col>
          <v-switch
              v-model="switch2"
              inset
              color="#204DEE"
              class="pl-16"
          ></v-switch>
        </v-col>
      </v-row>
      <v-btn class="mb-7" color="red--text">Log out</v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "settings-comp",
  data() {
    return {
      switch1: true,
      switch2: false,
      select: {unit: 'kg-m-cm'},
      items: [
        {unit: 'kg-m-cm'},
        {unit: 'miles-feet-inches'},
      ],
    }
  }
}
</script>

<style scoped>
.box {
  width: 700px;
  margin: 50px auto auto;
  padding-left: 20px;
  padding-right: 10px;
  border: 2px solid black;
}

.subtitles {
  color: #204DEE;
  padding-top: 10px;
}

.text-in-box {
  color: black;
  padding-top: 20px;
  padding-bottom: 30px;
}
</style>