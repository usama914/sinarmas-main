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
          <li @click="logout()">
            <i class="fa-solid fa-right-from-bracket"></i><span>Log Out</span>
          </li>
        </ul>
      </div>
    </aside>
    <section class="dashboard-content interface">
      <section class="user-info">
        <h2>Dashboard</h2>
        <div class="boxes">
          <div class="box">
            <img src="../assets/newuser.png" alt="" />
            <span>New Users</span>
            <span>{{ data }}</span>
          </div>
          <div class="box">
            <img src="../assets/activeusers.png" alt="" />
            <span>Active Users</span>
            <span>{{ data1 }}</span>
          </div>
          <div class="box">
            <img src="../assets/totalusers.png" alt="" />
            <span>Total Users</span>
            <span>{{ data2 }}</span>
          </div>
          <div class="box">
            <img src="../assets/game.png" alt="" />
            <span>Total Game Plays Today</span>
            <span>31</span>
          </div>
        </div>
      </section>
      <section class="leaderboard">
        <h2>Leader Board</h2>
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col">Rank #</th>
              <th scope="col">User Name</th>
              <th scope="col">Score</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="data in data3" :key="data.id">
              <th scope="row">{{ data.playerRank }}</th>
              <td>{{ data.username }}</td>
              <td>{{ data.score }}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </section>
  </main>
</template>

<script>
import axios from 'axios';
export default {
data(){
  return{
    data:null,
    data1:null,
    data2:null,
    data3:[],
  } 
},
mounted(){
  this.activeUsers()
},
methods:{
logout(){
  localStorage.removeItem('token');
   this.data = null;
   this.data1 = null;
   this.data2 = null;
   this.data3 = null;
  this.$router.push('/');
},
  activeUsers(){
const token=localStorage.getItem('token');
const header={
  Authorization:`Bearer ${token}`,
};
 axios.get('https://smdd-server.onrender.com/api/newUserCount',{header})
  .then(response=>{
    this.data=response.data.count;
    // console.log(response.data)
  })
  .catch(error=>{
    console.log(error)
  });
  axios.get('https://smdd-server.onrender.com/api/activeUsers',{header})
  .then(response => {
    this.data1=response.data.count;
  })
  .catch(error=>{
    console.log(error)
  });
  axios.get('https://smdd-server.onrender.com/api/totalusers',{header})
  .then(response => {
    this.data2=response.data.count;
  })
  .catch(error=>{
    console.log(error)
  });
  axios.get('https://smdd-server.onrender.com/score/leaderboard',{header})
  .then(response=>{
    this.data3=response.data.leaderboard
    // console.log(response.data)
  })
  .catch(error=>{
    console.log(error)
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
.interface {
  background: var(--bg-primary-200);
  width: 100%;
  border-radius: 40px 0px 0px 40px;
  /* margin-left: -34px; */
  z-index: 1;
  padding: 5rem;
}
.dashboard-content {
  display: flex;
  justify-content: space-between;
}
.boxes {
  width: 750px;
  display: flex;
  justify-content: space-between;
}
.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% / 4.5);
  background: #ececec;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  padding: 15px;
  border-radius: 10px;
  height: 185px;
  justify-content: center;
  text-align: center;
  font-size: small;
}
.box img {
  width: 50px;
  margin: 1rem 0;
}

.leaderboard h2 {
  text-align: center;
}

table {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 15px !important;
  cursor: pointer;
  overflow: hidden;
  width: 500px;
}

tr:nth-child(even),
tr:nth-child(odd) {
  background-color: white;
}
thead tr {
  background-color: white;
}
th {
  padding: 15px;
}
</style>