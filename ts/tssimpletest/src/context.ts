document.body.onclick = function(ev) {
  console.log(ev.button); //<- Error!
}

interface inteA {
  method1?:(para:number)=>void
}



export {
  inteA
}
