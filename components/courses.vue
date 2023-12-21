<template>
  <div class="CourseContainer" ref="courseContainer" @click="handleContainerClick">
    <div class="relative bg-white m-1 min-h-[110px] rounded-lg">
      <Label :labelclass="labelclass" :label="label" />
      <Label :labelclass="sublabelclass" :label="sublabel" />
      <Button :class="course.editclass" @click="toggleEditCourse">{{ course.editlabel }}</Button>
      <Button :class="course.detailclass" @click="toggleCourseDetail">{{ course.detaillabel }}</Button>
    </div>
    <EditCourse v-if="showEditCourse" />
    <Button v-if="showEditCourse" @click="closeEditCourse" :class="edit.buttonclass">
      {{ edit.buttonlabel }}
    </Button>
    <ShowCourse v-if="showCourseDetail" />
  </div>
</template>

<script>
import Label from '@/components/objects/label.vue';
import Button from '@/components/objects/button.vue';
import EditCourse from '@/components/editcourse.vue';
import ShowCourse from '@/components/showcourse.vue';

export default {
  data() {
    return {
      course: {
        editclass: 'absolute bottom-3 right-32 text-blue-500',
        editlabel: 'Edit Course',
        detailclass: 'absolute bottom-3 right-3 text-blue-500',
        detaillabel: 'View Details',
      },
      edit: {
        buttonclass: 'bg-sky-900 text-white px-4 h-9 rounded-lg leading-4 block mt-2 mx-auto text-center',
        buttonlabel: 'Edit Course',
      },
      showEditCourse: false,
      showCourseDetail: false,
    };
  },
  props: ['labelclass', 'label', 'sublabelclass', 'sublabel'],
  methods: {
    toggleEditCourse() {
      if (this.showCourseDetail) {
        this.showCourseDetail = false;
      }
      this.showEditCourse = !this.showEditCourse;
    },
    toggleCourseDetail() {
      if (this.showEditCourse) {
        this.showEditCourse = false;
      }
      this.showCourseDetail = !this.showCourseDetail;
    },
    closeEditCourse() {
      this.showEditCourse = false;
    },
    handleContainerClick() {
      this.$nextTick(() => {
        const courseContainer = this.$refs.courseContainer;
        if (!courseContainer.contains(event.target) && (this.showEditCourse || this.showCourseDetail)) {
          this.showEditCourse = false;
          this.showCourseDetail = false;
        }
      });
    },
    handleDocumentClick(event) {
      const courseContainer = this.$refs.courseContainer;
      if (!courseContainer.contains(event.target) && (this.showEditCourse || this.showCourseDetail)) {
        this.showEditCourse = false;
        this.showCourseDetail = false;
      }
    },
  },
  mounted() {
    document.body.addEventListener('click', this.handleDocumentClick);
  },
  beforeDestroy() {
    document.body.removeEventListener('click', this.handleDocumentClick);
  },
  components: {
    Label,
    Button,
    EditCourse,
    ShowCourse,
  },
};
</script>
