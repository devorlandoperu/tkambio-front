<template>
  <section>
      <h1 class="main">Generador de reportes TK</h1>

      <icon-loader v-if="reports.length==0"/>

      <ui-table v-else :reports="reports"/>

      <div
          @click="showModal = true"
          class="section-botton">
          <ui-botton />
      </div>

      <ui-modal
          v-if="showModal"
          @processEvent="doGenerateReport"
          @closeModal="showModal = false"
      >

        <h1 slot="header">Reporte por fecha de nacimiento</h1>

        <template slot="body">
          <h4>Ingresa los siguientes datos para generar tu reporte</h4>

          <fieldset class="wrap-field">
            <legend>Descripción del reporte</legend>
            <input type="text" v-model="descriptionReport">
          </fieldset>

          <div class="frm-title">Fecha de nacimiento</div>

          <div class="date-section">
            <fieldset class="wrap-field">
              <legend class="date-title">Inicio</legend>
              <input type="date" v-model="startBirthDate" min="1980-01-01" max="2010-12-30">
            </fieldset>

            <fieldset class="wrap-field">
              <legend class="date-title">Fin</legend>
              <input type="date" v-model="endBirthDate" min="1980-01-02" max="2010-12-31">
            </fieldset>
          </div>
        </template>
        <template slot="message">
          <div class="message" v-show="error">Todo los campos son obligatorios</div>
        </template>
      </ui-modal>

  </section>
</template>
<script>
import UiTable from "@/components/UI/table.vue"
import UiBotton from "@/components/UI/button.vue"
import UiModal from "@/components/UI/modal.vue"
import IconLoader from "@/components/icons/loader.vue"

import api from "@/api/reports.js"

export default {
  components:{UiTable, UiBotton, UiModal, IconLoader},
  data() {
    return{
      reports:[],
      showModal: false,
      error:false,
      descriptionReport:'',
      startBirthDate:'',
      endBirthDate:''
    }
  },
  created() {
    api.getReports()
       .then(reports => (this.reports = reports))
  },
  methods:{
    resetData(){
      this.showModal =  false,
      this.descriptionReport = '',
      this.startBirthDate = '',
      this.endBirthDate = ''
    },
    doGenerateReport(){
      const token = this.$csrfToken()

      if(this.descriptionReport != '' && this.startBirthDate != '' && this.endBirthDate != '') {

        api.generateReport(this.descriptionReport,this.startBirthDate, this.endBirthDate, token)
         .then(reports => this.resetData())
      }
      else{
        this.error = true;
      }
    }
  }
}
</script>
<style lang="sass" scoped>
.modal-body h4
  margin-bottom: 38px

legend
  color: #696969
  text-align: left
  margin-left: 37px
  padding: 0 10px
  font-size: 12px

legend.date-title
  margin-left: 10px
  margin-left: 5px
  padding: 0 6px

fieldset.wrap-field
  border-radius: 6px
  border: 1px solid rgba(0, 0, 0, 0.12)
  width: 100%
  height: 54px

fieldset
  input
    width: 97%
    height: 77%
    border: none

.date-section
  display: grid
  grid-template-columns: 1fr 1fr
  grid-column-gap: 10px

.frm-title
  margin: 15px 0
  text-align: left
  color: #696969
  font-size: 12px

.message
  color: red
  text-align: center
  display: block
  margin-top: 15px
  font-family: tkl
  font-weight: 300
</style>
