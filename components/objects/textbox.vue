<template>
 <input :class="class" :type="type" :placeholder="placeholder"/>
</template>

<script>
	export default {
		props: ['class','type','placeholder']
	}
</script>