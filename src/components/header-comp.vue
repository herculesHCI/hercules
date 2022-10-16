<template>
  <div>
    <v-card height="74px"
            color="#FFFFFF"
            flat
            tile>
      <v-toolbar extended extension-height="10px" elevation="2">
        <v-img max-width="2em" src="@/assets/HerculesNegro.png"/>
        <p text id="header-comp-style" style="font-size: 30px">Hercules</p>
        <router-link v-for="link in links" :key="link.text"
                     :to="{
            name:link.name,
            params:{slug:link.route}
           }">
          <v-btn
              style="font-family: Inter2"
              class="ml-4"
              text
          >{{ link.text }}
          </v-btn>
        </router-link>
        <v-spacer></v-spacer>
        <v-row align-content="center"
               justify="right">
          <v-text-field append-icon="mdi-magnify"
                        placeholder="Search Workouts"
                        outlined
                        rounded
                        color="black"
                        class="align-searchbar"/>
          <router-link :to="{
            name:myProfileLink.name,
            params:{slug:myProfileLink.route}
          }">
            <v-btn icon color="#000000" x-large>
              <v-icon>mdi-account-circle-outline</v-icon>
            </v-btn>
          </router-link>
          <router-link :to="{
            name:settingLink.name,
            params:{slug:settingLink.route}
          }">
            <v-btn icon color="#000000" x-large>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </router-link>
        </v-row>
      </v-toolbar>
    </v-card>
  </div>
</template>

<script>
import {mapState} from "pinia";
import {useSecurityStore} from "@/store/SecurityStore";

export default {
  name: "header-comp",
  data: () => ({
    links: [
      {text: 'Discover', name: 'Home-Landing', route: '/home'},
      {text: 'My Workouts', name: 'WorkoutsPage', route: '/WorkoutsPage'},
    ],
    myProfileLink: {name: 'My Profile', route: '/MyProfile'},
    settingLink:{name:'Settings',route:'/Settings'},
    userImage:[]
  }),
  computed: {
    ...mapState(useSecurityStore, {
      $user: state => state.user,
    }),
  },
   async created( ){
    const securityStore = useSecurityStore();
    await securityStore.getCurrentUser();
  }
}
</script>

<style scoped>
#header-comp-style {
  font-family: "Dalek Pinpoint", Inter2;
  margin: auto auto auto 10px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  size: 30px;
  color: #000000;
}

.align-searchbar {
  font-family: Inter2;
  max-height: 45px;
}

@font-face {
  font-family: "Dalek Pinpoint";
  src: local("DalekPinpointBold"), url(@/fonts/DalekPinpointBold.ttf) format("truetype");
}

@font-face {
  font-family: Inter2;
  src: local(Inter-VariableFont), url(@/fonts/Inter-VariableFont.ttf) format("truetype");
}
</style>