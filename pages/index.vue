<template>
	<HeaderBar/>
	<main>
		<CourseAddSearch/>
		<CourseList/>
	</main>
</template>
<script>
	import HeaderBar from '@/components/headerbar.vue'
	import CourseAddSearch from '@/components/courseaddsearch.vue'
	import CourseList from '@/components/courselist.vue'
	export default {
		components: {
			HeaderBar,
			CourseAddSearch,
			CourseList,
		}
	}
</script>