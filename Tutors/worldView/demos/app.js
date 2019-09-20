window.onload = function() {
  var menuList= [
    {
      title: "一"
    },
    {
      title: "二"
    },
    {
      title: "三"
    }
  ]

  menuList.forEach(function(item){
    document.getElementsByClassName('menu')[0].appendChild(createMenuItem(item))
  })
};

function createMenuItem(menu){
  var ele = document.createElement('div')
  ele.classList.add('menu-item')
  ele.textContent= menu.title

  ele.addEventListener('click',clickMe)
  return ele
}

function clickMe(evt){
  let menuItems = document.getElementsByClassName('menu-item')
  for (let idx = 0; idx < menuItems.length; idx++) {
    const ele = menuItems[idx];
    ele.classList.remove('selected')
  }

  evt.target.classList.add('selected')
}
