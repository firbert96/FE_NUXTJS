<template>
    <div class="flex h-screen">
      <div class="m-auto">
        <div class="flex flex-row gap-4">
          <p class="title text-2xl text-center font-bold">My Profile</p>
          <nuxt-link class="bg-indigo-500  hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded" to="/editProfile">Edit Profile</nuxt-link>
        </div>
        
        <div class="content mt-2">
          <table class="table-auto">
            <tbody>
              <tr>
                <td><strong>First Name:</strong></td>
                <td>{{ loggedInUser.firstName }}</td>
              </tr>
              <tr>
                <td><strong>Last Name:</strong></td>
                <td>{{ loggedInUser.lastName }}</td>
              </tr>
              <tr>
                <td><strong>Email:</strong></td>
                <td>{{ loggedInUser.email }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>

<script>
import { mapGetters } from 'vuex'

export default {
    middleware: 'auth',
    computed: {
      ...mapGetters(['loggedInUser'])
    }
}
</script>