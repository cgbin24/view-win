<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ViewWin from 'view-win'

const ele = ref<HTMLElement>()
const eleH = ref<HTMLElement>()
const list = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'rmListener', 'JQuery', 'Angular', 'React', 'Vue', 'Nodejs', 'npm', 'nrm', 'nvm']
const viewWinV = ref()
const viewWinH = ref()
onMounted(() => {
  console.log(ViewWin);
  
  viewWinV.value = new ViewWin({
    target: ele.value,
    direction: 'x',
    vmid: true
  })
  viewWinH.value = new ViewWin({
    target: eleH.value,
    direction: 'x',
    vmid: true
  })
  // viewWin.value = ViewWin.create({
  //   target: ele.value,
  //   direction: 'x',
  //   vmid: true
  // })
  // ViewWin.create({
  //   target: eleH.value,
  //   direction: 'x',
  //   vmid: true
  // })
  
})

const handleRemove1 = () => {
  viewWinV.value.rmEvent()
}
const handleRemove2 = () => {
  viewWinH.value.rmEvent()
}

</script>

<template>
  <ul id="list" ref="ele">
    <li :class="{'rmListener': item === 'rmListener'}" v-for="item in list" @click="item === 'rmListener' && handleRemove1()">{{ item }}</li>
  </ul>
  <ul id="listH" ref="eleH">
    <li :class="{'rmListener': item === 'rmListener'}" v-for="item in list" @click="item === 'rmListener' && handleRemove2()">{{ item }}</li>
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
ul#listH {
  position: absolute;
  // top: 50%;
  // left: 50%;
  // transform: translate(-50%, -50%);
  margin: 100px;
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
