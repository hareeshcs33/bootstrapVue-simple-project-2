<template>
    <b-container>
        <h3>SignUp</h3>
        <ValidationObserver v-slot="{ handleSubmit }">
            <form class="row" @submit.prevent="handleSubmit(onSubmit)">
                <ValidationProvider name="Name" rules="required|alpha" v-slot="{ errors }" class="col-6 mb-3">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="formData.name" />
                        <span>{{errors[0]}}</span>
                    </div>
                </ValidationProvider>
                <ValidationProvider name="E-Mail" rules="required|email" v-slot="{ errors }" class="col-6 mb-3">
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" class="form-control" v-model="formData.email" />
                        <span>{{errors[0]}}</span>
                    </div>
                </ValidationProvider>
                <ValidationProvider name="Password" rules="required|max:12|min:6" v-slot="{ errors }" class="col-6 mb-3">
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" v-model="formData.password" />
                        <span>{{errors[0]}}</span>
                    </div>
                </ValidationProvider>
                <ValidationProvider name="Gender" rules="required" v-slot="{ errors }" class="col-6 mb-3">
                    <div class="form-group">
                        <label>Gender</label>
                        <select class="form-control" v-model="formData.gender">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        <span>{{errors[0]}}</span>
                    </div>
                </ValidationProvider>
                <ValidationProvider name="Accept Terms" rules="required" v-slot="{ errors }" class="col-6 mb-3">
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" v-model="formData.acceptTerms" />
                        <label class="form-check-label">Accept Terms</label>
                    </div>
                    <span>{{errors[0]}}</span>
                </ValidationProvider>
                <div class="col-12">
                    <input type="submit" class="btn btn-primary col-6" text="Submit" />
                </div>
            </form>
        </ValidationObserver>
    </b-container>
</template>
<script>
export default {
    data: () => ({
        formData: {
            name: "",
            email: "",
            password: "",
            gender: "",
            acceptTerms: null
        }
    }),
    methods: {
        onSubmit(){
            console.log(this.formData);
        }
    }
}
</script>