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

const postUrl = computed(
  () =>
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      props.url ?? ""
    )}`
)

const { copy } = useClipboard()
const post = () => {
  copy(announcement.value ?? "")

  setTimeout(() => window.open(postUrl.value, "_blank"), 500)
}
</script>

<template>
  <CardGeneric
    title="Facebook"
    :state="state"
    :body="announcement"
    class="mb-10"
  >
    <button class="btn btn-neutral" @click="generate">Regenerate</button>
    <a
      :href="postUrl"
      target="_blank"
      class="btn btn-primary"
      @click.prevent="post"
      >Copy Announcement and Post</a
    >
  </CardGeneric>
</template>

<style scoped></style>
