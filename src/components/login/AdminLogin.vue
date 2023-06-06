<template>
  <section>
    <div class="access">
      <img src="../../assets/login.png" alt="" />
    </div>
    <form @submit.prevent="login">
      <input type="text" id="username" v-model="username" required />
      <input type="password" id="password" v-model="password" required />

      <button type="submit">
        <div v-if="isLoading" class="spinner">
          <div class="sk-fading-circle">
            <div class="sk-circle1 sk-circle"></div>
            <div class="sk-circle2 sk-circle"></div>
            <div class="sk-circle3 sk-circle"></div>
            <div class="sk-circle4 sk-circle"></div>
            <div class="sk-circle5 sk-circle"></div>
            <div class="sk-circle6 sk-circle"></div>
            <div class="sk-circle7 sk-circle"></div>
            <div class="sk-circle8 sk-circle"></div>
            <div class="sk-circle9 sk-circle"></div>
            <div class="sk-circle10 sk-circle"></div>
            <div class="sk-circle11 sk-circle"></div>
            <div class="sk-circle12 sk-circle"></div>
          </div>
        </div>
        <span v-if="!isLoading">Login</span>
      </button>
    </form>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
      isLoading:false
    };
  },
  methods: {
    login() {
      const credentials = {
        username: this.username,
        password: this.password,
      };
this.isLoading=true
      axios.post('https://smdd-server.onrender.com/api/login', credentials)
        .then(response => {
this.isLoading=false
          // Save the token in local storage
          const token = response.data.token;

          localStorage.setItem('token', token);
          // Redirect the user to the main page or perform any other action
          this.$router.push('/AdminDashboard');
        })
        .catch(error => {
          // Handle login error
          console.error(error);
        });
    },
  },
  created() {
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  },
};
</script>

<style scoped>
p {
  width: 100%;
  height: 100vh;
  text-align: center;
}
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.access {
  text-align: center;
  margin-bottom: 2rem;
}
.access img {
  width: 50%;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 350px;
}
form input {
  width: 100%;
  padding: 7px 5px;
}
form button {
  width: 100%;
  padding: 10px;
  border: none;
  background: #de0e13;
  color: white;
  font-weight: bold;
  border-radius: 4px;
}
span {
  margin-top: 1rem;
}
a {
  text-decoration: none;
}
</style>