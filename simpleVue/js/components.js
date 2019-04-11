Vue.component('myComponent', {
  template:
    "<div :style='myclass'>" +
    "<div>{{prop1}}</div>" +
    "<div>{{myclass}}</div>" +
    "<button @click='clickme'> clickmeinnner</button>"+
    "</div>"+
    "",
  props: ['prop1'],
  data () {
    return {
      innerValue: "innerValue",
      myclass: {
        backgroundColor: 'pink'
      }
    }
  },
  mounted () {
    this.$watch(function () {
      return this.prop1.value
    }, function (val, old) {
      console.log('prop1.value from ', old, ' to ', val)
    })
  },
  methods: {
    clickme () {
      let _this = this
      // console.log(this)

      this.prop1.value += 1
      this.$nextTick(function () {
        console.log('nexttick')
      })

      // alert("我被点击啦")
    },
  }
})