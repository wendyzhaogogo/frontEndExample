Vue.component('myComponent', {
  template:
    "<div :style='myclass'>" +
      "<div>{{prop1}}</div>" +
      "<div>{{myclass}}</div>" +
    "</div>",
  props: ['prop1'],
  data () {
    return {
      innerValue: "innerValue",
      myclass: {
        backgroundColor: 'pink'
      }
    }
  }
})