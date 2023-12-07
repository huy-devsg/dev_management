<template>
  <div class="row">
    <div class="col-12 grid-margin">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Dev Management</h4>
          <div class="card-bar-controll">
            <search-bar></search-bar>
          </div>
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Full Name</th>
                  <th>Programming Language</th>
                  <th>Gender</th>
                  <th>Action</th>
                </tr>
              </thead>
              <user-list></user-list>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import authMixin from '@/mixins/authMixin'
import SearchBar from './SearchBar.vue'
import UserList from './UserList.vue'
export default {
  data() {
    return {
      formType: 'user',
    }
  },
  components: {
    SearchBar,
    UserList,
  },
  mixins: [authMixin],
}
</script>

<style>
.card-bar-controll {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
