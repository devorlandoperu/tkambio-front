<template>
  <button  @click="$emit('btnClick')">
    <slot name="name">
      Crear reporte
    </slot>
  </button>
</template>
<script>
export default {

}
</script>
<style lang="sass">
.section-botton
  text-align: center
  margin-top: 30px

button
  width: 187px
  height: 43px
  background-color: #FFBE12
  border-radius: 50px
  border: none
  font-family: tkr
  cursor: pointer
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
  &:hover
    background-color: #CFCFCF
</style>
