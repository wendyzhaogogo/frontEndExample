//保证是在页面加载完成后才执行
window.onload = function() {
  /**
   * 假装是从服务器获取的数据
   */
  var menuList = [
    {
      title: "一"
    },
    {
      title: "二"
    },
    {
      title: "三"
    }
  ];

  /**
   * 循环菜单列表，一个一个添加菜单到菜单列表
   */

  el_menu = document.getElementsByClassName("menu")[0];
  menuList.forEach(function(item) {
    el_menu.appendChild(createMenuItem(item));
  });
};

/**
 * 根据菜单配置对象，生成一个菜单的Dom节点，然后返回
 * @param {*} menu 菜单配置对象
 */
function createMenuItem(menu) {
  //创建div元素
  var ele = document.createElement("div");
  //给div元素增加初始样式类
  ele.classList.add("menu-item");
  //给div元素设置要显示的文本
  ele.textContent = menu.title;
  //给div元素绑定事件
  ele.addEventListener("click", clickMe);
  return ele;
}

//按钮点击事件
function clickMe(evt) {
  //获取所有菜单按钮,清除选中状态类
  let menuItems = document.getElementsByClassName("menu-item");
  for (let idx = 0; idx < menuItems.length; idx++) {
    const ele = menuItems[idx];
    ele.classList.remove("selected");
  }

  //为刚刚点击的按钮增加选中状态类
  evt.target.classList.add("selected");
}
