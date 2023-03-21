<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card>
                    <v-toolbar dark color="deep-purple accent-4">
                        <v-toolbar-title>Login form</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <form @submit.prevent="submit">
                            <v-text-field
                                v-model="formData.login"
                                :error-messages="''"
                                label="Login"
                                required
                            ></v-text-field>
                            <v-text-field
                                v-model="formData.password"
                                :error-messages="''"
                                label="Password"
                                required
                            ></v-text-field>
                            <v-btn class="mr-4" type="submit">submit</v-btn>
                        </form>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    data() {
        return{
            formData: {
                login: '',
                password: ''
            }
        }
    },
    methods: {
        submit() {
            this.$store.dispatch('LOGIN', this.formData)
        }
    }
}
</script>
