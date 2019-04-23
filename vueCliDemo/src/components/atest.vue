<!--  -->
<template>
  <div>  我是插槽<slot :a="a"></slot></div>
</template>

<script>
export default {

  props: {},

  data () {
    return {
      a:'nebudezhi'
    };
  },

 components: {
},

  computed: {
},

  mounted(){},

  methods: {
}
}

</script>
<style  scoped>
</style>