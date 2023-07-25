<script lang="ts" setup>
const { chat, state, firstMessage } = useChatAi({ agent: "twitter" })
const announcement = computed(() => firstMessage.value?.content ?? "")

interface Props {
  url: string
  temperature: number
}
const props = defineProps<Props>()

const generate = () => nextTick(() => chat(props))

defineExpose({
  generate,
})

const postUrl = computed(
  () =>
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      announcement.value ?? ""
    )}`
)
</script>

<template>
  <CardGeneric title="Twitter" :state="state" :body="announcement">
    <div class="flex w-full justify-between items-center">
      <div class="text-xs">
        Character count: <strong>{{ announcement.length }}</strong>
      </div>
      <div class="flex gap-10">
        <button class="btn btn-neutral" @click="generate">Regenerate</button>
        <a :href="postUrl" target="_blank" class="btn btn-primary">Post</a>
      </div>
    </div>
  </CardGeneric>
</template>

<style scoped></style>
