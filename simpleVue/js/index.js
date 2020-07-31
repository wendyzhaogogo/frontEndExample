window.onload = function () {
  new Vue({
    el: "#app",
    data() {
      return {
        name: {
          value: 1,
          value2: 0,
        },
        test: "test",
        eee: {},
      };
    },
    mounted: function () {
      let _this = this;
      this.eee.a = 2;
    },
    methods: {
      clickme() {
        let _this = this;
        // console.log(this)
        console.log(arguments);
        // this.name.value += 1;
        // this.$nextTick(function () {
        //   console.log("nexttick");
        // });

        // alert("我被点击啦")
      },
    },
    watch: {
      value() {
        this.value2 += 1;
      },
      value2() {
        this.value += 1;
      },
    },
  });
};
