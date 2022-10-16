<template>
  <div>

    <img alt="Hercules logo" src="@/assets/Hercules.png" width="500">
    <h1 class="v-text" style="font-size: 100px">Hercules</h1>
    <div>
      <v-text-field class="input"
                    v-model="username"
                    label="Username"
      ></v-text-field>
    </div>
    <div>
      <v-text-field class="input"
                    v-model="password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show1 ? 'text' : 'password'"
                    label="Password"
                    @click:append="show1 = !show1"
      ></v-text-field>
    </div>
    <div>
      <v-btn x-large
             class="btn black white--text"
             width="150px"
             style="font-family: 'Dalek Pinpoint'"
             @click="login"
      >Log In
      </v-btn>
    </div>
    <div v-show="error"><p style="font-family: Inter;color: red">{{errmsg}}</p></div>
    <v-row align="center">
      <v-divider></v-divider>
      OR
      <v-divider></v-divider>
    </v-row>
    <div>
      <v-btn x-large
             width="150px"
             class="btn white 10px black--text"
             style="font-family: 'Dalek Pinpoint'"
             @click="goToSignUp"
      >Sign Up
      </v-btn>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from "pinia"
import {useSecurityStore} from "@/store/SecurityStore";
import {Credentials} from "@/api/user";
import router from "@/router";


export default {
  name: "login-comp",
  data() {
    return {
      username: null,
      password: null,
      errmsg: '',
      show1: false,
      error: false
    }
  },

  computed: {
    ...mapState(useSecurityStore, {
      $user: state => state.user,
    }),
    ...mapState(useSecurityStore, {
      $isLoggedIn: 'isLoggedIn'
    }),
  },
  methods: {
    ...mapActions(useSecurityStore, {
      $login: 'login',
    }),
    async login() {
      if (this.username != '' && this.password != '') {
        try {
          const credentials = new Credentials(this.username, this.password)
          await this.$login(credentials, false)
          if (this.$isLoggedIn)
            await router.push('main/home')
        } catch (e){
          this.errmsg = 'Couldn\'t find user or password is incorrect'
          this.error = true
        }
      } else {
        this.errmsg = 'There are empty fields'
        this.error = true
      }
    },
    async goToSignUp() {
      await router.push('signup')
    },

  },
  async created() {
    const securityStore = useSecurityStore();
    await securityStore.initialize();
  }
}
</script>

<style scoped>

.input {
  font-family: AbhayaLibre-ExtraBold;;
  border: 1px solid grey;
  border-radius: 5px;
  text-align: left;
  padding-left: 5px;
  background-color: white;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  height: 50px;
  width: 200px;
}

.btn {
  margin: 15px;
}


</style>