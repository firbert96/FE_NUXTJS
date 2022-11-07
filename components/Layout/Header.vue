<template>
  <div class="relative bg-white">
    <div>
      <div class="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="" />
          </a>
        </div>
        <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
          <div class="inline-flex items-stretch rounded-md bg-white">
            <button class="rounded-l-md px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-700" @click="flag.dropdown=!flag.dropdown">
              My Account
            </button>

            <div class="relative">
              <button type="button" @click="flag.dropdown=!flag.dropdown"
                class="inline-flex h-full items-center justify-center rounded-r-md border-l border-gray-100 px-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700">
                <span class="sr-only">Menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd" />
                </svg>
              </button>

              <div v-if="flag.dropdown"
                class="absolute right-0 z-10 mt-4 w-56 origin-top-right rounded-md border border-gray-100 bg-white shadow-lg"
                role="menu">
                <div class="flow-root py-2">
                  <div class="-my-2 divide-y divide-gray-100">
                    <div class="p-2">
                      <button
                        class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                        role="menuitem">
                        My Profile
                      </button>
                    </div>

                    <div class="p-2">
                      <form method="POST" action="#">
                        <button type="submit"
                          class="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                          role="menuitem">
                          Logout
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <nuxt-link class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900" to="/register">
            Register</nuxt-link>
          <nuxt-link
            class="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            to="/login">Log In</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComp",
  components: {},
  data() {
    return {
      flag: {
        dropdown:false,
      },
    }
  },
  methods:{},
};
</script>
