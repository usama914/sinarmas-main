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
        <tbody>
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
    const token=localStorage.getItem('token');
    const headers={
      Authorization:`Bearer ${token}`,
    };
    axios.get('https://smdd-server.onrender.com/score/leaderboard',{headers})
    .then(response=>{
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
</style>