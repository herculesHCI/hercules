<template>
  <div>
    <h1 class="myProfileTitle">My Profile</h1>
    <div>
      <v-card style="background-color: #d9d9d9" flat>
        <v-avatar size="280px">
          <v-img :src="profilePic"></v-img>
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
  </div>
</template>

<script>
export default {
  name: "ProfilePreview",
  data:()=>({
    username: 'Rey de hades',
    motivation: 'Matar a hercules',
    profilePic:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Hades_Altemps_Inv8584_n2.jpg/220px-Hades_Altemps_Inv8584_n2.jpg",
  })
}
</script>

<style scoped>
.myProfileTitle {
  font-family: Inter2;
  text-align: left;
  size: 30px;
  padding-left: 200px;
  padding-top: 20px;
}

.pencilbtn {
  margin-top: 200px;
  margin-right: 100px;
  position: absolute;
}

.textfields {
  background-color: white;
  color: black;
  flex-wrap: wrap;
  margin: 20px auto;
}

</style>