<template>
    <b-container>
        <b-form @submit.prevent="login">
            <b-form-group label="User Name:">
                <b-form-input
                v-model="loginData.user_name"
                placeholder="username"
                ></b-form-input>
            </b-form-group>
            <b-form-group label="Password:">
                <b-form-input
                v-model="loginData.password"
                placeholder="Password"
                ></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="success" class="my-2">Login</b-button>
        </b-form>
        <b-card>
            <pre>{{ loginData.user_name }} {{ loginData.password }}</pre>
        </b-card>
    </b-container>
</template>
<script>
export default {
    data(){
        return {
            loginData: {
                user_name: '',
                password: ''
            }
        }
    },
    methods: {
        login(){
            if(this.loginData.user_name === "" || this.loginData.password === "") {
                console.log("username or password fields should not ")
            }else{
                console.log(JSON.stringify(this.loginData));
            }
        }
    }
}
</script>