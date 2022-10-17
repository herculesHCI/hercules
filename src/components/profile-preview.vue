<template>
  <div>
    <h1 class="myProfileTitle">My Profile</h1>
    <div>
      <v-card style="background-color: #d9d9d9" flat>
        <v-avatar size="280px">
          <v-img :src="profilePic"></v-img>
        </v-avatar>
        <v-btn icon color="#204DEE" class="pencilbtn" t>
          <v-icon size="80" @click="sendToModify">mdi-pencil-circle</v-icon>
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
import {mapState} from "pinia";
import {useSecurityStore} from "@/store/SecurityStore";

export default {
  name: "ProfilePreview",
  data:()=>({
    username: '',
    motivation: '',
    profilePic:'',
  }),
  computed: {
    ...mapState(useSecurityStore, {
      $user: state => state.user,
    }),
  },
  methods:{
    sendToModify(){
      this.$router.push('modifyMyProfile')
    }
  },
  async created() {
    const securityStore = useSecurityStore();
    await securityStore.initialize();
    const userData=await securityStore.getCurrentUser();
    this.username=userData.username
    this.motivation=userData.metadata.frase
    this.profilePic=userData.avatarUrl
  }
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


.textfields {
  background-color: white;
  color: black;
  flex-wrap: wrap;
  margin: 20px auto;
}

.pencilbtn {
  margin-top: 200px;
  margin-right: 100px;
  position: absolute;
}

</style>