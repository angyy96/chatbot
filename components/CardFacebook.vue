<script lang="ts" setup>
const { chat, state, firstMessage } = useChatAi({ agent: "facebook" })
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
</script>

<template>
  <CardGeneric
    title="Facebook"
    :state="state"
    :body="announcement"
    class="mb-10"
  >
    <button class="btn btn-neutral" @click="generate">Regenerate</button>
    <a target="_blank" class="btn btn-primary">Post</a>
  </CardGeneric>
</template>

<style scoped></style>
