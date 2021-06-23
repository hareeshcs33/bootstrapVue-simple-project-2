<template>
  <b-container>
    <h3>User Sign Up Form</h3>
    <ValidationObserver ref="observer">
      <b-form
        slot-scope="{ validate }"
        @submit.prevent="validate().then(handleSubmit)"
      >
        <ValidationProvider rules="required|alpha|min:3" name="Name">
          <b-form-group slot-scope="{ valid, errors }" label="Name">
            <b-form-input
              type="text"
              v-model="user.name"
              :state="errors[0] ? false : valid ? true : null"
              placeholder="Enter name"
            ></b-form-input>
            <b-form-invalid-feedback>
              {{ errors[0] }}
            </b-form-invalid-feedback>
          </b-form-group>
        </ValidationProvider>

        <ValidationProvider rules="required|email" name="Email">
          <b-form-group slot-scope="{ valid, errors }" label="Email">
            <b-form-input
              type="email"
              v-model="user.email"
              :state="errors[0] ? false : valid ? true : null"
              placeholder="Enter Email"
            ></b-form-input>
            <b-form-invalid-feedback>
              {{ errors[0] }}
            </b-form-invalid-feedback>
          </b-form-group>
        </ValidationProvider>

        <ValidationProvider
          rules="required|numeric|min:10|max:10"
          name="Mobile"
        >
          <b-form-group slot-scope="{ valid, errors }" label="Mobile">
            <b-form-input
              type="text"
              v-model="user.mobile"
              :state="errors[0] ? false : valid ? true : null"
              placeholder="Enter Mobile Number"
            ></b-form-input>
            <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
          </b-form-group>
        </ValidationProvider>

        <ValidationProvider name="City" rules="required">
          <b-form-group slot-scope="{ valid, errors }" label="City:">
            <b-form-select
              :state="errors[0] ? false : valid ? true : null"
              v-model="user.city"
              :options="cityOptions"
            ></b-form-select>
            <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
          </b-form-group>
        </ValidationProvider>

        <ValidationProvider rules="required" name="Password" vid="password">
          <b-form-group slot-scope="{ valid, errors }" label="Password">
            <b-form-input
              type="password"
              v-model="user.password"
              :state="errors[0] ? false : valid ? true : null"
              placeholder="Enter Password"
            ></b-form-input>
            <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
          </b-form-group>
        </ValidationProvider>

        <ValidationProvider
          rules="required|confirmed:password"
          name="Confirm Password"
        >
          <b-form-group slot-scope="{ valid, errors }" label="Confirm Password">
            <b-form-input
              type="password"
              v-model="user.confirmation"
              :state="errors[0] ? false : valid ? true : null"
            ></b-form-input>
            <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
          </b-form-group>
        </ValidationProvider>

        <ValidationProvider name="Hobbies" rule="required|length:1">
          <b-form-group slot-scope="{ valid, errors }" label="Hobies:">
            <b-form-checkbox-group
              :state="errors[0] ? false : valid ? true : null"
              v-model="user.hobbies"
            >
              <b-form-checkbox value="Reading">Reading</b-form-checkbox>
              <b-form-checkbox value="Writing">Writing</b-form-checkbox>
              <b-form-checkbox value="Movies">Movies</b-form-checkbox>
              <b-form-checkbox value="Music">Music</b-form-checkbox>
            </b-form-checkbox-group>
            <b-form-invalid-feedback>
              {{ errors[0] }}
            </b-form-invalid-feedback>
          </b-form-group>
        </ValidationProvider>
        <b-button block type="submit" variant="primary">Submit</b-button>
      </b-form>
    </ValidationObserver>
  </b-container>
</template>
<script>
export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
        mobile: "",
        city: "",
        password: "",
        confirmation: "",
        hobbies: []
      },
      cityOptions: ["Koppal", "Bengaluru", "Mysoor"]
    };
  },
  methods: {
      handleSubmit(){
        console.log("user", this.user);
      }
  }
};
</script>
