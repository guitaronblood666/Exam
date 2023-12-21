<template>
<li :class="class"> {{ label }} </li>
</template>

<script>
	export default {
		props: ['class','label']
	}
</script>