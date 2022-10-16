<template>
  <div class="relative bg-white">
    <div>
      <div
        class="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10"
      >
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <span class="sr-only">Your Company</span>
            <img
              class="h-8 w-auto sm:h-10"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
        </div>
        <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <nuxt-link class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900" to="/register">Register</nuxt-link>
            <nuxt-link class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700" to="/login">Log In</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComp",
  components: {},
};
</script>
