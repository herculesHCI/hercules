<template>
  <div id="myProfile-style">
    <profile-preview></profile-preview>
    <div>
          <profile-my-data></profile-my-data>
    </div>
  </div>
</template>

<script>
import ProfilePreview from "@/components/profilePreview";
import ProfileMyData from "@/components/profileMyData";

export default {
  name: " MyProfile",
  components: {ProfileMyData, ProfilePreview},
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