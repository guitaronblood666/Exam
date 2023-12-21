<template>
  <div class="grid min-[768px]:grid-cols-[50%_50%] w-full">
    <div v-for="(item, index) in course" :key="index" class="grid ml-4">
      <label class="text-white w-full">{{ item.label }}</label>
      <label class="text-sky-900 ml-8 mr-4 w-4/5 h-[28px] rounded px-2">{{ item.value }}</label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      course: [
        {
          label: 'Course Title',
          value: 'Initial Course Title',
        },
        {
          label: 'Course Code',
          value: 'Initial Course Code',
        },
        {
          label: 'Course Description',
          value: 'Initial Course Description',
        },
        {
          label: 'Course Category',
          value: 'Initial Course Category',
        },
        {
          label: 'Instructor',
          value: 'Initial Instructor',
        },
        {
          label: 'Course Status',
          value: 'Initial Course Status',
        },
      ],
    };
  },
};
</script>
