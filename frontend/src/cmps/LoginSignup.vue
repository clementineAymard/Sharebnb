<template>
    <section class="login-modal flex column align-center">
        <div class="close-login-modal" @click="closeModal">x</div>
        <form>
            <h2>Login</h2>

            <input type="text" v-model="loginCred.username" placeholder="User name" />
            <input type="text" v-model="loginCred.password" placeholder="Password" />
            <p v-if="msg !== ''">{{ msg }}</p>
            <button @click.prevent="doLogin">Login</button>

            <button @click="doDemoLogin" class="btn-demo">Demo Login</button>
        </form>

        <form @submit.prevent="doSignup">
            <h2>Signup</h2>
            <input type="text" v-model="signupCred.fullname" placeholder="Your full name" />
            <input type="text" v-model="signupCred.username" placeholder="Username" />
            <input type="password" v-model="signupCred.password" placeholder="Password" />
            <button>Signup</button>

        </form>

        <!-- <CircleLoader /> -->
        <CircleLoader v-show="isLoaderShown" />
    </section>
</template>

<script>

import { showSuccessMsg } from '../services/event-bus.service.js'
import CircleLoader from './CircleLoader.vue'

export default {
    name: 'login-signup',
    data() {
        return {
            msg: '',
            loginCred: { username: '', password: '' },
            signupCred: { username: '', password: '', fullname: '', imgUrl: '' },
            isLoaderShown: false,
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
        doDemoLogin() {
            this.loginCred = { username: 'Clem', password: 'secret' }
            this.doLogin()
        },
        async doLogin() {
            if (!this.loginCred.username && !this.loginCred.password) {
                this.msg = 'Please enter credentials.'
                return
            }
            if (!this.loginCred.username) {
                this.msg = 'Please enter username.'
                return
            }
            if (!this.loginCred.password) {
                this.msg = 'Please enter password.'
                return
            }

            this.isLoaderShown = true

            try {
                await this.$store.dispatch({ type: "login", userCred: this.loginCred })
                showSuccessMsg(`Welcome back ${this.loginCred.username} !`)
                this.$emit('closeModal')
            } catch (err) {
                console.log(err)
                this.msg = 'Failed to login.'
            } finally {
                this.isLoaderShown = false
            }
        },
        async doSignup() {
            if (!this.signupCred.fullname || !this.signupCred.password || !this.signupCred.username) {
                this.msg = 'Please fill all the fields to sign up.'
                return
            }

            try {
                await this.$store.dispatch({ type: 'signup', userCred: this.signupCred })
                this.$emit('closeModal')
                showSuccessMsg(`Welcome ${this.loginCred.username} ! `)
            } catch (err) {
                console.log('Error while signing up')
                throw err
            }
        },
        async loadUsers() {
            try {
                await this.$store.dispatch({ type: "loadUsers" })
            } catch (err) {
                console.log('Error while getting users')
                throw err
            }
        },
        closeModal() {
            this.$emit('closeModal')
        }
    },
    components: {
        CircleLoader,
    }
}
</script>