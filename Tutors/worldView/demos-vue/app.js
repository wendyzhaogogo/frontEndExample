window.onload = function() {
  new Vue({
    el: "#app",
    data() {
      return {
        menuList: [
          {
            title: "一"
          },
          {
            title: "二"
          },
          {
            title: "三"
          }
        ],
        selectedMenu: null
      };
    },
    methods: {
      clickMe(item) {
        this.selectedMenu = item;
      }
    }
  });
};
