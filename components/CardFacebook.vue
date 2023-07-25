<script lang="ts" setup>
import type { AsyncState } from "~~/types"
const announcement = ref("My generated tweet")
const state = ref<AsyncState>("complete")
</script>

<template>
  <CardGeneric
    title="Facebook"
    :state="state"
    :body="announcement"
    class="mb-10"
  >
    <button class="btn btn-neutral">Regenerate</button>
    <a target="_blank" class="btn btn-primary">Post</a>
  </CardGeneric>
</template>

<style scoped></style>
