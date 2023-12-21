<template>
	<div class="bg-sky-600 mt-[-5px] mx-auto">
		<Courses
			v-for="item in tiles"
				:labelclass="item.labelclass"
				:label="item.label"
				:sublabelclass="item.sublabelclass"
				:sublabel="item.sublabel"
			/> 
	</div>
</template>

<script>
	import Courses from '@/components/courses.vue'
	export default {
		data(){
        	return {
				tiles: [
					{
						labelclass: 'text-xl absolute left-3 top-3 text-sky-900',
						label: 'Course One',
						sublabelclass: 'text-[10px] absolute left-3 top-12 mr-3',
						sublabel: 'Initial Course Description'
					},
					{
						labelclass: 'text-xl absolute left-3 top-3 text-sky-900',
						label: 'Course Two',
						sublabelclass: 'text-[10px] absolute left-3 top-12 mr-3',
						sublabel: 'Initial Course Description'
					},
					{
						labelclass: 'text-xl absolute left-3 top-3 text-sky-900',
						label: 'Course Three',
						sublabelclass: 'text-[10px] absolute left-3 top-12 mr-3',
						sublabel: 'Initial Course Description'
					},
					{
						labelclass: 'text-xl absolute left-3 top-3 text-sky-900',
						label: 'Course Four',
						sublabelclass: 'text-[10px] absolute left-3 top-12 mr-3',
						sublabel: 'Initial Course Description'
					},
					{
						labelclass: 'text-xl absolute left-3 top-3 text-sky-900',
						label: 'Course Five',
						sublabelclass: 'text-[10px] absolute left-3 top-12 mr-3',
						sublabel: 'Initial Course Description'
					},
					{
						labelclass: 'text-xl absolute left-3 top-3 text-sky-900',
						label: 'Course Six',
						sublabelclass: 'text-[10px] absolute left-3 top-12 mr-3',
						sublabel: 'Initial Course Description'
					}
	        	]
			}
		},
		components: {
			Courses
		}
	}
</script>