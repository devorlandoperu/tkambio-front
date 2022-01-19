<template>
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">

              <div class="modal-header">
                <slot name="header">
                  default header
                </slot>
                <span @click="$emit('closeModal')" class="close-modal">x</span>
              </div>

              <div class="modal-body">
                <slot name="body">
                  default body
                </slot>
              </div>

              <div class="modal-footer">
                <slot name="footer">
                  <ui-button @btnClick="$emit('processEvent')">
                    <div slot="name">Generar Reporte</div>
                  </ui-button>
                </slot>

                <div class="message">
                  <slot name="message">
                      default message
                  </slot>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
</template>
<script>
import UiButton from "@/components/UI/button.vue"
export default {
  components:{UiButton},
}
</script>
<style lang="sass" scoped>
.modal-mask
  position: fixed
  z-index: 9998
  top: 0
  left: 0
  width: 100%
  height: 100%
  background-color: rgba(69, 99, 230, 0.5)
  display: table
  transition: opacity 0.3s ease

.modal-wrapper
  display: table-cell
  vertical-align: middle

.modal-container
  width: 526px
  margin: 0px auto
  padding: 30px
  background-color: #fff
  position: relative
  border-radius: 10px
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33)
  transition: all 0.3s ease
  font-family: tkm

.modal-header
  text-align: center
  h1
    font-family: tkm
    margin-top: 0
    color: #181818

.modal-body
  margin: 20px 0
  font-family: tkl
  font-weight: 300
  text-align: center

.modal-body h4
  margin-bottom: 38px
  font-weight: 300
  font-size: 16px

.modal-default-button
  float: right

.modal-enter
  opacity: 0

.modal-leave-active
  opacity: 0

.modal-enter .modal-container,
.modal-leave-active .modal-container
  -webkit-transform: scale(1.1)
  transform: scale(1.1)

.modal-footer
  text-align: center

.close-modal
  position: absolute
  top: 0
  right: 15px
  cursor: pointer

</style>
