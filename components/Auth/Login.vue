<template>
  <section class="bg-white">
    <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
      <section
        class="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6"
      >
        <img
          alt="Night"
          src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          class="absolute inset-0 h-full w-full object-cover opacity-80"
        />

        <div class="hidden lg:relative lg:block lg:p-12">
          <h2
            class="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl"
          >
            Login
          </h2>
        </div>
      </section>

      <main
        aria-label="Main"
        class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
      >
        <div class="max-w-xl lg:max-w-3xl">
          <div class="relative -mt-16 block lg:hidden">
            <h1
              class="mt-2 text-2xl font-bold text-white-900 sm:text-3xl md:text-4xl"
            >
              Login
            </h1>
          </div>

          <form action="#" class="mt-8 grid grid-cols-6 gap-6">
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
                class="mt-1 w-full h-8 rounded-md shadow-sm shadow-indigo-500/50"
              />
            </div>

            <div class="col-span-6">
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
                class="mt-1 w-full h-8 rounded-md shadow-sm shadow-indigo-500/50"
              />
            </div>

            <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
              <button
                class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
              >
                Login
              </button>

              <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                Still haven't an account?
                <nuxt-link class="text-gray-700 underline" to="/register"
                  >Register</nuxt-link
                >.
              </p>
            </div>
          </form>
        </div>
      </main>
    </div>
  </section>
</template>

<script>
export default {
  name: "Login",
  components: {},
};
</script>
