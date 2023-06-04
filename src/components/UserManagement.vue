<template>
  <div class="header">
    <h1>User Management</h1>
    <button class="btn btn-dark">EXPORT</button>
  </div>
  <section>
    <table class="table table-bordered table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">User Full Name</th>
          <th scope="col">User Name</th>
          <th scope="col">Email Address</th>
          <th scope="col">Password</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">abc</th>
          <td>Mark</td>
          <td>test@test.com</td>
          <td>123123</td>
        </tr>
        <tr>
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
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>

export default {
}
</script>

<style scoped>
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