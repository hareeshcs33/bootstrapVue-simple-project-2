<template>
    <b-container>
        <h3>Customer Data</h3>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group
                id="input-group-1"
                label="Email address:"
                label-for="input-1"
                description="We'll never share your email with anyone else."
                >
                <b-form-input
                    id="input-1"
                    v-model="form.email"
                    type="email"
                    placeholder="Enter email"
                    required
                ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                <b-form-input
                    id="input-2"
                    v-model="form.name"
                    placeholder="Enter name"
                    required
                ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-3" label="Food:" label-for="input-3">
                <b-form-select
                    id="input-3"
                    v-model="form.food"
                    :options="foods"
                    required
                ></b-form-select>
            </b-form-group>
            <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
                <b-form-checkbox-group
                    v-model="form.checked"
                    id="checkboxes-4"
                    :aria-describedby="ariaDescribedby"
                    >
                    <b-form-checkbox value="me">Check me out</b-form-checkbox>
                    <b-form-checkbox value="that">Check that out</b-form-checkbox>
                </b-form-checkbox-group>
            </b-form-group>
            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
        <b-card class="my-3" header="Form Data result">
            <pre>{{ form }}</pre>
            <pre>From getters{{getCustomersData}}</pre>
        </b-card>
    </b-container>
</template>
<script>

export default {
    name: 'CustomerData',
    data(){
        return {
            form: {
                email: '',
                name: '',
                food: null,
                checked: []
            },
            foods: [
                {
                    text: 'Select One',
                    value: 'Null'
                },
                'Carrots',
                'Beans',
                'Tomatoes',
                'Carn'
            ],
            show: true
        }
    },
    methods: {
        onSubmit(event){
            event.preventDefault();
            console.log(JSON.stringify(this.form));
            this.$store.commit('customerData', this.form)
        },
        onReset(event){
            event.preventDefault();
            this.form.email = '';
            this.form.name = '';
            this.form.food = null;
            this.form.checked = [];
        }
    },
    computed: {
        getCustomersData(){
            return this.$store.getters.getCustomersData;
        }
    }
}
</script>
