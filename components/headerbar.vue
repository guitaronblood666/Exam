<template>
	<header class="h-14 bg-sky-600 text-center sticky top-0 w-full z-20">
		<ButtonWithIcon 
			:btnimg="logo2.logosrc" 
			:class="[logo2.logoclass]"
		/>
	</header>
</template>
<script>
	import ButtonWithIcon from '@/components/objects/buttonwithicon.vue'
	export default {
		data(){
			return {
				logo2: {
					logoclass: 'mb-0 mx-auto h-14 w-20 -top-5',
					logosrc: 'logo.png'
				}
			}
		},
		components: {
			ButtonWithIcon,
		}
	}
</script>