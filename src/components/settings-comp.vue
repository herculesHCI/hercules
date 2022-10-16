<template>
  <div>
    <v-card class="box">
      <h1 style="padding-bottom: 50px">Settings</h1>
        <v-btn  color="red--text" @click="logoutProfile()">Log out</v-btn>
    </v-card>
  </div>
</template>

<script>
import {mapActions, mapState} from "pinia";
import {useSecurityStore} from "@/store/SecurityStore";
import router from "@/router";

export default {
  name: "settings-comp",
  data(){
    return{
      myProfileLogout:null
    }
  },
  computed: {
    ...mapState(useSecurityStore, {
      $user: state => state.user,
    }),
  },
  methods: {
    ...mapActions(useSecurityStore, {
      $logout: 'logout',
    }),
    async logoutProfile(){
      this.myProfileLogout=true
      await router.push('/')
    }
  },
  async created() {
    const securityStore = useSecurityStore();
    await securityStore.initialize();
    if(this.myProfileLogout)
      await securityStore.logout()
  }
}
</script>

<style scoped>
.box {
  max-width: 700px;
  margin: 50px auto auto;
  padding-bottom: 59px;
  border: 2px solid black;
  text-align: center;
}

</style>