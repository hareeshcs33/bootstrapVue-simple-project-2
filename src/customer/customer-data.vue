<template>
  <b-container>
    <h3>Customer Data</h3>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-card class="mb-3">
        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
          description="We'll never share your email with anyone else."
        >
          <b-form-input
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>
      </b-card>
      <b-card class="mb-3">
        <b-form-group
          label="Phone Number:"
          label-for="phone_number"
          description="We'll never share your Phone Number with anyone else."
        >
          <b-form-input
            v-model="form.phone_number"
            type="number"
            placeholder="Enter Phone Number"
            required
          ></b-form-input>
        </b-form-group>
      </b-card>

      <b-card class="mb-3">
        <b-form-group id="input-group-2" label="Your Name:" label-for="name">
          <b-form-input
            v-model="form.name"
            placeholder="Enter name"
            required
          ></b-form-input>
        </b-form-group>
      </b-card>

      <b-card class="mb-3">
        <b-form-group id="input-group-3" label="Gender:" label-for="gender">
          <b-form-select
            v-model="form.gender"
            :options="genders"
            required
          ></b-form-select>
        </b-form-group>
      </b-card>

      <b-card class="mb-3">
        <b-form-group id="input-group-3" label="Food:" label-for="food">
          <b-form-select
            v-model="form.food"
            :options="foods"
            required
          ></b-form-select>
        </b-form-group>
      </b-card>

      <b-card class="mb-3">
        <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
          <b-form-checkbox-group
            v-model="form.checked"
            id="checkboxes-4"
            :aria-describedby="ariaDescribedby"
          >
            <b-form-checkbox value="salaried">salaried</b-form-checkbox>
            <b-form-checkbox value="non salaried">Non salaried</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
      </b-card>
      <b-card class="mb-3">
        <div>
          <label for="bob-datepicker">Date Of Birth:</label>
          <b-form-datepicker
            id="bob-datepicker"
            v-model="form.dob"
            class="mb-2"
          ></b-form-datepicker>
        </div>
      </b-card>
      <b-card class="mb-3">
        <b-form-textarea
          id="textarea"
          v-model="form.comment"
          placeholder="Enter something..."
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-card>

      <b-card class="mb-3">
        <b-form-group label="Individual radios" v-slot="{ ariaDescribedby }">
          <b-form-radio
            v-model="form.typeSelected"
            :aria-describedby="ariaDescribedby"
            name="TypeVal"
            value="typeA"
            >Type A</b-form-radio
          >
          <b-form-radio
            v-model="form.typeSelected"
            :aria-describedby="ariaDescribedby"
            name="TypeVal"
            value="typeB"
            >Type B</b-form-radio
          >
        </b-form-group>
      </b-card>
      <b-card class="mb-3">
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
        <b-button @click="cancelSubmit" variant="danger">Cancel</b-button>
      </b-card>
    </b-form>
    <b-card class="my-3 mb-3" header="Form Data result">
      <pre>{{ form }}</pre>
      <pre>From getters{{ getCustomersData }}</pre>
    </b-card>
  </b-container>
</template>
<script>
export default {
  name: "CustomerData",
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: "Babycorn",
        checked: [],
        gender: "Male",
        phone_number: null,
        dob: null,
        comment: null,
        typeSelected: null,
      },
      genders: ["Male", "Female", "Other"],
      foods: [
        {
          text: "Select One",
          value: "Null"
        },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Babycorn"
      ],
      show: true
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      console.log(JSON.stringify(this.form));
      this.$store.commit("customerData", this.form);
      this.$router.push("/customers-list");
    },
    onReset(event) {
      event.preventDefault();
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
    },
    cancelSubmit() {
      this.$router.push("/customers-list");
    }
  },
  computed: {
    getCustomersData() {
      return this.$store.getters.getCustomersData;
    }
  }
};
</script>
