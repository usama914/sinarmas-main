<template>
  <main>
    <aside>
      <div class="logo">
        <img src="../assets/logo.png" alt="" />
      </div>
      <div class="admin">
        <img src="../assets/admin.png" alt="" />
        <h5 class="title">Moin Shah</h5>
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

          <router-link to="/logout">
            <li>
              <i class="fa-solid fa-right-from-bracket"></i><span>Log Out</span>
            </li>
          </router-link>
        </ul>
      </div>
    </aside>
    <section class="interface">
      <router-view />
    </section>
  </main>
</template>

<script>
export default {
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
</style>