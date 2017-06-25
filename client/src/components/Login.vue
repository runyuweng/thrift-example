<template>
<div class="login">
  <input type="text" placeholder="username" v-model="username" />
  <button v-on:click="submit">提交</button>
</div>
</template>



<script>
export default {
  name: 'login',
  data() {
    return {
      username: '',
    }
  },
  methods: {
    submit: function(event) {
      fetch('http://localhost:3001/login', {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: this.username
          })
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
    }
  }
}
</script>





<style scoped>
h1,
h2 {
  font-weight: normal;
}

input,
button {
  padding: 0 10px;
  display: block;
  width: 200px;
  height: 22px;
  line-height: 20px;
  border-radius: 4px;
  border: 1px solid #E6E6E6;
  outline: none;
  margin: 20px auto;
}

button {
  background: #41B883;
  color: #fff;
  width: 220px;
  border: none;
  transition: all 0.5s;
}

button:hover {
  background: #35495E;
}
</style>
