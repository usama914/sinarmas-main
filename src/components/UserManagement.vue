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
        <h1>User Management</h1>
        <button class="btn btn-dark">EXPORT</button>
      </div>
      <table class="table table-bordered table-striped table-hover" v-if="data">
        <thead>
          <tr>
            <th scope="col">User Full Name</th>
            <th scope="col">User Name</th>
            <th scope="col">Email Address</th>
            <th scope="col">Password</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="det in data" :key="det.id">
            <th scope="row">{{ det.fullName }}</th>
            <td>{{ det.fullName }}</td>
            <td>{{ det.email }}</td>
            <td>{{ det.password }}</td>
          </tr>
          <!-- <tr>
            <th scope="row">abc</th>
            <td>Jacob</td>
            <td>test@test.com</td>
            <td>123123</td>
          </tr>
          <tr>
            <th scope="row">abc</th>
            <td>Larry the Bird</td>
            <td>test@test.com</td>
            <td>123123</td>
          </tr> -->
        </tbody>
      </table>
    </section>
  </main>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      data: null,
    };
  },
  mounted(){
    this.fetchData()
  },
  methods: {
logout(){
  localStorage.removeItem('token');
   this.data = null;
  this.$router.push('/');
},
    fetchData() {
      // Get the token from local storage
      const token = localStorage.getItem('token');
      
      // Set the token as a header in the request
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      // Make the API request using Axios
      axios.get('https://smdd-server.onrender.com/api/userManagement', { headers })
        .then(response => {
          // Handle the response and store the data
          this.data = response.data;
          // console.log(response.data)
        })
        .catch(error => {
          // Handle error
          console.error(error);
        });
    },
  },
};
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
table {
  margin-top: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 15px !important;
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

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>