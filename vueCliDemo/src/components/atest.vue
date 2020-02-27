<!--  -->
<template>
  <div>  我是插槽<slot :a="a"/></div>
</template>

<script>
export default {

  components: {
  },

  props: {},

  data () {
    return {
      a: 'nebudezhi'
    };
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