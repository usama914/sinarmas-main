<template>
  <div class="header">
    <h1>Leader Board</h1>
  </div>
  <section>
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