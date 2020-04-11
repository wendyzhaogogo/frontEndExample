Vue.component("myComponent", {

  template: `
  <div class="class1">
    <slot name="slot1"></slot>
  </div>
  `,
  props: ["prop1"],
  data() {
    return {
      innerValue: "innerValue",
      myclass: {
        backgroundColor: "pink"
      }
    };
  },
  mounted() {
    
  },
  methods: {
   
  }
});
