<template>
  <div id="workouts-style">
    <div>
      <v-row>
        <v-col>
          <v-btn class="back-btn"  @click="$router.go(-1)">
            <v-icon>mdi-arrow-left-bold</v-icon>
          </v-btn>
        </v-col>
        <v-col>
          <h1 id="card-style">Create Workout</h1>
        </v-col>
      </v-row>
    </div>
    <v-card flat id="">
      <v-snackbar
          v-model="snackbar"
          absolute
          top
          right
          color="success"
      >
        <span>Workout creation successful!</span>
        <v-icon dark>
          mdi-checkbox-marked-circle
        </v-icon>
      </v-snackbar>
      <v-form
          ref="form"
          @submit.prevent="submit"
      >
        <v-container fluid>
          <v-row>
            <v-col
                cols="12"
                sm="6"
            >
              <v-text-field
                  v-model="form.name"
                  :rules="rules.name"
                  color="#204DEE"
                  label="Workout name"
                  required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                  v-model="form.imageUrl"
                  color="204DEE"
              >
                <template v-slot:label>
                  <div>
                    Insert image url <small>(optional)</small>
                  </div>
                </template>
              </v-textarea>
            </v-col>
            <v-col
                cols="12"
                sm="6"
            >
              <v-select
                  v-model="form.category"
                  :items="Categories"
                  :rules="rules.category"
                  color="#204DEE"
                  label="Choose you workout category"
                  required
              ></v-select>
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-btn
              text
              @click="resetForm"
          >
            Clear
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
              :disabled="!formIsValid"
              text
              color="#204DEE"
              type="submit"
              @click="submit"
          >
            Create Workout
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import {useRoutineStore} from "@/store/RoutineStore";
import router from "@/router";
import {Routine} from "@/api/routines";

export default {
  name: "workouts-create",
  data(){
    const defaultForm = Object.freeze({
      name: "",
      imageUrl: "",
      category: "",
    })
    return{
      rStore:{},
      CategoriesId:[
        {
          id: 1,
          name: 'Back',
        },
        {
          id: 2,
          name: 'Legs',
        },
        {
          id: 3,
          name: 'Push',
        },
        {
          id: 4,
          name: 'Pull',
        },
        {
          id: 5,
          name: 'Upper',
        },
        {
          id: 6,
          name: 'Abs',
        },
        {
          id: 7,
          name: 'Arms',
        },
        {
          id: 8,
          name: 'Cardio',
        },
        {
          id: 9,
          name: 'Full Body',
        }
      ],
      form: Object.assign({}, defaultForm),
      rules: {
        category: [val => (val || "").length > 0 || 'This field is required'],
        name: [val => (val || "").length > 0 || 'This field is required'],
      },
      Categories: ['Back', 'Legs', 'Full body', 'Abs', 'Arms','Cardio','Upper','Push','Pull'],
      conditions: false,
      snackbar: false,
      defaultForm,
    }
  },
  methods:{
    async createRoutine(){
      const id = this.findId(this.form.category);
      console.log(this.form);
      const routine = new Routine(this.form.name, {id},this.form.imageUrl);
      try{
        await this.rStore.create(routine);
      }catch(e){
        alert("There seems to be an error with the Workout creation");
      }
      this.resetForm();
      await router.push(`/editRoutine/${routine.id}`);
    },
    findId(catName){
      for(let i=0;i < this.CategoriesId.length;i++){
        if(this.CategoriesId[i].name === catName){
          return this.CategoriesId[i].id;
        }
      }
      return 1;
    },
    resetForm () {
      this.form = Object.assign({}, this.defaultForm)
      this.$refs.form.reset()
    },
    async submit () {
      this.snackbar = true;
      await this.createRoutine()
    },
  },
  computed:{
    formIsValid () {
      return (
          this.form.name &&
          this.form.category
      )
    },
  },
  async created(){
    this.rStore = useRoutineStore();
  }
}
</script>

<style scoped>
.back-btn {
  alignment: left;
  margin: 38px auto 50px 150px;
  size: 10px;
}
#workouts-style {
  font-family: Inter2;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
  background-Color: #d9d9d9;
}
#card-style{
  padding:10px
}
</style>