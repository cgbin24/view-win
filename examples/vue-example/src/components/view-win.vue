<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ViewWin from 'view-win'

const ele = ref<HTMLElement>()
const list = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'rmListener', 'JQuery', 'Angular', 'React', 'Vue', 'Nodejs', 'npm', 'nrm', 'nvm']
const viewWin = ref()
onMounted(() => {
  viewWin.value = new ViewWin({
    target: ele.value,
    direction: 'x',
    vmid: true
  })
})

const handleRemove = () => {
  viewWin.value.rmEvent()
}

</script>

<template>
  <ul id="list" ref="ele">
    <li :class="{'rmListener': item === 'rmListener'}" v-for="item in list" @click="item === 'rmListener' && handleRemove()">{{ item }}</li>
  </ul>
</template>

<style scoped lang="scss">
ul#list {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: auto;
  display: flex;
  align-items: center;
  width: 400px;
  height: 50px;
  border-radius: 5px;
  box-shadow: 0 0px 10px 2px rgba(0, 0, 0, 8%);
  li {
    flex-shrink: 0;
    font-size: 20px;
    cursor: pointer;
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
}
</style>
