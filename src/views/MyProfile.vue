<template>
  <div id="myProfile-style">
    <profile-preview></profile-preview>
    <div>
      <v-row>
        <v-col>
          <profile-my-data></profile-my-data>
        </v-col>
        <v-col>
          <profile-my-analytics></profile-my-analytics>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import ProfilePreview from "@/components/profilePreview";
import ProfileMyData from "@/components/profileMyData";
import ProfileMyAnalytics from "@/components/profileMyAnalytics";

export default {
  name: " MyProfile",
  components: {ProfileMyAnalytics, ProfileMyData, ProfilePreview},
}

</script>

<style scoped>
#myProfile-style {
  font-family: Inter2;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  background-Color: #d9d9d9;

}
</style>