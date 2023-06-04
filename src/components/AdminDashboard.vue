<template>
  <section class="dashboard-content">
    <section class="user-info">
      <h2>Dashboard</h2>
      <div class="boxes">
        <div class="box">
          <img src="../assets/newuser.png" alt="" />
          <span>New Users</span>
          <span>31</span>
        </div>
        <div class="box">
          <img src="../assets/activeusers.png" alt="" />
          <span>Active Users</span>
          <span>31</span>
        </div>
        <div class="box">
          <img src="../assets/totalusers.png" alt="" />
          <span>Total Users</span>
          <span>31</span>
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
          <tr>
            <th scope="row">abc</th>
            <td>Mark</td>
            <td>123123</td>
          </tr>
          <tr>
            <th scope="row">abc</th>
            <td>Jacob</td>
            <td>123123</td>
          </tr>
          <tr>
            <th scope="row">abc</th>
            <td>Larry the Bird</td>
            <td>123123</td>
          </tr>
          <tr>
            <th scope="row">abc</th>
            <td>Larry the Bird</td>
            <td>123123</td>
          </tr>
        </tbody>
      </table>
    </section>
  </section>
  <div class="graph">
    <h2>User Statistic</h2>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
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
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
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