<template>
  <div>
    <h1 style="font-family: Inter2; background-color: white;margin-bottom: 30px">Exercises</h1>
    <v-row v-for="item in items.content" :key="item">
      <v-col>
        <v-card class="box">
          <v-card-title>{{ item.name }}</v-card-title>
          <v-card-text style="color: black">{{ item.detail }}</v-card-text>
          <v-btn style="margin-bottom: 10px" color="blue white--text" @click="sendToModify(item)">Edit</v-btn>
          <v-btn style="margin-bottom: 10px;margin-left: 10px" color="red white--text" @click="deleteItem(item)">Delete
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
    <v-btn color="blue white--text" @click="sendToCreate" style="margin: 40px">Create new</v-btn>
  </div>
</template>

<script>
import {mapActions, mapState} from "pinia";
import {useExerciseStore} from "@/store/ExerciseStore";

export default {
  name: "visualize-exercises",
  data() {
    return {
      items: [],
    }
  },
  computed: {
    ...mapState(useExerciseStore, {
      $items: state => state.items,
    }),
  },
  methods: {
    ...mapActions(useExerciseStore, {
      $delete: 'delete',
    }),
    sendToModify(item) {
      this.$router.push({name: 'modifyExercise', params: {item: item}})
    },
    sendToCreate() {
      this.$router.push('createNewExercise')
    },
    async deleteItem(item){
      await this.$delete(item.id)
      await this.$router.push('home')
    }

    },
    async created() {
      const exerciseStore = useExerciseStore();
      this.items = await exerciseStore.getAll();
    }
  }
</script>

<style scoped>
.box {
  max-width: 300px;
  max-height: 300px;
  text-align: center;
  margin-top: 10px;
  margin-right: auto;
  margin-left: auto;
}
</style>