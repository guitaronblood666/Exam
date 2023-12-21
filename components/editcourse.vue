<template>
<div class="grid min-[768px]:grid-cols-[50%_50%] w-full">
<LabelTextbox
	v-for="item in course"
	:label="item.courselabel"
	:value="item.courselabel"

/>
</div>

</template>

<script>
	import LabelTextbox from '@/components/objects/labeltextbox.vue'
	export default {
		data(){
			return {
				course: [
					{
						courselabel: 'Course Title',
					},
					{
						courselabel: 'Course Code',
					},
					{
						courselabel: 'Course Description',
					},
					{
						courselabel: 'Course Category',
					},
					{
						courselabel: 'Instructor',
					},
					{
						courselabel: 'Course Status',
					}
	        	]
			}
		},
		components: {
			LabelTextbox
		}
	}
</script>