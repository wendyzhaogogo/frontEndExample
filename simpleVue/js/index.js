window.onload = function () {
  new Vue({
    el: '#app',
    data () {
      return {
        name: 1,
        test: "test",
        eee: {
          
        }
      }
    },
    mounted:function(){
      this.eee.a = 2
    },
    methods: {
      clickme () {
        console.log(this)
        this.name += 1
        alert("我被点击啦")
      },
     
    }
  })
}