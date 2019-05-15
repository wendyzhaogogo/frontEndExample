import App from "./App.vue";
console.log('test beforeexport')
console.log(App)
export default {
  a() {
    return App
  }
}