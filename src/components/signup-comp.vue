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
                    v-model="email"
                    label="Email"
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
      <v-text-field class="input"
                    v-model="password2"
                    :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show2 ? 'text' : 'password'"
                    :rules="[rules.samePassword]"
                    label="Confirm password"
                    @click:append="show2 = !show2"
      ></v-text-field>
    </div>
    <div>
      <v-text-field class="input"
                    v-model="avatar"
                    label="Link to image (Profile Image)"
      ></v-text-field>
    </div>
    <div>
      <v-text-field class="input"
                    v-model="frase"
                    label="Motivation quote"
      ></v-text-field>
    </div>
    <div>
      <v-text-field class="input"
                    v-model="age"
                    label="Age"
                    @keypress="isNumber($event)"
      ></v-text-field>
    </div>
    <div>
      <v-text-field class="input"
                    v-model="weight"
                    label="Weight (in kg)"
                    @keypress="isNumber($event)"
      ></v-text-field>
    </div>
    <div>
      <v-text-field class="input"
                    v-model="height"
                    label="Height (in cm)"
                    @keypress="isNumber($event)"
      ></v-text-field>
    </div>
    <div v-show="sentCode">
      <v-text-field class="input"
                    v-model="code"
                    label="Code"
                    @keypress="isNumber($event)"
      ></v-text-field>
      <v-btn x-large
             width="150px"
             class="btn white 10px black--text mb-10"
             style="font-family: 'Dalek Pinpoint'"
             @click="verifyEmail()"
      > Verify email
      </v-btn>
    </div>
    <div v-show="error">
      <p style="font-family: Inter;color: red">{{ errormsg }}</p>
    </div>
    <div>
      <v-btn x-large
             width="150px"
             class="btn white 10px black--text"
             style="font-family: 'Dalek Pinpoint'"
             @click="signUp()"
      > Sign Up
      </v-btn>
    </div>
    <v-container>

    </v-container>
  </div>
</template>

<script>
import {createdCredentials} from "@/api/user";
import {mapActions, mapState} from "pinia";
import {useSecurityStore} from "@/store/SecurityStore";
import router from "@/router";

export default {
  name: "signup-comp",
  data() {
    return {
      show1: false,
      show2: false,
      username: '',
      email: '',
      password: '',
      password2: '',
      avatar: '',
      frase: '',
      age: '',
      weight: '',
      height: '',
      sentCode:false,
      code:'',
      errormsg: '',
      error: false,
      rules: {
        samePassword: (value) => (this.password === value) || 'Passwords dont match'
      }
    }
  },
  computed:{
    ...mapState(useSecurityStore, {
      $user: state => state.user,
    }),
  },
  methods: {
    ...mapActions(useSecurityStore, {
      $createUser:'createUser',
      $verifyEmail:'verifyEmail'
    }),
    async signUp() {
      if (this.username === '' || this.email === '' || this.password === '' || this.password2 == '' || this.avatar == '' || this.frase === '' || this.age === '' || this.weight === '' || this.height === '') {
        this.errormsg = "There are empty fields";
        this.error = true;
      } else {
        try {
          const metadata={age:this.age,frase:this.frase,weight:this.weight,height:this.height}
          const credentials = new createdCredentials(this.username, this.password, this.email, this.avatar, metadata);
          await this.$createUser(credentials);
          this.error=false
          this.sentCode=true
        } catch (e){
          this.errormsg = 'Error signing up, check information provided'
          this.error = true
        }
      }
    },
    async verifyEmail(){
      if (this.code==='') {
        this.errormsg='The code field is empty'
        this.error=true
      }else{
        try{
          await this.$verifyEmail(this.email,this.code)
          router.push('/')
        }catch (e){
          this.errormsg="Code is incorrect"
          this.error=true
        }
      }
    },
    isNumber: function (evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();
      } else {
        return true;
      }
    }
  },
  async created() {
    const securityStore = useSecurityStore();
    await securityStore.initialize();
  }
}
</script>

<style scoped>

.input {
  font-family: AbhayaLibre-ExtraBold;
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
</style>