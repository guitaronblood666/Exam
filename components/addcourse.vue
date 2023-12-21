<template>
<div class="grid min-[768px]:grid-cols-[50%_50%] w-full">
<LabelTextbox
	v-for="item in course"
	:label="item.courselabel"
	:placeholder="item.courselabel"

/>
</div>

</template>

<script>
	import LabelTextbox from '@/components/objects/labeltextbox.vue'
	export default {
		data(){
			return {
				game: {
					btnclass:'block mr-0 ml-auto -mt-5',
					btnimg:'gamespread.svg',
					gametag:'人気'
				},
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