<template>
	<Button :class="buttonclass">
		<img :src="`/assets/image/${btnimg}`" :class="btnimgclass"/>
		<label :class="labelclass">{{label}}</label>
	</Button>
</template>

<script>
	import Button from '@/components/objects/button.vue'
	export default {
		props: ['buttonclass','btnimg','btnimgclass','label','labelclass'],
		components: {
			Button
		}
	}
</script>


