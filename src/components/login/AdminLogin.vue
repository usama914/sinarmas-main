<template>
  <section>
    <div class="access">
      <img src="../../assets/login.PNG" alt="" />
    </div>
    <form @submit.prevent="submitForm">
      <input v-model.trim="username" type="text" placeholder="username" />
      <!-- <input v-model.trim="email" type="email" placeholder="admin@gmail.com" /> -->
      <input v-model.trim="password" type="password" placeholder="*******" />
      <p v-if="formIsValid" style="color: red">
        Please enter a valid Name and password (must be at least 6 characters
        long).
      </p>
      <!-- <input
        v-model="confirmPassword"
        type="password"
        placeholder="confirm password"
      /> -->

      <button type="submit">Log in</button>
    </form>
    <span><a href="">Forgot Password</a></span>
  </section>
</template>

<script>
 import { mapActions } from 'vuex';

export default {
data(){
    return{
        username:'',
        // email:'',
        password:'',
        // confirmPassword:'',
        formIsValid:false,
    };
},

  methods: {
    ...mapActions(['login']),
    submitForm() {
      this.login({ username: this.username, password: this.password })
        .then(() => {
           this.$router.push('/admindashboard');
        })
        .catch((error) => {
          // Handle login error
          console.error(error);
        });
    },
  },
}
</script>

<style scoped>
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
input {
  width: 100%;
  padding: 7px 5px;
}
button {
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