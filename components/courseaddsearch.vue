<template>
  <div class="bg-sky-600" ref="courseContainer" @click="handleContainerClick">
    <div class="bg-sky-600 h-16 w-full py-4 mx-auto">
      <Label 
        :class="label.labelclass" 
        :label="label.labelmenu"
      />
      <ButtonWithIcon
        @click="toggleAddCourse"
        :class="logo.logoclass"
        :btnimg="logo.logosrc"
      />
      <input class="float-right ml-2 mr-4 w-2/5 h-[28px] rounded px-2" type="text" placeholder="Search courses.."/>
    </div>
    <AddCourse v-if="showAddCourse"/>
    <Button
      v-if="showAddCourse"
      @click="closeAddCourse"
      :class="addcourse.buttonclass">
      {{addcourse.buttonlabel}}
    </Button>
  </div>
</template>

<script>
import Label from '@/components/objects/label.vue'
import ButtonWithIcon from '@/components/objects/buttonwithicon.vue'
import Button from '@/components/objects/button.vue'
import AddCourse from '@/components/addcourse.vue'

export default {
  data() {
    return {
      addcourse: {
        buttonclass: 'bg-sky-900 text-white px-4 h-9 rounded-lg leading-4 block mt-2 mx-auto text-center',
        buttonlabel: 'Add Course'
      },
      logo: {
        logoclass: 'h-7 w-7',
        logosrc: 'plus-icon.png'
      },
      label: {
        labelmenu: 'Courses',
        labelclass: 'float-left ml-4 relative text-white'
      },
      showAddCourse: false,
    }
  },
  methods: {
    toggleAddCourse() {
      this.showAddCourse = !this.showAddCourse;
    },
    closeAddCourse() {
      this.showAddCourse = false;
    },
    handleContainerClick() {
      this.$nextTick(() => {
        const courseContainer = this.$refs.courseContainer;
        if (!courseContainer.contains(event.target) && this.showAddCourse) {
          this.showAddCourse = false;
        }
      });
    },
    handleDocumentClick(event) {
      const courseContainer = this.$refs.courseContainer;
      if (!courseContainer.contains(event.target) && this.showAddCourse) {
        this.showAddCourse = false;
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
    ButtonWithIcon,
    Button,
    Label,
    AddCourse
  }
}
</script>
