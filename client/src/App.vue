<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <input type="text" placeholder="username" v-model="username" />
      <input type="text" placeholder="words" v-model="words" />
      <button v-on:click="submit">提交</button>
    </div>
    <div class="list">
      <div>
        <p>words: keep coding</p>
        <p>name: wry</p>
        <p>status: success</p>
        <p>date: 2017.09.21</p>
      </div>
      <div>
        <p>words: keep coding</p>
        <p>name: wry</p>
        <p>status: success</p>
        <p>date: 2017.09.21</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      username: '',
      words: ''
    }
  },
  methods: {
    submit: function(event) {
      fetch('http://localhost:3001/', {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: this.username,
            words: this.words
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

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

.list div{
  font-size: 10px;
  margin: 0 auto 20px auto;
  width: 200px;
  text-align: left;
  border-bottom: 1px solid #E6E6E6;
}
.list p{
  margin: 2px 0;
}
</style>
