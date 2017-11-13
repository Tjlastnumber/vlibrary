<template>
  <vl-card>
    <vl-card-header>
      <h3>Table</h3>
    </vl-card-header>
    <vl-card-content>
      <table class="table card-table">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </vl-card-content>
  </vl-card>
</template>

<script>
import VlCard from '@/components/VlCard/VlCard.vue'
import VlCardHeader from '@/components/VlCard/VlCardHeader.vue'
import VlCardContent from '@/components/VlCard/VlCardContent.vue'
export default {
  name: 'TablePage',
  components: {VlCard, VlCardHeader, VlCardContent}
}
</script>

<style>
</style>
