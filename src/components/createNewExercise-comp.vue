<template>
  <div>
    <v-card class="box">
      <h1>
        Create new exercise
      </h1>
      <v-text-field label="Name" class="input" v-model="name"></v-text-field>
      <v-text-field label="Detail" class="input" v-model="detail"></v-text-field>
      <p v-show="error" style="color: red">{{ errormsg }}</p>
      <div>
        <v-btn class="btn" color="red white--text" @click="$router.back()">Cancel</v-btn>
        <v-btn class="btn" color="blue white--text" @click="createExercise">Create</v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
import {mapActions, mapState} from "pinia";
import {useExerciseStore} from "@/store/ExerciseStore";
import {Exercise} from "@/api/exercises";

export default {
  name: "createNewExercise-comp",
  data() {
    return {
      name: '',
      detail: '',
      error: false,
      errormsg: ""
    }
  },
  computed: {
    ...mapState(useExerciseStore, {
      $items: state => state.items,
    })
  },
  methods: {
    ...mapActions(useExerciseStore, {
      $add: 'add',
    }),
    async createExercise() {
      if (this.name != '' && this.detail != '') {
        try {
          const exercise = new Exercise(this.name, this.detail)
          await this.$add(exercise)
          await this.$router.push('visualizeExercises')
        } catch (e) {
          this.error = true
          this.errormsg = "An error ocurred"
        }
      } else {
        this.error = true
        this.errormsg = "There are empty fields"
      }
    }
  },

}
</script>

<style scoped>
.box {
  max-width: 500px;
  max-height: 300px;
  text-align: center;
  margin-top: 10px;
  margin-right: auto;
  margin-left: auto;
}

.input {
  max-width: 300px;
  margin: auto;
}

.btn {
  margin-bottom: 10px;
  margin-right: 30px;
  margin-left: 30px;
}
</style>