<template>
	<div class="grid ml-4">
		<label class="w-full text-white">{{label}}</label>
		<input class="ml-8 mr-4 w-4/5 h-[28px] rounded px-2 border border-blue-800" type="textbox" :placeholder="placeholder" :value="value"/>
	</div>
</template>

<script>
	export default {
		props: ['label','placeholder','value']
	}
</script>