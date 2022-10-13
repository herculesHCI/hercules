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
             @click="login()"
      >Log In
      </v-btn>
    </div>
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
      >Sign Up
      </v-btn>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from "pinia"
import {useSecurityStore} from "@/store/SecurityStore";
import {Credentials} from "@/api/user";

export default {
  name: "login-comp",
  data() {
    return {
      username: '',
      password: '',
      show1: false,
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
      $getCurrentUser: 'getCurrentUser',
      $login: 'login',
      $logout: 'logout',
    }),
    setResult(result){
      this.result = JSON.stringify(result, null, 2)
    },
    clearResult() {
      this.result = null
    },
    async login() {
      try {
        const credentials = new Credentials('johndoe', '1234567890')
        await this.$login(credentials, true)
        this.clearResult()
      } catch (e) {
        this.setResult(e)
      }
    },
    async logout() {
      await this.$logout()
      this.clearResult()
    },
    async getCurrentUser() {
      await this.$getCurrentUser()
      this.setResult(this.$user)
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

@font-face {
  font-family: "Dalek Pinpoint";
  src: local("DalekPinpointBold"), url(@/fonts/DalekPinpointBold.ttf) format("truetype");
}

@font-face {
  font-family: "AbhayaLibre-ExtraBold";
  src: local("AbhayaLibre-ExtraBold"), url(@/fonts/AbhayaLibre-ExtraBold.ttf) format("truetype");
}
</style>