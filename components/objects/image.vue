<template>
<img :src="`/assets/image/${image}`" :class="imgclass" />
</template>

<script>
	export default {
		props: ['imgclass','image']
	}
</script>