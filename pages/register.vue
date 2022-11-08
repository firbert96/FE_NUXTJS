<template>
    <div class="max-w-xl lg:max-w-3xl">
    <h1
        class="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
    >
        Register
    </h1>
    <form method="post" @submit.prevent="register" class="mt-8 grid grid-cols-6 gap-6">
        <div class="col-span-6 sm:col-span-3">
        <label
            for="FirstName"
            class="block text-sm font-medium text-gray-700"
        >
            First Name
        </label>

        <input
            type="text"
            id="FirstName"
            name="first_name"
            v-model="firstName"
            required
            class="mt-1 w-full h-8 rounded-md shadow-sm shadow-indigo-500/50"
        />
        </div>

        <div class="col-span-6 sm:col-span-3">
        <label
            for="LastName"
            class="block text-sm font-medium text-gray-700"
        >
            Last Name
        </label>

        <input
            type="text"
            id="LastName"
            name="last_name"
            v-model="lastName"
            class="mt-1 w-full h-8 rounded-md shadow-sm shadow-indigo-500/50"
        />
        </div>

        <div class="col-span-6">
        <label
            for="Email"
            class="block text-sm font-medium text-gray-700"
        >
            Email
        </label>

        <input
            type="email"
            id="Email"
            name="email"
            v-model="email"
            required
            class="mt-1 w-full h-8 rounded-md shadow-sm shadow-indigo-500/50"
        />
        </div>

        <div class="col-span-6 sm:col-span-3">
        <label
            for="Password"
            class="block text-sm font-medium text-gray-700"
        >
            Password
        </label>

        <input
            type="password"
            id="Password"
            name="password"
            v-model="password"
            required
            class="mt-1 w-full h-8 rounded-md shadow-sm shadow-indigo-500/50"
        />
        </div>

        <div class="col-span-6 sm:col-span-3">
        <label
            for="PasswordConfirmation"
            class="block text-sm font-medium text-gray-700"
        >
            Password Confirmation
        </label>

        <input
            type="password"
            id="PasswordConfirmation"
            name="password_confirmation"
            v-model="passwordConfirmation"
            required
            class="mt-1 w-full h-8 rounded-md shadow-sm shadow-indigo-500/50"
        />
        </div>

        <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
        <button type="submit"
            class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
        >
            Create an account
        </button>

        <p class="mt-4 text-sm text-gray-500 sm:mt-0">
            Already have an account?
            <nuxt-link class="text-gray-700 underline" to="/login"
            >Log In</nuxt-link
            >.
        </p>
        </div>
    </form>
    </div>
</template>
  
<script>
  export default {
    layout: 'register',
    name: "Register",
    components: {
  
    },
    data() {
      return {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirmation: ''
      }
    },
    methods: {
      async register() {
        try {
          if(this.password !== this.passwordConfirmation) {
            return this.$swal("Failed!", `Password isn't match`, "error");
          }

          if (this.password.length < 6) {
            return this.$swal("Failed!", `Password length must more than 6 character`, "error");
          }
          const register = await this.$axios.post('/user/add', {
            firstName: this.firstName,
            lastName:this.lastName,
            email: this.email,
            password: this.password
          })
  
          await this.$auth.loginWith('local', {
            data: {
            email: this.email,
            password: this.password
            },
          })
  
          if(register.status) {
            this.$auth.refreshTokens()
            this.$swal("Success!", register, "success");
            this.$router.push('/')
          }
          else {
            this.$swal("Error!", register, "error");
          }
        } catch (e) {
          return this.$swal("Failed!", e.response.data.error, "error");
        }
      }
    }
  };
</script>
  