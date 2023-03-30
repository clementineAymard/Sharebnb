<template>
    <section class="login-modal flex column align-center">
        <form @submit.prevent="doLogin">
            <h2>Login</h2>
            <select v-model="loginCred.username">
                <option value="" selected>Select User</option>
                <option v-for="user in users" :key="user._id" :value="user.username">{{ user.fullname }}</option>
            </select>
            <input type="text" v-model="loginCred.username" placeholder="User name" />
            <input type="text" v-model="loginCred.password" placeholder="Password" />
            <button>Login</button>
        </form>

        <form @submit.prevent="doSignup">
            <h2>Signup</h2>
            <input type="text" v-model="signupCred.fullname" placeholder="Your full name" />
            <input type="text" v-model="signupCred.username" placeholder="Username" />
            <input type="password" v-model="signupCred.password" placeholder="Password" />
            <!-- <ImgUploader @uploaded="onUploaded" /> -->
            <button>Signup</button>

        </form>
    </section>
</template>

<script>

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import ImgUploader from './ImgUploader.vue'

export default {
    name: 'login-signup',
    data() {
        return {
            msg: '',
            loginCred: { username: '', password: 'secret' },
            signupCred: { username: '', password: '', fullname: '', imgUrl: '' },
        }
    },
    computed: {
        users() {
            return this.$store.getters.users
        },
        loggedinUser() {
            return this.$store.getters.loggedinUser
        },
    },
    created() {
        this.loadUsers()
    },
    methods: {
        async doLogin() {
            if (!this.loginCred.username) {
                this.msg = 'Please enter username/password'
                return
            }

            try {
                await this.$store.dispatch({ type: "login", userCred: this.loginCred })
                this.$router.push('/')
                console.log(`Welcome back ${this.loginCred.username} !`);
                showSuccessMsg(`Welcome back ${this.loginCred.username} !`)
            } catch (err) {
                console.log(err)
                this.msg = 'Failed to login'
            }
            this.$emit('closeModal')
        },
        async doSignup() {
            if (!this.signupCred.fullname || !this.signupCred.password || !this.signupCred.username) {
                this.msg = 'Please fill up the form'
                return
            }
            try{
                await this.$store.dispatch({ type: 'signup', userCred: this.signupCred })
                this.$router.push('/')
                this.$emit('closeModal')
                showSuccessMsg(`Welcome ${this.loginCred.username} ! `)
            } catch(err) {
                console.log('Error while signing up')
                throw err
            }
        },
        async loadUsers() {
            try{
               await this.$store.dispatch({ type: "loadUsers" }) 
            } catch (err) {
                console.log('Error while getting users')
                throw err
            }
        },
    },
    components: {
        ImgUploader
    }
}
</script>