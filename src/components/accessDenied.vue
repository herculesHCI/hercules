<template>
  <div class="accessDenied-page">
    <h1>Oops..</h1>
    <h2>No tiene los permisos requeridos para visualizar esta pagina</h2>
    <h1>⛔</h1>
  </div>
</template>

<script>
export default {
  name: "accessDenied"
}
</script>

<style scoped>
.accessDenied-page{
  font-family: Inter2;
  background-color: #d9d9d9;
}
h1{
  font-size:7em;
}
h2{
  padding-left: 50px;
  font-size:3em;
}
</style>