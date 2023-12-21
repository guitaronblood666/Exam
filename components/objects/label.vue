<template>
<label :class="labelclass">{{label}}</label>
</template>

<script>
	export default {
		props: ['labelclass','label']
	}
</script>