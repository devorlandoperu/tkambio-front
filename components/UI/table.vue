<template>
  <table>
    <thead>
        <th>Titulo</th>
        <th>Fecha de creacion</th>
        <th>Accion</th>
    </thead>
    <tbody>
      <tr v-for="(report, index) in reports" :key="index">
        <td>{{report.title}}</td>
        <td>{{report.created_at}}</td>
        <td>
          <a v-on:click="doDownloadReport(report.id)">Descargar <icon-download /></a>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import IconDownload from "@/components/icons/download.vue"

import api from "@/api/reports.js"
export default {
  components:{IconDownload},
  props:{
    reports:{
      type:Array,
      required:true,
      default:()=>{
        return []
      }
    }
  },
  methods:{
    doDownloadReport(report_id){
      api.downloadReport(report_id)
    }
  }
}
</script>
<style lang="sass">
table
  font-family: tkr
  width: 100%
  background-color: #4563E6
  color: #FFFFFF
  text-align: center
  max-width: 690px
  margin: 0 auto
  padding: 10px 30px 40px 30px
  border-radius: 10px
  thead
    border-bottom: 4px solid #C4C4C4
    height: 44px
    th:nth-child(1)
      text-align: left
    th:nth-child(3)
      text-align: right
  tbody
    tr
      height: 44px
      td
        a
          cursor: pointer
          &:hover
            color: #FFBE12
            svg path
              fill: #FFBE12
      td:nth-child(1)
        text-align: left
      td:nth-child(3)
        text-align: right

</style>
