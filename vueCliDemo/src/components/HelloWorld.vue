<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
  
    <atest>
      <template slot-scope="a">
        {{awaibu}}
      </template>
    </atest>

  </div>
</template>

<script>
import atest from "./atest";

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      awaibu: 'waibu得知'
    }

  },
  components: {
    atest
  },
  methods: {
    testlinq () {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
