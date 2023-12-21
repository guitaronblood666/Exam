<template>
<button :class="class"><slot></slot></button>
</template>

<script>
	export default {
		props: ['class']
	}
</script>