window.onload = function () {
  new Vue({
    el: '#app',
    data () {
      return {
        name: 1,
        test:"test"
      }
    },
    methods: {
      clickme () {
        this.name += 1
        alert("我被点击啦")
      },
      classs(){

      }
    }
  })
}