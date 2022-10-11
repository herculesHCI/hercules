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
    <v-text-field class="input"
                  v-model="password2"
                  :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show2 ? 'text' : 'password'"
                  :rules="[rules.samePassword]"
                  label="Confirm password"
                  @click:append="show2 = !show2"
    ></v-text-field>
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
      rules: {
        samePassword: (value) => (this.password === value) || 'La contrasenas no coinciden'
      },
    }
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
</style>