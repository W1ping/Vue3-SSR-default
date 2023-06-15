<template>
  <div text-center>
    自定义 icon
    <icon-demo-logo />
    图标库icon
    <icon-mdi:alpha-j />
    <icon-mdi:alpha-y />
    <icon-mdi:alpha-q />
  </div>

  <div>{{ userStore.name }}的年龄： {{ userStore.age }}</div>
  <br />
  <el-button @click="addAge">点击给{{ userStore.name }}的年龄增加一岁</el-button>
  <br />
</template>

<script setup>
  import useUserStore from '@/store/user'

  const userStore = useUserStore()

  const addAge = () => {
    userStore.updateAge(++userStore.age)
  }
</script>
