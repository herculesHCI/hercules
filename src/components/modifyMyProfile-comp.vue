<template>
  <div>
    <h1>Modify my profile</h1>
    <h2>Once you modify your profile you are required to login again</h2>
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
    <p v-show="error" style="color: red">{{ errormsg }}</p>
    <div>
      <v-btn class="btn" color="red white--text" @click="$router.back()">Cancel</v-btn>
      <v-btn class="btn" color="blue white--text" @click="modifyProfile">Modify</v-btn>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "pinia";
import {useSecurityStore} from "@/store/SecurityStore";
import {modifyCredentials} from "@/api/user";

export default {
  name: "modifyMyProfile-comp",
  data() {
    return {
      avatar: '',
      frase: '',
      age: '',
      weight: '',
      height: '',
      errormsg: '',
      error: false,
    }
  },
  computed: {
    ...mapState(useSecurityStore, {
      $user: state => state.user,
    }),
  },
  methods: {
    ...mapActions(useSecurityStore, {
      $modifyUser: 'modifyUser',
    }),
    async modifyProfile() {
      if (this.avatar !== '' || this.frase !== '' || this.age !== '' || this.weight !== '' || this.height !== '') {
        try {
          const metadata = {age: this.age, frase: this.frase, weight: this.weight, height: this.height}
          const credentials = new modifyCredentials(this.avatar, metadata)
          await this.$modifyUser(credentials)
          await this.$router.push('/')
          await this.$router.go(0)

        } catch (e) {
          this.error = true
          this.errormsg = "An error ocurred"
        }
      } else {
        this.error = true
        this.errormsg = "There are empty fields"
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

.btn {
  margin-bottom: 10px;
  margin-right: 30px;
  margin-left: 30px;
}
</style>