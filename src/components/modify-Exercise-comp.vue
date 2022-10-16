<template>
  <div>
    <v-card class="box">
      <h1>Modify {{ item.name }}</h1>
      <v-text-field label="New name" class="input" v-model="name"></v-text-field>
      <v-text-field label="New detail" class="input" v-model="detail"></v-text-field>
      <p v-show="error" style="color: red">{{ errormsg }}</p>
      <div>
        <v-btn class="btn" color="red white--text" @click="$router.back()">Cancel</v-btn>
        <v-btn class="btn" color="blue white--text" @click="modifyExercise">Modify</v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
import {useExerciseStore} from "@/store/ExerciseStore";
import {mapActions, mapState} from "pinia";
import {Exercise} from "@/api/exercises";

export default {
  name: "modify-Exercise-comp",
  data() {
    return {
      name: '',
      detail: '',
      item: this.$route.params.item,
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
      $modify: 'modify',
    }),
    async modifyExercise() {
      if (this.name != '' && this.detail != '') {
        try {
          const exercise = new Exercise(this.name, this.detail)
          await this.$modify(this.item.id, exercise)
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