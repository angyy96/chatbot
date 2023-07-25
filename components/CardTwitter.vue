<script lang="ts" setup>
import type { AsyncState } from "~~/types"
const announcement = ref("My generated tweet")
const state = ref<AsyncState>("complete")
</script>

<template>
  <CardGeneric title="Twitter" :state="state" :body="announcement">
    <div class="flex w-full justify-between items-center">
      <div class="text-xs">
        Character count: <strong>{{ announcement.length }}</strong>
      </div>
      <div class="flex gap-10">
        <button class="btn btn-neutral">Regenerate</button>
        <a target="_blank" class="btn btn-primary">Post</a>
      </div>
    </div>
  </CardGeneric>
</template>

<style scoped></style>
