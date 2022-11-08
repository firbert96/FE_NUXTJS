<template>
    <div class="flex h-screen">
        <div class="m-auto">
            <div class="font-bold text-2xl">Edit Profile</div>
            <form method="post" @submit.prevent="editProfile" class="mt-8 grid grid-cols-6 gap-6">
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
                    class="mt-1 w-full h-8 rounded-md shadow-sm shadow-indigo-500/50"
                />
                </div>

                <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
                    <button type="submit"
                        class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                    >
                        Edit
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: "EditProfile",
        components: {},
        computed: {
            ...mapGetters(['loggedInUser']),
        }, 
        data() {
            return {
                firstName: '',
                lastName: '',
                email: '',
            }
        },
        mounted(){
            this.firstName = this.loggedInUser.firstName
            this.lastName = this.loggedInUser.lastName
            this.email = this.loggedInUser.email
        },
        methods: {
            async editProfile() {
                try {
                    const editProfile = await this.$axios.put('/user/update', {
                        id: this.loggedInUser.id,
                        firstName: this.firstName,
                        lastName:this.lastName,
                        email:this.email
                    })
            
                    if(editProfile.status) {
                        const result = await this.$swal.fire({
                            title: 'Are you sure?',
                            text: "You won't be able to revert this!",
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Yes, Edit It'
                        }); 
                        if (result.isConfirmed) {
                            const success = await this.$swal.fire({
                                title: 'Success!',
                                text: 'Your Profile has been edited.',
                                icon: 'success'
                            })
                            if (success.isConfirmed) window.location.href = '/profile'
                        }
                    }
                    else {
                        this.$swal("Error!", editProfile, "error");
                    }
                } catch (e) {
                    return this.$swal("Failed!", e.response.data.error, "error");
                }
            }
        }
    };
</script>