<template>
  <main>
    <aside>
      <div class="logo">
        <img src="../assets/logo.png" alt="" />
      </div>
      <div class="admin">
        <img src="../assets/admin.png" alt="" />
        <h5 class="title">Daniel Ric</h5>
        <span>Admin</span>
      </div>
      <div class="links">
        <ul>
          <router-link to="/admindashboard">
            <li><i class="fa-solid fa-house"></i><span>Dashboard</span></li>
          </router-link>
          <router-link to="/usermanagement">
            <li>
              <i class="fa-solid fa-user-group"></i><span>User Management</span>
            </li>
          </router-link>
          <router-link to="/leaderboard">
            <li>
              <i class="fa-solid fa-person-chalkboard"></i
              ><span>Leader Board</span>
            </li>
          </router-link>
          <router-link to="/">
            <li>
              <i class="fa-solid fa-right-from-bracket"></i><span>Log Out</span>
            </li>
          </router-link>
        </ul>
      </div>
    </aside>

    <section class="interface">
      <div class="header">
        <h1>Leader Board</h1>
      </div>
      <table class="table table-bordered table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Rank #</th>
            <th scope="col">User Full Name</th>
            <th scope="col">Username</th>
            <th scope="col">Score</th>
          </tr>
        </thead>
        <div v-if="isLoading" class="sk-fading-circle">
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
        <tbody v-if="!isLoading">
          <tr v-for="det in leaderBoard" :key="det._id">
            <th scope="row">{{ det.playerRank }}</th>
            <td>{{ det.username }}</td>
            <td>{{ det.username }}</td>
            <td>{{ det.score }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
</template>

<script>
import axios from 'axios';
export default {
data(){
  return{
    leaderBoard:null,
    isLoading:false
  };
},
  mounted(){
    this.fetchData()
  },
methods:{
  logout(){
  localStorage.removeItem('token');
   this.data = null;
  this.$router.push('/');
  // Check if the token is removed
  const token = localStorage.getItem('token');
      if (token === null) {
        console.log('Token removed from local storage');
      } else {
        console.log('Token still exists in local storage');
      }
},
  fetchData(){
    this.isLoading=true
    const token=localStorage.getItem('token');
    const headers={
      Authorization:`Bearer ${token}`,
    };
    axios.get('https://smdd-server.onrender.com/score/leaderboard',{headers})
    .then(response=>{
      this.isLoading=false
      this.leaderBoard=response.data.leaderboard;
      // console.log(response.data)
    })
    .catch(error=>{
      console.error(error);
    })
  }
}
}
</script>

<style scoped>
.logo {
  margin-top: 3rem;
  height: 8rem;
}
a {
  text-decoration: none;
}
main {
  display: flex;
  background: var(--bg-primary-100);
}

aside {
  position: relative;
  height: 100vh;
  width: 350px;
  /* text-align: center; */
  color: var(--bg-primary-300);
  /* display: flex;
  flex-direction: column;
  align-items: center; */
}
.links {
  margin: 25px 0;
}
.admin {
  text-align: center;
  margin-top: 15px;
}

.admin img {
  border-radius: 50%;
  width: 100px;
}
.links span {
  margin-left: 15px;
}

ul li {
  list-style: none;
  color: black;
  text-align: start;
  color: var(--bg-primary-300);
  line-height: 40px;
  width: 210px;
  padding: 5px 10px;
  cursor: pointer;
}
ul li:hover {
  background-color: var(--bg-primary-400);
  color: var(--bg-primary-200);
  border-radius: 10px;
}

/* interface */
section {
  background: var(--bg-primary-200);
  width: 100%;
  border-radius: 40px 0px 0px 40px;
  /* margin-left: -34px; */
  z-index: 1;
  padding: 5rem;
}
table {
  margin-top: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 15px !important;
  cursor: pointer;
  overflow: hidden;
}

tr:nth-child(even) {
  background-color: white;
}
thead tr {
  background-color: white;
}
th {
  padding: 15px;
}

/* spinner */
.sk-fading-circle {
  margin: 10px auto;
  width: 50px;
  height: 50px;
  position: relative;
}

.sk-fading-circle .sk-circle {
  width: 60%;
  height: 60%;
  position: absolute;
  left: 570px;
  top: 10px;
}

.sk-fading-circle .sk-circle:before {
  content: "";
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: red;
  border-radius: 100%;
  -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;
  animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;
}

.sk-fading-circle .sk-circle2 {
  -webkit-transform: rotate(30deg);
  -ms-transform: rotate(30deg);
  transform: rotate(30deg);
}

.sk-fading-circle .sk-circle3 {
  -webkit-transform: rotate(60deg);
  -ms-transform: rotate(60deg);
  transform: rotate(60deg);
}

.sk-fading-circle .sk-circle4 {
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
}

.sk-fading-circle .sk-circle5 {
  -webkit-transform: rotate(120deg);
  -ms-transform: rotate(120deg);
  transform: rotate(120deg);
}

.sk-fading-circle .sk-circle6 {
  -webkit-transform: rotate(150deg);
  -ms-transform: rotate(150deg);
  transform: rotate(150deg);
}

.sk-fading-circle .sk-circle7 {
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}

.sk-fading-circle .sk-circle8 {
  -webkit-transform: rotate(210deg);
  -ms-transform: rotate(210deg);
  transform: rotate(210deg);
}

.sk-fading-circle .sk-circle9 {
  -webkit-transform: rotate(240deg);
  -ms-transform: rotate(240deg);
  transform: rotate(240deg);
}

.sk-fading-circle .sk-circle10 {
  -webkit-transform: rotate(270deg);
  -ms-transform: rotate(270deg);
  transform: rotate(270deg);
}

.sk-fading-circle .sk-circle11 {
  -webkit-transform: rotate(300deg);
  -ms-transform: rotate(300deg);
  transform: rotate(300deg);
}

.sk-fading-circle .sk-circle12 {
  -webkit-transform: rotate(330deg);
  -ms-transform: rotate(330deg);
  transform: rotate(330deg);
}

.sk-fading-circle .sk-circle2:before {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}

.sk-fading-circle .sk-circle3:before {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}

.sk-fading-circle .sk-circle4:before {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}

.sk-fading-circle .sk-circle5:before {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}

.sk-fading-circle .sk-circle6:before {
  -webkit-animation-delay: -0.7s;
  animation-delay: -0.7s;
}

.sk-fading-circle .sk-circle7:before {
  -webkit-animation-delay: -0.6s;
  animation-delay: -0.6s;
}

.sk-fading-circle .sk-circle8:before {
  -webkit-animation-delay: -0.5s;
  animation-delay: -0.5s;
}

.sk-fading-circle .sk-circle9:before {
  -webkit-animation-delay: -0.4s;
  animation-delay: -0.4s;
}

.sk-fading-circle .sk-circle10:before {
  -webkit-animation-delay: -0.3s;
  animation-delay: -0.3s;
}

.sk-fading-circle .sk-circle11:before {
  -webkit-animation-delay: -0.2s;
  animation-delay: -0.2s;
}

.sk-fading-circle .sk-circle12:before {
  -webkit-animation-delay: -0.1s;
  animation-delay: -0.1s;
}

@-webkit-keyframes sk-circleFadeDelay {
  0%,
  39%,
  100% {
    opacity: 0;
  }

  40% {
    opacity: 1;
  }
}

@keyframes sk-circleFadeDelay {
  0%,
  39%,
  100% {
    opacity: 0;
  }

  40% {
    opacity: 1;
  }
}
</style>